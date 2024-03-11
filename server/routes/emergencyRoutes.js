// routes/emergencyRoutes.js

import express from 'express';
import { addEmergencyDetails, getAllEmergencyDetails } from '../controllers/emergencyController.js';

const emergency_router = express.Router();

// Route to add emergency details
emergency_router.post('/', addEmergencyDetails);

// Route to retrieve all emergency details
emergency_router.get('/', getAllEmergencyDetails);

export default emergency_router;
