import React from "react";
import "./main.css";
import Typed from "react-typed";
const Main = () => {
  return (
    <section className="main-container">
      <div className="left-content">
        <span>
          <Typed
            strings={["This is working"]}
            typeSpeed={40}
            startDelay={500}
            loop={true}
            loopCount={Infinity}
            backDelay={1000}
          />
        </span>
      </div>
      <div className="right-content">zvcXz</div>
    </section>
  );
};

export default Main;
