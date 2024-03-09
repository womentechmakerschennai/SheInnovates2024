import { emergencyModel } from "../models/emergency.js";

// Add emergency details
export const addEmergencyDetails = async (req, res) => {
    try {
        const { name, phonenumber, relationship } = req.body;

        // Create new emergency details instance
        const newEmergencyDetails = new emergencyModel({
        name,
        phonenumber,
        relationship,
        });

        // Save emergency details to the database
        const savedEmergencyDetails = await newEmergencyDetails.save();

        res.status(201).json(savedEmergencyDetails); // Send response with saved emergency details
    } catch (error) {
        console.error('Error adding emergency details:', error);
        res.status(500).json({ message: 'Failed to add emergency details' });
    }
    };

// Get all emergency details
export const getAllEmergencyDetails = async (req, res) => {
    try {
        // Retrieve all emergency details from the database
        const emergencyDetails = await emergencyModel.find();

        res.status(200).json(emergencyDetails); // Send response with retrieved emergency details
    } catch (error) {
        console.error('Error retrieving emergency details:', error);
        res.status(500).json({ message: 'Failed to retrieve emergency details' });
    }
};
