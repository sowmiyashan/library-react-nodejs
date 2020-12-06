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
    con.query("SELECT * FROM Books_Issued WHERE ISBN_no=? AND Reg_no=?",[req.body.isbn,s.S_No],function(err,res){
        var d = res[0].Due_Date;
        d.setDate(d.getDate()+15);
        con.query("UPDATE Books_Issued SET Due_Date=? WHERE ISBN_no=? AND Reg_no=?",[d,req.body.isbn,s.S_No],function(err1,res1){
            if(err) result.send("Server Error");
            else
                result.send("Successfully Renewed");
        })
    })
})

module.exports=router;