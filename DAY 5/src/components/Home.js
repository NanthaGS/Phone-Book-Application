import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
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
    }
    // Add more contacts as needed
  ]);

  const handleEditContact = (contactId) => {
    navigate(`/editcontact/${contactId}`);
  };

  const handleDeleteContact = (contactId) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== contactId));
  };

  const handleAddContact = () => {
    navigate("/add");
  };

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <h1 className="home-title">Phone Book</h1>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Number</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Job</TableCell>
                <TableCell>Notes</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell>{contact.name}</TableCell>
                  <TableCell>{contact.number}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.address}</TableCell>
                  <TableCell>{contact.job}</TableCell>
                  <TableCell>{contact.notes}</TableCell>
                  <TableCell>
                    <Button variant="contained" onClick={() => handleEditContact(contact.id)}>Edit</Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" onClick={() => handleDeleteContact(contact.id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br></br>
        <Button variant="contained" className="add-contact-button" onClick={handleAddContact}>
          Add New Contact
        </Button>
      </div>
    </div>
  );
};

export default Home;
