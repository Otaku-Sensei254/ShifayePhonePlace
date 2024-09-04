import React from 'react'
import '../Offers/Offers.css'
import {Link} from 'react-router-dom'
import PIC from '../Assets/pick3.png'
const Offers = () => {
  return (
    <>
      <div className="offers">
        <div className="offers-left">
          <h1>Hot Incomings</h1>
          <h1>Offers For You</h1>
          <p>ONLY ON SHIFAYE ENTERPRISE</p>
          <Link to="/Shop"><button className='check-btn'>Shop Now</button></Link>
        </div>
        <div className="offers-right">
          <img  className="Ex-Pick"src={PIC} alt="" />
        </div>
      </div>
    </>
  )
}

export default Offers