import { InputLabel, MenuItem, Rating, Select, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { crimeType, locations } from "../shared/common";

export const Report = () => {
    const handleFormSubmit = (values: any) => {
        console.log(values);
        
    }
    const formik = useFormik({
        initialValues: {
            location: locations[0].name,
            title: "",
            comment: '',
            rating: 4,
            crimeType: crimeType[0].name
        },
        onSubmit: handleFormSubmit,
    });
    return (
        <div className="form-wrapper">
            <h2>Submit an Incident</h2>
            <form onSubmit={formik.handleSubmit} className="form-container">
                <div className="form-field">
                    <InputLabel id="demo-simple-select-label">Location</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        name="location"
                        id="demo-simple-select"
                        value={formik.values.location}
                        label="Location"
                        onChange={formik.handleChange}
                    >
                        {locations.map(loc => (
                            <MenuItem value={loc.name}>{loc.name}</MenuItem>
                        ))}
                    </Select>
                </div>

                <div className="form-field">
                    <InputLabel id="demo-simple-select-label">Crime Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        name="crimeType"
                        id="demo-simple-select"
                        value={formik.values.crimeType}
                        label="CrimeType"
                        onChange={formik.handleChange}
                    >
                        {crimeType.map(crime => (
                            <MenuItem value={crime.name}>{crime.name}</MenuItem>
                        ))}
                    </Select>
                </div>

                <div className="form-field">
                    <Typography component="legend">Rating</Typography>
                    <Rating
                        name="rating"
                        value={formik.values.rating}
                        onChange={formik.handleChange}
                    />
                </div>

                <div className="form-field">
                    <TextField 
                        id="outlined-basic" 
                        name="title" 
                        label="Title for the report" 
                        variant="outlined" 
                        onChange={formik.handleChange}
                        value={formik.values.title} 
                    />
                </div>

                <div className="form-field">
                    <TextField 
                        id="outlined-basic" 
                        name="comment" 
                        label="Give a detailed description" 
                        variant="outlined" 
                        multiline
                        onChange={formik.handleChange}
                        value={formik.values.comment} 
                    />
                </div>
            <button type="submit">Submit</button>
            </form>
        </div>
    );
}