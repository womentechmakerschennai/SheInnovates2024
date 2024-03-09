import mongoose from 'mongoose';

const emergencyDetailsSchema = new mongoose.Schema({
        name:{
            type: String,
            required: true
        },
        phonenumber:{
            type: String,
            required: true
        },
        relationship:{
            type: String,
            required: true
        }
});

export const emergencyModel= mongoose.model("emergency",emergencyDetailsSchema);