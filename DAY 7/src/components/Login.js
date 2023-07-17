import React, { useState } from "react";
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { NavLink, useNavigate } from "react-router-dom";
import './Login.css';
import { useDispatch } from "react-redux";
import { login } from "./Redux/userslice";

const Login = ({ setUserState }) => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();
  const [isSubmit, setIsSubmit] = useState(false);
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

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login({name:username, password:password,loggedIn:true}));
    const errors = validateForm(user);
    setFormErrors(errors);
    setIsSubmit(true);

    if (Object.keys(errors).length === 0) {
      // Perform the login request
      navigate("/homepage");
      // Your code for making the login request and handling the response
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

        <NavLink to="/pro">
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
