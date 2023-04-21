const express = require("express");
const app = express()
const bodyParser = require("body-parser");
app.set("view engine","ejs")
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
const port = process.env.PORT || 5000 ;

app.get("/",(req,res)=>{
    res.render("pages/index1");
})

app.post("/ques",(req,res)=>{

   var a,b,c; 
var x=req.body.num1;
var y=req.body.num2;
var z=req.body.num3;
var result = parseInt(x) + parseInt(y) + parseInt(z);
res.render("pages/result",{ result: result ,x:x,y:y,z:z});
const expression = req.body.expression;
console.log(expression)
var a=2;
var b=2;
var c=3;

var result_user = eval(expression);
console.log(result_user);


})







app.listen(port,()=>{
    console.log("server is live")
})
