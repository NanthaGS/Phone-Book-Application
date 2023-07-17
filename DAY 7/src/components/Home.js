import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField } from "@mui/material";
import { HiOutlineUserAdd } from 'react-icons/hi';
import "./Home.css";
import Navbar from "./Navbar";

const Home = () => {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Ajaay",
      number: "123-456-7890",
      email: "ajay@gmail.com",
      address: "123 Street, City",
      job: "Software Engineer",
      notes: "video gamer",
    },
    {
      id: 2,
      name: "Ben",
      number: "987-654-3210",
      email: "benten@gmail.com",
      address: "456 Road, Town",
      job: "Designer",
      notes: "Consectetur adipiscing elit",
    },
    {
      id: 3,
      name: "Carly",
      number: "987-654-3210",
      email: "carly@gmail.com",
      address: "456 Road, Town",
      job: "Contractor",
      notes: "Consectetur adipiscing elit",
    },{
      id: 4,
      name: "David",
      number: "987-654-3210",
      email: "davidbeckam@hotmail.com",
      address: "456 Road, Town",
      job: "Graphic Designer",
      notes: "",
    },{
      id: 5,
      name: "Elijah",
      number: "987-654-3210",
      email: "jane@example.com",
      address: "456 Road, Town",
      job: "Data Analyst",
      notes: "",
    },{
      id: 6,
      name: "Farzi",
      number: "987-654-3210",
      email: "jane@example.com",
      address: "456 Road, Town",
      job: "Data Analyst",
      notes: "",
    },{
      id: 7,
      name: "Godse",
      number: "987-654-3210",
      email: "jane@example.com",
      address: "456 Road, Town",
      job: "Data Analyst",
      notes: "",
    },{
      id: 8,
      name: "Hari",
      number: "987-654-3210",
      email: "jane@example.com",
      address: "456 Road, Town",
      job: "Data Analyst",
      notes: "",
    },{
      id: 9,
      name: "Ilyas",
      number: "987-654-3210",
      email: "jane@example.com",
      address: "456 Road, Town",
      job: "Data Analyst",
      notes: "",
    },{
      id: 10,
      name: "Jerowin",
      number: "987-654-3210",
      email: "jane@example.com",
      address: "456 Road, Town",
      job: "Data Analyst",
      notes: "",
    },{
      id: 11,
      name: "Kalidas",
      number: "987-654-3210",
      email: "jane@example.com",
      address: "456 Road, Town",
      job: "Data Analyst",
      notes: "",
    },{
      id: 12,
      name: "Lal",
      number: "987-654-3210",
      email: "jane@example.com",
      address: "456 Road, Town",
      job: "Data Analyst",
      notes: "",
    }
  ]);

  const [selectedContact, setSelectedContact] = useState(null);
  const [searchText, setSearchText] = useState("");

  const handleEditContact = (contactId) => {
    navigate(`/filter/${contactId}`);
  };

  const handleDeleteContact = (contactId) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== contactId));
  };

  const handleAddContact = () => {
    navigate("/add");
  };

  const handleShowContactDetails = (contact) => {
    setSelectedContact(contact);
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
          <h1 style={{alignItems:"center"}}><marquee>Contacts</marquee></h1>
            <br />
            <Button className="add-contact-button" size="large" onClick={handleAddContact}>
              <HiOutlineUserAdd /> Create Contact
            </Button>
          </div>      
        )}
        {selectedContact ? (
          <div className="contact-details">
            <h2 className="ab">{selectedContact.name}</h2>
            <p lassName="abc">Number: {selectedContact.number}</p>
            <p lassName="abc">Email: {selectedContact.email}</p>
            <p lassName="abc">Address: {selectedContact.address}</p>
            <p lassName="abc">Job: {selectedContact.job}</p>
            <p lassName="abc">Notes: {selectedContact.notes}</p>
            <Button variant="contained" color="error" onClick={handleHideContactDetails}>
              Back to Table
            </Button>
          </div>
          
        ) : (
          <TableContainer component={Paper} className="table-container">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Number</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Edit</TableCell>
                  <TableCell>Delete</TableCell>
                  <TableCell>Show Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredContacts.map((contact) => (
                  <TableRow key={contact.id}>
                    <TableCell>{contact.name}</TableCell>
                    <TableCell>{contact.number}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary" onClick={() => handleEditContact(contact.id)}>
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" color="error" onClick={() => handleDeleteContact(contact.id)}>
                        Delete
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="outlined" onClick={() => handleShowContactDetails(contact)}>
                        Show Details
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
