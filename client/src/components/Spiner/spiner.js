import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import './spinner.css'; // Import the custom CSS

const Spiner = () => {
  return (
    <div className='spinner-container'>
      <Spinner animation="grow" />&nbsp; Loading...
    </div>
  )
}

export default Spiner;
