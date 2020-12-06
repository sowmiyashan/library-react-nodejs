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
    con.query("SELECT * FROM Book WHERE ISBN_no=?",req.body.isbn,function(err,res){
        con.query("UPDATE Book SET Books_count_current=? WHERE ISBN_no=?",[(res[0].Books_count_current)+1,req.body.isbn],function(err1,res1){
            con.query("DELETE FROM Books_Issued WHERE ISBN_no=? AND Reg_no=?",[req.body.isbn,s.S_No],function(err2,res2){
                con.query("SELECT * FROM Student WHERE Reg_no=?",s.S_No,function(err3,res3){
                    con.query("UPDATE Student SET Book_count=?",(res3[0].Book_count)-1,function(err4,res4){
                        result.send("Successfully Returned");
                    })
                })
                
            })
        })
    })
})

module.exports=router;