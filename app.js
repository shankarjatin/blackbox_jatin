const express = require("express");
const app = express()
const bodyParser = require("body-parser");
// const Util = require("./util");
app.set("view engine","ejs")
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 5000 ;

app.get("/q1",(req,res)=>{
    res.render("pages/index1");
})

app.post("/ques1",async(req,res)=>{
try{
    // Util.get_user_value(req);
let x=req.body.num1;
let y=req.body.num2;
let z=req.body.num3;
let result = parseInt(x) + parseInt(y) + parseInt(z);
res.render("pages/result",{ result: result ,x:x,y:y,z:z});


}catch(e){console.log(e)}})
 
app.post("/submit",(req,res)=>{
    function testcase(){
        let a=Math.floor(Math.random() * 101);
        let b=Math.floor(Math.random() * 101);
        let c=Math.floor(Math.random() * 101);;
        let testcase=0;
        const expression =  req.body.expression;
        console.log(expression)
        let result_user = eval(expression);
        let result1=  a+b+c;
        console.log("result1 is"+result1);
        console.log("result_user"+result_user)
        


for (i=0;i<3;i++){

        if(result_user===result1){
            testcase++
                    console.log("total"+ testcase+ "passed");
                }
        else{console.log("test case failed")}
       

        a=a=20;b=b-10;c=c+10;
            }
if(testcase===3){console.log("logic coreect");
res.render("pages/index2",{testcase:testcase})}

else {
    testcaseStatusfail=true;
    res.render("pages/final",{testcase:testcase})
  
      
}

     }
    testcase();
})



app.get("/q2",(req,res)=>{
    res.render("pages/index2");
})

app.post("/ques2",async(req,res)=>{
try{

let x=req.body.num1;
let y=req.body.num2;
let z=req.body.num3;
let correct_expression = "a*b+c"
let result = (parseInt(x) * parseInt(y)) + parseInt(z);
res.render("pages/result2",{ result: result ,x:x,y:y,z:z});


}catch(e){console.log(e)}})
 
app.post("/submit2",(req,res)=>{
    function testcase(){
        let a=Math.floor(Math.random() * 101);
        let b=Math.floor(Math.random() * 101);
        let c=Math.floor(Math.random() * 101);;
        let testcase=0;
        const expression =  req.body.expression;
        console.log(expression)
        let result_user = eval(expression);
        let result1=  (a*b)+c;
        console.log("result1 is"+result1);
        console.log("result_user"+result_user)
        


for (i=0;i<3;i++){

        if(result_user===result1){
            testcase++
                    console.log("total "+ testcase+ " passed");
                }
        else{console.log("test case failed")}
       

        a=a=20;b=b-10;c=c+10;
            }
if(testcase===3){console.log("logic coreect")}
res.render("pages/final",{testcase:testcase})

     }
    testcase();
})










app.listen(port,()=>{
    console.log("server is live")
})
