import React from 'react'
import Navbar from '../Navbar/Navbar'
import PhoneNavBar from '../PhoneNavBar/PhoneNavBar'
import Search from '../Search/Search'
import Items from '../../Items/Items'
import Oppo_Products from '../Source/Oppo'
import { useState } from 'react'
import { FaWhatsapp } from "react-icons/fa";
import PhoneBar from '../Navbar/PhoneBar'
import '../Styles/Oppo.css'
import MobileNav from '../Navbar/Mobilenav'

const Oppo = () => {
  const [searchTerm , setSearchTerm] = useState("");

  return (
    <>
    <Navbar/>
    <PhoneNavBar/><MobileNav/>
    <PhoneBar/>
    <input className="saka"type='text' placeholder='search phone.....'onChange={(e)=>{
    setSearchTerm(e.target.value);
  }}/>
    <div className="popular">
        <h2 className='ph1'>POPULAR OPPO PRODUCTS</h2>
        
            <div className="popular-item">
                {/*{Oppo_Products.map((item,i)=>{
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} details={item.details}/>
        })}*/}
            </div>
            <div className="oppo-container">
                {
                  Oppo_Products.filter((val)=>{
                    if(searchTerm == ""){
                      return val;
                    }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                      return val;
                    }
                  })
                  .map((val)=>{
                    return(
                      <div className='oppo'>
                        <Items data={val}/>
                      </div>
                      
                    )
                  })
                }
              </div>
        
    </div>
    </>
  )
}

export default Oppo