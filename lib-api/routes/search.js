var mysql = require("mysql");
var express = require("express");
var s = require("./Stud_No");
var router = express.Router();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Asm1234%",
    database: "library"
});

router.post("/",function(req,result,next){
    console.log(req.body);

    var queryString = "SELECT * FROM Book WHERE Books_count_current>0 ";
    var queryParams = [];
    if(req.body.title){
        queryString += 'AND Book_Title = ?'
        queryParams.push(req.body.title);
    }
    if(req.body.author){
        queryString += 'AND Author_Name = ?'
        queryParams.push(req.body.author);
    }
    else
    {
        queryString += 'AND Category = ?'
        queryParams.push(req.body.category);
    }
    console.log(queryString);
    console.log(queryParams);
    con.query(queryString,queryParams,function(err,res){
        if(err) result.send("Server Error");
        if(!err && res==="")
            result.send("No Books Available");
        console.log(res);
        result.send(res);
    })
})

module.exports = router;
