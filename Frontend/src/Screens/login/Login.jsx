import React, { useState } from "react";
import "../../Styles/registrationmentee.css";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="mainContainer">
      <div className="header">
        Login
        <hr />
      </div>
      <div className="body">
        <form onSubmit={handleSubmit}>
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
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
