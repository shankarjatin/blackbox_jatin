const mongoose=require("mongoose");


const questionSchema=new mongoose.Schema({
    qn:{
        type:Number
    },
    level:{
        type:Number,
    },
    answer_expression:{
        type:String,
    },
    isSubmitted:{
        type:Boolean,
        default:false,
    }
})

const Question=new mongoose.model("Question",questionSchema);

module.exports=Question;