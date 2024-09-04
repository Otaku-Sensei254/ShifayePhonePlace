import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar'
import PhoneNavBar from '../PhoneNavBar/PhoneNavBar'
import Search from '../Search/Search'
import Items from '../../Items/Items'
import Nokia_Products from '../Source/Nokia'
import '../Styles/Nokia.css'
import PhoneBar from '../Navbar/PhoneBar'
import { FaWhatsapp } from "react-icons/fa";
import MobileNav from '../Navbar/Mobilenav'
const Nokia = () => {
  const [searchTerm , setSearchTerm] = useState("");

  return (
    <>
        <Navbar/>
        <PhoneNavBar/><MobileNav/>
        <PhoneBar/>
        <div className="popular">
        
        <hr className='hr'/>
        <input className="saka3"type='text' placeholder='search phone.....'onChange={(e)=>{
    setSearchTerm(e.target.value);
  }}/>
           <h2 className='ph1'>POPULAR NOKIA PRODUCTS</h2>
            <div className="Nokia-container">
                 
                   <div className="Nokia">
                     
                    { Nokia_Products.map(products=>(
                      <Items data={products} id={products.id}/>
                    ))
                  }
                   </div>
                   

              </div>
    </div>

    </>
  )
}

export default Nokia