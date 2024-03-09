import { reportModel } from "../models/report.js";

export const addReports = async (req, res) => {
  try {
    const { location, crime, description } = req.body;

    // Create new crime report instance
    const newReport = new reportModel({
      location,
      crime,
      description,
    });

    // Save report to database
    const savedReport = await newReport.save();
    res.status(201).json(savedReport); // Send response with saved report data
  } catch (error) {
    console.error("Error saving report:", error.message);
    res.status(500).json({ message: "Failed to save report" });
  }
};

// Retrieving crime reports from the database
export const getReports = async (req, res) => {
  console.log("here");
  try {
    const reports = await reportModel.find();
    res.status(200).json(reports); // Send response with retrieved reports
  } catch (error) {
    console.error("Error retrieving reports:", error);
    res.status(500).json({ message: "Failed to retrieve reports" });
  }
};
