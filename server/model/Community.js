import mongoose from "mongoose";

const womenscommunity=new mongoose.Schema({
communityname:{
    type:String,
    required:true
},
communitydesc:{
    type:String,
    required:true
},
xp:{
    type:Number,
    default:0
},
date: {
    type: Date,
    default: Date.now
}
})

const community= mongoose.model("community",womenscommunity)

export default community