import React, { useEffect } from "react";
import "../../Styles/domain.css";
import logo from "../../assets/images/IT_logo.png";
import { useDispatch } from "react-redux";
import { courseSpecificSubject } from "../../Redux/courses";
import { useNavigate } from "react-router-dom";
const SelectedCourse = ({ course }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    console.log(e);
    dispatch(courseSpecificSubject(course));
    navigate("/courses/" + course.name);
  };
  return (
    <div>
      <div className="subdomain-card-container">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={logo} alt="domain" />
          <div className="card-body">
            <h5 className="card-title">{course.name}</h5>
            <button className="btn btn-success" onClick={handleClick}>
              {course.name}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedCourse;
