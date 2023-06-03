import React from "react";
import { useState } from "react";
import "./SignUpForm.css";
const SignUpForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [errors, setErrors] = useState("");
  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const profilePicHandler = (e) => {
    setProfilePic(e.target.files[0]);
  };

  //function to handle form validation

  const formValidation = () => {
    // Validate detials
    if (!userName.length || !email.length || !password.length) {
      setErrors("Please Fill All The Details");
    }

    // Validate email
    else if (!/^[a-z0-9\.]{1,}@gmail\.com$/g.test(email)) {
      setErrors("Email is Invalid");
    }

    // Validate password
    else if (password.length < 8) {
      setErrors("Password must be 8 characters long");
    }

    // Validate profile image
    else if (!profilePic) {
      setErrors("Profile pic required");
    } else {
      setErrors("");
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();

    formValidation();
    // console.log(userName);
    // console.log(email);
    // console.log(password);
    // console.log(errors);
  };
  return (
    <div className="form-container">
      <h1 className="main-head">Signup Form</h1>
      <form onSubmit={submitHandler} encType="multipart/form-data">
        <div className="form-values">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            id="username"
            value={userName}
            placeholder="Enter Username"
            onChange={userNameHandler}
          />
        </div>
        <div className="form-values">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            placeholder="Enter Email Address"
            onChange={emailHandler}
          />
        </div>
        <div className="form-values">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="Enter Your Password"
            onChange={passwordHandler}
          />
        </div>
        <div className="form-values">
          <label htmlFor="profilepic">Profile-Pic: </label>
          <input
            type="file"
            name="profilepic"
            id="profilepic"
            onChange={profilePicHandler}
          />
        </div>
        <div className="form-values">
          <button id="sign" type="submit">
            Sign Up
          </button>
        </div>
        <br></br>
        {errors && (
          <div
            style={{
              textAlign: "center",
              fontSize: "20px",
              color: "red",
              border: "2px solid black",
              padding: "15px",
              borderRadius: "10px",
              background: "black",
            }}
          >
            {errors}
          </div>
        )}
      </form>
    </div>
  );
};

export default SignUpForm;
