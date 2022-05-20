import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Domain = (props) => {
  //   useEffect(() => {
  //     if (!props.isLoggedIn) {
  //       props.history.push('/')
  //     }
  //   }, [])
  const navigate = useNavigate()
  const [log, setLog] = useState(false)
  useEffect(() => {
    if (log) {
      navigate('/')
    }
  }, [log])
  return (
    <div>
    </div>
  )
}

export default Domain
