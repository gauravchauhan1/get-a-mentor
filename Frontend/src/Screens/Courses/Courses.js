import React from 'react'
import { useSelector } from 'react-redux'
const Courses = () => {
  const selectedDomain = useSelector(state => state.domain.selectedDomain)
  return (
    <div>
      {selectedDomain}
    </div>
  )
}

export default Courses
