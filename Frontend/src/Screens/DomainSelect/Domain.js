import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Subdomain from '../../Components/Subdomain'
import '../../Styles/domain.css'

const Domain = (props) => {


  const domains = [
    {name: 'IT'},
    {name: 'Fashion Design'},
    {name: 'Marketing'},
    {name: 'Finance'},
    {name: 'Healthcare'},
    {name: 'Education'},
    {name: 'Sports'},
    {name: 'Entertainment'},
    {name: 'Food'},
    {name: 'Travel'}]
  return (
    <div className='domain-container'>
      {domains.map((domain, index) => {
         return < Subdomain domain={domain} key={index} />})}
    </div>
  )
}

export default Domain
