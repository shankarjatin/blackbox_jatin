const express = require("express");
const app = express()
const bodyParser = require("body-parser");
app.set("view engine","ejs")
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 5000 ;

app.get("/",(req,res)=>{
    res.render("pages/index1");
})

app.post("/ques",async(req,res)=>{
try{

var x=req.body.num1;
var y=req.body.num2;
var z=req.body.num3;
var result = parseInt(x) + parseInt(y) + parseInt(z);
res.render("pages/result",{ result: result ,x:x,y:y,z:z});
// res.render("pages/result",{ result: result ,x:x,y:y,z:z});

//  function testcase(){
//     var a=2;var b=2;
//     var c=3;
//     var testcase=0;
//     const expression =  req.body.expression;
//     console.log(expression)
//     var result_user = eval(expression);
//     var result1=  a+b+c;
//     console.log("result1 is"+result1);
//     console.log("result_user"+result_user)
    
//     if(result_user===result1){
//                 console.log("total"+testcase+"passed");
//             }
//     else{console.log("test case failed")}
//  }
// testcase();

}catch(e){console.log(e)}})
 
app.post("/submit",(req,res)=>{
    function testcase(){
        var a=2;var b=2;
        var c=3;
        var testcase=0;
        const expression =  req.body.expression;
        console.log(expression)
        var result_user = eval(expression);
        var result1=  a+b+c;
        console.log("result1 is"+result1);
        console.log("result_user"+result_user)
        
        if(result_user===result1){
                    console.log("total"+testcase+"passed");
                }
        else{console.log("test case failed")}
     }
    testcase();
//     var a=2;var b=2;
// var c=3;
// var testcase=0;
// const expression = req.body.expression;
// console.log(expression)

// var result_user =  eval(expression);
// var result1=  a+b+c;
// console.log("result1 is"+result1);
// console.log("result_user"+result_user)
// res.render("pages/result")
})





app.listen(port,()=>{
    console.log("server is live")
})
