import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DomainHeader from "../../Components/DomainHeader";
import { fetchCourses } from "../../Redux/courses";
import { domainSpecificCourses } from "../../Redux/courses";
import DomainSpecificCourses from "./DomainSpecificCourses";
const Courses = () => {
  const dispatch = useDispatch();
  const selectedDomain = useSelector((state) => state.domain.selectedDomain);
  const courses = useSelector((state) => state.courses.courses);

  useEffect(() => {
    dispatch(fetchCourses());
    if (courses.data && courses.data.length > 0) {
      dispatch(domainSpecificCourses(selectedDomain));
    }
  }, []);

  return (
    <div>
      <DomainHeader />
      <DomainSpecificCourses />
    </div>
  );
};

export default Courses;
