import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCourses } from '../../Redux/courses'
const Courses = () => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  console.log(user)
  useEffect(() => {
    dispatch(fetchCourses())
  }, [])

  return (
    <div>
    </div>
  )
}

export default Courses
