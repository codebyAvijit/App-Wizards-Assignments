import React from "react";
import { useState } from "react";
import "./LoginForm.css";
const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [formDetails, setFormDetails] = useState("");
  const handleUsernameChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormDetails({
      username: username,
      password: password,
    });
    // console.log(username);
    // console.log(password);

    setUserName("");
    setPassword("");
  };
  return (
    // <div>
    <div className="form-cont">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-val">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            value={username}
            placeholder="Enter your Username"
            name="username"
            id="username"
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-val">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            value={password}
            placeholder="Enter password"
            name="password"
            id="password"
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="form-val">
          <button id="btn" type="submit">
            Login
          </button>
        </div>
      </form>
      {formDetails && (
        <div className="form-val">
          <h3>
            Welcome Dear <br></br>
            {formDetails.username}
          </h3>
          <p>Below are your Details</p>
          Your User name is : {formDetails.username}
          <br></br>
          your passowrd is : {formDetails.password}
        </div>
      )}
    </div>

    // </div>
  );
};

export default LoginForm;
