import { configureStore } from "@reduxjs/toolkit";
import domainReducer from "./domain";
import courseReducer from "./courses";
export default configureStore({
  reducer: {
    domain: domainReducer,
    courses: courseReducer,
  },
});
