const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");
const rateLimit = require("express-rate-limit");
const Router = require("./routes/router");
const middleware = require("./middlewares/middleware");

require("dotenv").config(); // for using env variables
require("./models/model");

const limiter = rateLimit({
	windowMs: 2 * 60 * 1000, // 10 minutes
	max: 400, // limit each IP to 100 requests per windowMs
});

const app = express();
app.set('trust proxy', 1);
app.use(limiter);

app.set("view engine", "ejs");

app.use(morgan("dev"));

app.use(express.urlencoded({
	extended: true
}));

app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false,
}));

app.use(passport.initialize()); // initialising passport
app.use(passport.session()); // making express use passport.sessions

app.use(middleware.assets);
app.use("/", Router);

///////// delete in production
const User = require("./models/user");
const auth_middleware = require("./middlewares/auth_middleware.js");
app.get("/reset", auth_middleware.check_login, function(req, res) {
	User.findById(req.user._id, function(err, result) {
		result.level = 1;
		result.save(function() {
			res.redirect("/");
		})
	})
})
////////

app.use(middleware.error404);

// const Game = require("./models/game");

// const newGame = new Game({
// 	title: "Test",
// 	startTime: 1649836980000,  
// 	endTime: 1649836980000,  
// 	description: "starts at 1:00 pm"
// });

// newGame.save();

app.listen(process.env.PORT || 8000, function() {
	console.log("Server started at port 8000.");
});







// const express = require("express");
// const app = express()
// const bodyParser = require("body-parser");
// // const Util = require("./util");
// app.set("view engine","ejs")
// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json())
// const cors = require('cors');
// app.use(cors());
// const port = process.env.PORT || 5000 ;

// app.get("/q1",(req,res)=>{
//     res.render("pages/index1");
// })

// app.post("/ques1",async(req,res)=>{
// try{
//     // Util.get_user_value(req);
// let x=req.body.num1;
// let y=req.body.num2;
// let z=req.body.num3;
// let result = parseInt(x) + parseInt(y) + parseInt(z);
// res.render("pages/result",{ result: result ,x:x,y:y,z:z});


// }catch(e){console.log(e)}})
 
// app.post("/submit",(req,res)=>{
//     function testcase(){
//         let a=Math.floor(Math.random() * 101);
//         let b=Math.floor(Math.random() * 101);
//         let c=Math.floor(Math.random() * 101);;
//         let testcase=0;
//         const expression =  req.body.expression;
//         console.log(expression)
//         let result_user = eval(expression);
//         let result1=  a+b+c;
//         console.log("result1 is"+result1);
//         console.log("result_user"+result_user)
        


// for (i=0;i<3;i++){

//         if(result_user===result1){
//             testcase++
//                     console.log("total"+ testcase+ "passed");
//                 }
//         else{console.log("test case failed")}
       

//         a=a=20;b=b-10;c=c+10;
//             }
// if(testcase===3){console.log("logic coreect");
// res.render("pages/index2",{testcase:testcase})}

// else {
//     testcaseStatusfail=true;
//     res.render("pages/final",{testcase:testcase})
  
      
// }

//      }
//     testcase();
// })



// app.get("/q2",(req,res)=>{
//     res.render("pages/index2");
// })

// app.post("/ques2",async(req,res)=>{
// try{

// let x=req.body.num1;
// let y=req.body.num2;
// let z=req.body.num3;
// let correct_expression = "a*b+c"
// let result = (parseInt(x) * parseInt(y)) + parseInt(z);
// res.render("pages/result2",{ result: result ,x:x,y:y,z:z});


// }catch(e){console.log(e)}})
 
// app.post("/submit2",(req,res)=>{
//     function testcase(){
//         let a=Math.floor(Math.random() * 101);
//         let b=Math.floor(Math.random() * 101);
//         let c=Math.floor(Math.random() * 101);;
//         let testcase=0;
//         const expression =  req.body.expression;
//         console.log(expression)
//         let result_user = eval(expression);
//         let result1=  (a*b)+c;
//         console.log("result1 is"+result1);
//         console.log("result_user"+result_user)
        


// for (i=0;i<3;i++){

//         if(result_user===result1){
//             testcase++
//                     console.log("total "+ testcase+ " passed");
//                 }
//         else{console.log("test case failed")}
       

//         a=a=20;b=b-10;c=c+10;
//             }
// if(testcase===3){console.log("logic coreect")}
// res.render("pages/final",{testcase:testcase})

//      }
//     testcase();
// })










// app.listen(port,()=>{
//     console.log("server is live")
// })
