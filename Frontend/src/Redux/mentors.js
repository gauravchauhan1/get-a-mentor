import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios"

export const fetchMentors = createAsyncThunk('mentors/fetchMentors',()=>{
    return axios
    .get(`http://localhost:${process.env.REACT_APP_BACKEND_PORT}/mentor/getall`)
    .then((response) => response.data)
});

export const mentorSlice = createSlice({
    name: 'mentor',
    initialState: {
        loading: false,
        mentors:[],
        error:""
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMentors.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchMentors.fulfilled, (state, action) => {
            state.loading = false;
            state.mentors = action.payload;
        });
        builder.addCase(fetchMentors.rejected, (state, action) => {
            state.loading = false;
            state.mentors = [];
            state.error = action.error.message;
        });
    }
})

export default mentorSlice.reducer