import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField } from "@mui/material";
import { HiOutlineUserAdd } from 'react-icons/hi';
import "./Home.css";
import Navbar from "./Navbar";
import axios from "axios";
import {MdCall} from 'react-icons/md';

const Home = () => {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
     
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        console.error("You need to log in to view contacts.");
        return;
      }

     
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get("http://localhost:8181/api/v1/demo/getcontacts", config); // Replace with your backend API endpoint
      setContacts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditContactByEmail = (email) => {
    navigate(`/edit/${email}`);
  };

  const handleDeleteContactByEmail = async (email) => {
    try {
     
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        console.error("You need to log in to perform this action.");
        return;
      }

     
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.delete(`http://localhost:8181/api/v1/demo/deletecontact/${email}`, config); // Replace with your backend API endpoint
      fetchContacts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddContact = () => {
    navigate("/add");
  };

  const handleCallContact = (phoneNumber) => {
 
    alert(`Calling ${phoneNumber}...`);
  };
  const handleShowContactDetailsByEmail = async (email) => {
    try {
      
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        console.error("You need to log in to view contact details.");
        return;
      }

     
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(`http://localhost:8181/api/v1/demo/getcontact/${email}`, config); // Replace with your backend API endpoint
      setSelectedContact(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleHideContactDetails = () => {
    setSelectedContact(null);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="back">
      <Navbar />
      <div className="home-container">
        {!selectedContact && (
          <div className="search-container">
            <TextField
              label="Search Contacts"
              variant="outlined"
              value={searchText}
              onChange={handleSearchChange}
            />
            <h1 style={{ alignItems: "center" }}>
              <marquee>Contacts</marquee>
            </h1>
            <br />
            <Button className="add-contact-button" size="large" onClick={handleAddContact}>
              <HiOutlineUserAdd /> Create Contact
            </Button>
          </div>
        )}
        {selectedContact ? (
          <div className="contact-details">
            <h2 className="ab">{selectedContact.name}</h2>
            <p className="abc">Number: {selectedContact.phoneNo}</p>
            <p className="abc">Email: {selectedContact.email}</p>
            <p className="abc">Address: {selectedContact.address}</p>
            <p className="abc">Job: {selectedContact.job_title}</p>
            <p className="abc">Notes: {selectedContact.notes}</p>
            <Button variant="contained" color="error" onClick={handleHideContactDetails}>
              Back to Table
            </Button>
          </div>

        ) : (
          <TableContainer component={Paper} className="table-container">
            <Table>
              <TableHead>
                <TableRow className="tbd">
                  <TableCell>Name</TableCell>
                  <TableCell>Number</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Edit</TableCell>
                  <TableCell>Delete</TableCell>
                  <TableCell>Show Details</TableCell>
                  <TableCell>Call</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredContacts.map((contact) => (
                  <TableRow key={contact.contact_id}>
                    <TableCell>{contact.name}</TableCell>
                    <TableCell>{contact.phoneNo}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary" onClick={() => handleEditContactByEmail(contact.email)}>
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" color="error" onClick={() => handleDeleteContactByEmail(contact.email)}>
                        Delete
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="outlined" onClick={() => handleShowContactDetailsByEmail(contact.email)}>
                        Show Details
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="primary"style={{size:'10px'}} onClick={() => handleCallContact(contact.phoneNo)}>
                        <MdCall></MdCall>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </div>
  );
};

export default Home;
