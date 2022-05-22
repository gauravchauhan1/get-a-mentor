import React from "react";
import "./main.css";
import Typed from "react-typed";
const Main = () => {
  return (
    <section className="main-container">
      <div className="left-content">
        <div>
          <h1>
            <span className="green-content">#Learn </span>
            Industry skills from Top mentors and become future Ready
          </h1>
        </div>
        <h1>
          <span className="typed-content ">
            <Typed
              strings={[
                "Programs & Courses",
                "Live Mentoring",
                "Online Courses",
              ]}
              typeSpeed={40}
              startDelay={500}
              loop={true}
              loopCount={Infinity}
              backDelay={1000}
            />
          </span>
        </h1>
      </div>
      <div className="right-content"></div>
    </section>
  );
};

export default Main;
