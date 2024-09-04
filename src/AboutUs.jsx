import React from 'react'
import '../src/Componets/Styles/About.css'
import pick from './Componets/Assets/pick2.jpeg'
const AboutUs = () => {
  return (
    <section>
        <h1 className='About-header'>About Us</h1>
        <p className='about-p'>Welcome to Shifaye Enterprise, your trusted destination for the latest and most innovative smartphones on the market. 
          Established just a year ago, Shifaye Enterprise has swiftly become a preferred choice for tech enthusiasts and everyday users alike,
           offering a diverse range of mobile devices to meet every need and budget.<br/>
            Our journey began with a simple yet ambitious vision: to provide exceptional value and service to our customers through a seamless shopping experience.
At Shifaye Enterprise, we pride ourselves on our commitment to quality and customer satisfaction.<br/>
 Our carefully curated selection features the latest models from top brands,
  ensuring that you stay connected and ahead of the curve with cutting-edge technology. <br/>
  
</p>
<h4 className='time'>We are Opened Monday to Saturday<br/> from 09:00 - 18:00 Visit us and get a genuine<br/> Product with the price best served <br/>at Luthuli Avenue </h4>
    <img  className="side-img"src={pick} alt="" />
    </section>
  )
}

export default AboutUs