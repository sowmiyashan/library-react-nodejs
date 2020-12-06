var mysql = require('mysql')
var bcrypt = require('bcrypt');
var express = require("express");
var s = require('./Stud_No');
var router = express.Router();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Asm1234%",
    database: "library"
});


router.post("/",function(req,result,next){
    con.query("SELECT * FROM Student_login WHERE Username=?",req.body.username,function(err,res){
        if(!err && res=="")
            result.send("Incorrect Username or Password")
        if(err) result.send("Server error");
        else 
        {
            bcrypt.hash(req.body.password,res[0].salt,function(err1,hash){
                if(err) result.send("Server error");
                if(hash===res[0].password)
                {
                    result.send("Login Successful");
                    s.S_No=req.body.username;
                }
                else
                    result.send("Incorrect Username or Password");
            })
        }

    })
})

module.exports=router;