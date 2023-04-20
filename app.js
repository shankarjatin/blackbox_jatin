const express = require("express");
const app = express()
const bodyParser = require("body-parser");
app.set("view engine","ejs")
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
const port = process.env.PORT || 5000 ;


app.get("/ques",(req,res)=>{

    res.render("pages/index");
})







app.listen(port,()=>{
    console.log("server is live")
})
