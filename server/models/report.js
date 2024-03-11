import mongoose from "mongoose";

const reportSchema = mongoose.Schema({
    location:{
        type: String,
        required:true
    },
    crime:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    }
})

export const reportModel= mongoose.model("reports",reportSchema);