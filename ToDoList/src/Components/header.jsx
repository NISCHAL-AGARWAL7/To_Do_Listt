import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const header = (props) => {
  
  return (
    <div className='container-fluid bg-primary p-3 shadow-lg rounded-bottom'>
  <h1 className='text-white text-center display-4 fw-bold text-uppercase'>
    {props.title}
  </h1>
    </div>
  )
}

export default header
