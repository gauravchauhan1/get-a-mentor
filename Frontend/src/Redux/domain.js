import { createSlice } from "@reduxjs/toolkit";

export const domainSlice = createSlice({
  name: "domain",
  initialState: {
    selectedDomain: "temp",
  },
  reducers: {
    domainSelect: (state, action) => {
      state.selectedDomain = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { domainSelect } = domainSlice.actions;

export default domainSlice.reducer;
