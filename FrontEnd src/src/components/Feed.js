import React, { useState } from "react";
import axios from "axios";
import './Feed.css';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import {MdFeedback} from 'react-icons/md';

const Feedback = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with your backend API endpoint to handle feedback submission
      const apiUrl = "http://localhost:8181/api/v1/demo/send";

      // Replace 'YOUR_JWT_TOKEN' with the actual JWT token generated from your backend after authentication
      const jwtToken =  localStorage.getItem("jwtToken");

      // Configuring the headers with JWT token
      const config = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };

      // Sending the feedback data to the server
      const response = await axios.post(apiUrl, {
        name: name,
        email: email,
        feedback: feedbackText,
      }, config);
        alert("Feedback submitted succesfully");
      navigate("/homepage");
      if (response.status === 201) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div>
    <div className="imgss">
        <Navbar/>
    <div className="feedback-container">
      {submitted ? (
        <div className="feedback-submitted">
          <h3>Thank you for your feedback!</h3>
          <p>We value your input.</p>
        </div>
      ) : (
        <div>
          <h2><MdFeedback></MdFeedback>FEEDBACK FORM<MdFeedback></MdFeedback></h2>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text11"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email11"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="feedback">Feedback:</label>
            <textarea
              id="feedback"
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="Enter your feedback here..."
            />
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default Feedback;
