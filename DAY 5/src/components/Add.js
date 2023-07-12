import React, { useState } from 'react';
import './Add.css';
const Add= () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    // You can access the form values from the component state variables
    console.log({ name, phoneNumber, email, address, jobTitle, company });
    // Reset the form
    setName('');
    setPhoneNumber('');
    setEmail('');
    setAddress('');
    setJobTitle('');
    setCompany('');
  };

  return (
    <div className="contact-form-container">
        <h1>Add new Contact</h1>
      <div className="form-box">
        
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name" className="label">
            Name:
            <input
              type="text"
              id="name"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="phoneNumber" className="label">
            Phone Number:
            <input
              type="tel"
              id="phoneNumber"
              className="input"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
          <label htmlFor="email" className="label">
            Email:
            <input
              type="email"
              id="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="address" className="label">
            Address:
            <input
              type="text"
              id="address"
              className="input"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <label htmlFor="jobTitle" className="label">
            Job Title:
            <input
              type="text"
              id="jobTitle"
              className="input"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </label>
          <label htmlFor="company" className="label">
            Company:
            <input
              type="text"
              id="company"
              className="input"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </label>
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;