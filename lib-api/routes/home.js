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
    con.query("SELECT * FROM Student WHERE Reg_no=?",s.S_No,function(err,res){
        result.send(res);
    })
})

module.exports = router;