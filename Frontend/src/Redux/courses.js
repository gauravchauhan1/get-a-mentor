import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  courses: [],
  error: ''
}
export const fetchCourses = createAsyncThunk('courses/fetchCourses', () => {
  return axios
    .get('http://localhost:7000/getallCourses')
    .then((response) => response.data)
})

export const courseSlice = createSlice({
  name: 'courses',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.loading = false
      state.courses = action.payload
    })
    builder.addCase(fetchCourses.rejected, (state, action) => {
      state.loading = false
      state.users = []
      state.error = action.error.message
    }
    )}
})

// Action creators are generated for each case reducer function
export const { domainSelect } = courseSlice.actions

export default courseSlice.reducer
