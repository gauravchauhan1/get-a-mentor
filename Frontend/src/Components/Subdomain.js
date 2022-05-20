import React from 'react'
import '../Styles/domain.css'
import logo from '../assets/images/main-container-image.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { domainSelect } from '../Redux/domain'
import { useNavigate } from 'react-router-dom'
const Subdomain = ({domain}) => {
  const selectedDomain = useSelector(state => state.domain.selectedDomain)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleClick =  () => {
      try{
       dispatch(domainSelect(domain.name))
       navigate('/courses')
    }catch{
        console.log('error')
      }
    }
    
  return (
    <div className='subdomain-card-container'>
      <div className='card' style={{'width': '18rem'}}>
        <img className='card-img-top' src={logo} alt='domain' />
        <div className='card-body'>
          <h5 className='card-title'>{domain.name}</h5>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <button className='btn btn-primary' onClick={handleClick}>
            Choose
            {domain.name}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subdomain
