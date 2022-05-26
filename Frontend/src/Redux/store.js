import { configureStore } from "@reduxjs/toolkit";
import domainReducer from "./domain";
import courseReducer from "./courses";
import mentorReducer from "./mentors";
export default configureStore({
  reducer: {
    domain: domainReducer,
    courses: courseReducer,
    mentors: mentorReducer
  },
});
