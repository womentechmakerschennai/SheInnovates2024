import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true
    },
    companyname: {
        type: String,
        required: true
    },
    companylocation: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const companymodel = mongoose.model("Jobs", companySchema)
export default companymodel