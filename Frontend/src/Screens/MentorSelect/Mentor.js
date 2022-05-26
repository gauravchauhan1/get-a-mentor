import React from "react";
import logo from "../../assets/images/hero.png";
import "../../Styles/mentor.css";
const Mentor = ({ mentor }) => {
  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <div>
      <div className="mentor card-container">
        <div className="card" style={{ width: "264px", height: "368px" }}>
          <img className="mentor card-img-top" src={logo} alt="domain" />
          <div className="card-body">
            <p className="mentor card-title">
              {mentor.firstName} {mentor.lastName}
            </p>
            <p className="mentor domain">Software enggineer</p>
            {/* <button className="btn btn-success" onClick={handleChange}>
              {mentor.lastName}
            </button> */}
            <div className="mentor card-description">
              <div className="d-flex flex-row mentor description-child">
                <i class="fa fa-light fa fa-graduation-cap"></i>
                <p>Consulting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
