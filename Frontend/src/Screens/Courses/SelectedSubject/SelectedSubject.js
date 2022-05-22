import React from "react";
import { useSelector } from "react-redux";
import "../../../Styles/subject.css";
import logo from "../../../assets/images/course.jpg";
import { Button } from "bootstrap";
const SelectedSubject = () => {
  const selectedSubject = useSelector((state) => state.courses.selectedSubject);

  return (
    <div className="subject-container">
      <div className="subject-container-left">
        <div className="subject-left-content">
          <div className="subject-left-header">
            <div
              className="subject-left-header-image"
              style={{ borderRadius: "10px" }}
            >
              <img
                src={logo}
                alt="subject"
                height="289px"
                width="368px"
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className="subject-left-header-text">
              <h1>{selectedSubject.name}</h1>
              <h4>- By {selectedSubject.mentorName}</h4>
            </div>
          </div>
        </div>
        <div className="subject-left-header-description">
          <h4>About</h4>
          <h5>{selectedSubject.description}</h5>
        </div>
      </div>
      <div className="subject-container-right">
        <h3 className="card-title">Start this course.</h3>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              Estimated time - {selectedSubject.courseDuration}
            </h5>
            <ul className="common-list">
              <li className="card-text">Learn from Industry Experts</li>
              <li className="card-text">Upskill for Career Growth</li>
              <li className="card-text">Community Support</li>
            </ul>
            <ul class="list-group list-group-flush">
              <li className="list-group-item"></li>
              <li className="list-group-item">
                Price : <i class="fa fa-inr"></i> {selectedSubject.price}
              </li>
            </ul>
            <button className="btn btn-primary w-100">Enroll now.</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedSubject;
