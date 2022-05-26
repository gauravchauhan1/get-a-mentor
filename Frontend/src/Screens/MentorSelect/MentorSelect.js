import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMentors } from "../../Redux/mentors";
import Mentor from "./Mentor";
import ReactLoading from "react-loading";
const MentorSelect = () => {
  const mentors = useSelector((state) => state.mentors);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMentors());
  }, []);
  const type = "bars";
  const color = "#FF0000";
  return (
    <div>
      {mentors.loading && (
        <ReactLoading
          type={type}
          color={color}
          height={"5%"}
          width={"5%"}
          delay={100000}
        />
      )}
      <div className="domain-container">
        {!mentors.loading && mentors.mentors.data
          ? mentors.mentors.data.map((mentor) => {
              return <Mentor mentor={mentor} key={mentor.id} />;
            })
          : null}
      </div>
    </div>
  );
};

export default MentorSelect;
