import { sheGuardUserModel } from "../models/sheGuardUser.js";

// Register a new user with mobile number
export const registerUser = async (req, res) => {
    try {
        const { mobilenumber } = req.body;
        // Check if the mobile number is already registered
        const existingUser = await sheGuardUserModel.findOne({ mobilenumber });
        if (existingUser) {
        return res.status(400).json({ message: 'Mobile number already registered' });
        }

        // Create new user instance
        const newUser = new sheGuardUserModel({ mobilenumber });

        // Save user to database
        const savedUser = await newUser.save();

        res.status(201).json(savedUser); // Send response with saved user data
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Failed to register user' });
    }
    };



        // Get all registered users
export const getAllUsers = async (req, res) => {
    try {
        // Retrieve all users from the database
        const users = await sheGuardUserModel.find();
        res.status(200).json(users); // Send response with retrieved users
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({ message: 'Failed to retrieve users' });
    }
};
    