import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  courses: [],
  selectedCourses: {},
  selectedSubject: {},
  error: "",
};
export const fetchCourses = createAsyncThunk("courses/fetchCourses", () => {
  return axios
    .get(`http://localhost:${process.env.REACT_APP_BACKEND_PORT}/getallCourses`)
    .then((response) => response.data);
});

export const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    domainSpecificCourses: (state, action) => {
      state.selectedCourses = state.courses.data.filter(
        (course) => course.category === action.payload
      );
    },
    courseSpecificSubject: (state, action) => {
      state.selectedSubject = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    });
    builder.addCase(fetchCourses.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export const { domainSpecificCourses, courseSpecificSubject } =
  courseSlice.actions;
export default courseSlice.reducer;
