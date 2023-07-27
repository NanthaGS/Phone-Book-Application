import React, { useState } from "react";
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { NavLink, useNavigate } from "react-router-dom";
import './Login.css';
import { useDispatch } from "react-redux";
import { login } from "./Redux/userslice";
import axios from "axios";

const Login = ({ setUserState }) => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');

  const changeHandler = (e) => {
    setUsername(e.target.value);
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const changeHandler2 = (e) => {
    setPassword(e.target.value);
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const errors = {};
    const emailRegex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "*Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!values.password) {
      errors.password = "*Password is required";
    }

    return errors;
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    
    const errors = validateForm(user);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        
        const response = await axios.post("http://localhost:8181/api/v1/auth/authenticate", user);
        const jwtToken = response.data.token;
        localStorage.setItem("jwtToken", jwtToken);
        console.log(response.data.user.email);
        dispatch(login({name:response.data.user.email}));
        // Navigate
        navigate("/homepage");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="logg">
    <div className="log">
      <form>
      <FaPhoneSquareAlt className="phone" />
        <h1>LOGIN</h1>
        <label className="email">
          <AiOutlineMail className="form-icon" />
          Email
        </label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={changeHandler}
          value={user.email}
        />
        <p className="b">{formErrors.email}</p>

        <label className="password">
          <AiOutlineLock className="form-icon" />
          Password
        </label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={changeHandler2}
          value={user.password}
        />
        <p className="b">{formErrors.password}</p>

        <NavLink to="/homepage">
          <button
            className="btn"
            style={{ width: '200px', marginLeft: "70px" }}
            onClick={loginHandler}
          >
            Login
          </button>
        </NavLink>
      </form>
      <p className="last">
        Not yet registered?
        <NavLink style={{ textDecoration: 'none' }} to="/signup" className="a">
          Create an account
        </NavLink>
      </p>
    </div>
    </div>
  );
};

export default Login;
