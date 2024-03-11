import mongoose from "mongoose";
const sheGuardUserSchema=mongoose.Schema({
    mobilenumber:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})

export const sheGuardUserModel = mongoose.model("sheguarduser",sheGuardUserSchema);
