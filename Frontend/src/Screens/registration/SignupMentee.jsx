import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContext";
import "./signup-mentee.css";
const SignupMentee = () => {
  const { signup } = useAuth();
  const [confirmPassError, setConfirmPassError] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = async (e) => {
    if (e.password !== e.cPassword) {
      setConfirmPassError(true);
    } else {
      try {
        setConfirmPassError(false);
        setLoading(true);
        await signup(user.email, user.password);
      } catch {
        alert("failed to signup");
      }
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-7 signin-container">
            <h1>
              Sign Up<span className="dot">.</span>
            </h1>
            <form className="mx-1 mx-md-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    className="form-control"
                    value={user.name}
                    {...register("name", {
                      required: true,
                      onChange: handleChange,
                    })}
                  />
                  {errors.name?.type === "required" && (
                    <p style={{ color: "red" }}>name is a required field</p>
                  )}
                </div>
              </div>

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

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="password"
                    name="cPassword"
                    className="form-control"
                    placeholder="Password"
                    value={user.cPassword}
                    {...register("cPassword", {
                      required: true,
                      onChange: handleChange,
                    })}
                  />
                  {confirmPassError && (
                    <p style={{ color: "red" }}>Password do not match</p>
                  )}
                </div>
              </div>

              <div className="form-check d-flex justify-content-center mb-5">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form2Example3c"
                />
                <label className="form-check-label" htmlFor="form2Example3">
                  I agree all statements in Terms of service
                </label>
              </div>

              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <input
                  disabled={loading}
                  type="submit"
                  className="btn btn-primary btn-lg"
                />
              </div>
            </form>
          </div>

          <div className="col-5 content-container">
            <div className="content-text">
              Welcome to <span>Mentor Buddy!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupMentee;
