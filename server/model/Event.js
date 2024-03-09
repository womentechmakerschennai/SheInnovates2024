import mongoose from "mongoose"

const eventSchema=new mongoose.Schema({

    eventname:{
        type:String,
        required:true
    },
    eventdesc:{
        type:String,
        required:true
    },
    eventplace:{
        type:String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now
    }

})

const Eventmodel = mongoose.model("event",eventSchema)

export default Eventmodel