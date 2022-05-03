import React, { useState } from "react";
import "../../Styles/registrationmentee.css";

const RegistrationMentee = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cPassword: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:1337/api/register-mentee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        phoneNumber: user.phoneNumber,
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="mainContainer">
      <div className="header">
        Create an account
        <hr />
      </div>
      <div className="body">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
              placeholder="First Name"
            />
          </div>
          <div className="row">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={user.lastName}
              placeholder="Last Name"
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={user.email}
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <label>Password</label>
            <input
              type="text"
              name="password"
              value={user.password}
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <label>Confirm Password</label>
            <input
              type="text"
              name="cPassword"
              value={user.cPassword}
              placeholder="Confirm Password"
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <label>Phone Number</label>
            <input
              type="number"
              name="phoneNumber"
              value={user.phoneNumber}
              placeholder="Phone Number"
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationMentee;
