import mongoose from "mongoose";

const enquireSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    }
    ,
    dob: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phone:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const enquiremodel = mongoose.model("enquireform", enquireSchema)
export default enquiremodel