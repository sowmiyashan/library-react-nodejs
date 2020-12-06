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

var i_date = new Date();
var d_date = new Date();
d_date.setDate(d_date.getDate()+15);

router.post("/",function(req,result,next){
    con.query("SELECT * FROM Book WHERE ISBN_no=?",req.body.isbn,function(err,res){
        con.query("UPDATE Book SET Books_count_current=? WHERE ISBN_no=?",[(res[0].Books_count_current)-1,req.body.isbn],function(err1,res1){
            let data={
                ISBN_no:req.body.isbn,
                Reg_no:s.S_No,
                Book_Title:res[0].Book_Title,
                Issue_Date:i_date,
                Due_Date:d_date
            }
            con.query("INSERT INTO Books_Issued SET ?",data,function(err2,res2){
                con.query("SELECT * FROM Student WHERE Reg_no=?",s.S_No,function(err3,res3){
                    con.query("UPDATE Student SET Book_count=?",(res3[0].Book_count)+1,function(err4,res4){
                        result.send("Successfully Added to Your List");
                    })
                })
            })
        })
    })
})

module.exports = router;
