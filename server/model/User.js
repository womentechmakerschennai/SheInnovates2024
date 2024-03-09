import mongoose from "mongoose";

const UserModel=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    xp:{
        type:Number,
        default:0
    },
    role:{
        type:String,
        default:"viewers"
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Usermodels=mongoose.model('User',UserModel)

export default Usermodels