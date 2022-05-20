import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { navigate } = useNavigate();
  const { signin, currentUser } = useAuth();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = async (e) => {
    console.log(currentUser);
    try {
      setError("");
      setLoading(true);
      await signin(user.email, user.password);
      navigate("/");
      console.log(currentUser);
    } catch {
      setError("Failed to signin");
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-5 content-container">
            <div className="content-text">
              <span>Login here!</span>
            </div>
          </div>
          <div className="col-7 signin-container">
            <h1>
              Sign In<span className="dot">.</span>
            </h1>
            <form className="mx-1 mx-md-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    value={user.email}
                    {...register("email", {
                      required: true,
                      onChange: handleChange,
                    })}
                  />
                  {errors.email?.type === "required" && (
                    <p style={{ color: "red" }}>Email is a required field</p>
                  )}
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={user.password}
                    {...register("password", {
                      required: true,
                      onChange: handleChange,
                    })}
                  />
                  {errors.password?.type === "required" && (
                    <p style={{ color: "red" }}>Password is a required field</p>
                  )}
                </div>
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <input
                  disabled={loading}
                  type="submit"
                  className="btn btn-primary btn-lg"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
