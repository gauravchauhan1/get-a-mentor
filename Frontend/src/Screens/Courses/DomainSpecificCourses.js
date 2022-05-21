import React from "react";
import { useSelector } from "react-redux";
import SelectedCourse from "./SelectedCourse";

const DomainSpecificCourses = () => {
  const selectedCourses = useSelector((state) => state.courses.selectedCourses);

  return (
    <div className="domain-container">
      {selectedCourses && selectedCourses.length > 0 ? (
        selectedCourses.map((course) => (
          <SelectedCourse course={course} key={course.name} />
        ))
      ) : (
        <div>no courses to show</div>
      )}
    </div>
  );
};

export default DomainSpecificCourses;
