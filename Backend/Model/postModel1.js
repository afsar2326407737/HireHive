const mongoose=require('mongoose')

const postSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    vacancy:{
        type:Number,
        required:true
    },
    shopImage:{
        type:String,
        required:true
    }
})

// const postSchema1=new mongoose.Schema({
//     username:{
//         type:String,
//         required:true
//     },
//     title:{
//         type:String,
//         required:true
//     },
//     description:{
//         type:String,
//         required:true
//     },
//     vacancy:{
//         type:Number,
//         required:true
//     },
//     shopImage:{
//         type:String,
//         required:true
//     }
// })

const Post=mongoose.model("Post",postSchema)

module.exports=Post