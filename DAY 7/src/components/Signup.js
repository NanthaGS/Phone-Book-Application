import React, { useState } from "react";
import axios from "axios";
import './Signup.css';
import { useNavigate, NavLink } from "react-router-dom";

const Register = ({ setUserState }) => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
    address: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const errors = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.fname) {
      errors.fname = "First Name is required";
    }

    if (!values.lname) {
      errors.lname = "Last Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }

    if (!values.cpassword) {
      errors.cpassword = "Confirm Password is required";
    } else if (values.cpassword !== values.password) {
      errors.cpassword = "Confirm password and password should be the same";
    }

    if (!values.address) {
      errors.address = "Address is required";
    }

    return errors;
  };

  const signupHandler = (e) => {
    e.preventDefault();
    const errors = validateForm(user);
    setFormErrors(errors);
    setIsSubmit(true);

    if (Object.keys(errors).length === 0) {
      // Perform the signup request
      navigate("/homepage");
      // Your code for making the signup request and handling the response
    }
  };

  return (
    <div className="signn">
      <div className="sign">
        <form>
          <h1>REGISTRATION</h1>
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder="First Name"
            onChange={changeHandler}
            value={user.fname}
          />
          <p className="b">{formErrors.fname}</p>

          <input
            type="text"
            name="lname"
            id="lname"
            placeholder="Last Name"
            onChange={changeHandler}
            value={user.lname}
          />
          <p className="b">{formErrors.lname}</p>

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={changeHandler}
            value={user.email}
          />
          <p className="b">{formErrors.email}</p>

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={changeHandler}
            value={user.password}
          />
          <p className="b">{formErrors.password}</p>

          <input
            type="password"
            name="cpassword"
            id="cpassword"
            placeholder="Confirm Password"
            onChange={changeHandler}
            value={user.cpassword}
          />
          <p className="b">{formErrors.cpassword}</p>

          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            onChange={changeHandler}
            value={user.address}
          />
          <p className="b">{formErrors.address}</p>

          <NavLink to="/pro">
            <button className="btnn" onClick={signupHandler}>
              Register
            </button>
          </NavLink>
        </form>
        <br/>
        Already registered? <NavLink style={{ textDecoration: 'none' }} to="/" className="a">Login</NavLink>
      </div>
    </div>
  );
};

export default Register;
