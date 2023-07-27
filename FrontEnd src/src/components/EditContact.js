import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, InputAdornment } from "@mui/material";
import { HiOutlineUserAdd } from 'react-icons/hi';
import "./EditContact.css";
import Navbar from "./Navbar";
import axios from "axios";

const EditContact = () => {
  const navigate = useNavigate();
  const { email } = useParams();

  const [contactData, setContactData] = useState({
    name: "",
    phoneNo: "",
    address: "",
    job_title: "",
    company: "",
    notes: "",
  });

  useEffect(() => {
    fetchContactDetails();
  }, []);

  const fetchContactDetails = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        console.error("You need to log in to edit contact details.");
        return;
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(`http://localhost:8181/api/v1/demo/getcontact/${email}`, config); // Replace with your backend API endpoint
      setContactData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        console.error("You need to log in to edit contact details.");
        return;
      }

    
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.put(`http://localhost:8181/api/v1/demo/updatecontact/${email}`, contactData, config); // Replace with your backend API endpoint
      alert("Contact Updated Successfully");
      navigate("/homepage");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="back">
      <Navbar />
      <div className="edit-contact-container">
        <div className="edit-contact-form">
          <h1>Edit Contact Details</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              variant="outlined"
              name="name"
              value={contactData.name}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
            />

            <TextField
              label="Phone"
              variant="outlined"
              name="phoneNo"
              value={contactData.phoneNo}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
            />

            <TextField
              label="Address"
              variant="outlined"
              name="address"
              value={contactData.address}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
            />

            <TextField
              label="Job Title"
              variant="outlined"
              name="job_title"
              value={contactData.job_title}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Company"
              variant="outlined"
              name="company"
              value={contactData.company}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Notes"
              variant="outlined"
              name="notes"
              value={contactData.notes}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Save Changes
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
