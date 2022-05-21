import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const getAllCourses = createApi({
  reducerPath: 'getAllCourses',
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:${process.env.REACT_APP_BACKEND_PORT}/getallCourses`
  }),
  endpoints: (builder) => ({
    getJokeByType: builder.query({
      query: (type) => `${type}/random`
    })
  })
})

export const { useGetJokeByTypeQuery } = getAllCourses
