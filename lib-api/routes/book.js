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

router.get("/",function(req,result,next){
    con.query("SELECT * FROM Books_Issued WHERE Reg_no=?",s.S_No,function(err,res){
        for(index in res)
        {
            res[index].Issue_Date=(res[index].Issue_Date).toISOString().slice(0,10);
            res[index].Due_Date=(res[index].Due_Date).toISOString().slice(0,10);
        }
        result.send(res);
    })
})

module.exports = router;
