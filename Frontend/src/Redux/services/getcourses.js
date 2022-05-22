import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const PORT = process.env.REACT_APP_BACKEND_PORT || 5000;
export const getAllCourses = createApi({
  reducerPath: "getAllCourses",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:${PORT}/getallCourses`,
  }),
  endpoints: (builder) => ({
    getJokeByType: builder.query({
      query: (type) => `${type}/random`,
    }),
  }),
});

export const { useGetJokeByTypeQuery } = getAllCourses;
// currently not working
