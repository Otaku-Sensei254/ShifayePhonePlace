import React ,{useState}from 'react'
import Navbar from '../Navbar/Navbar'
import PhoneNavBar from '../PhoneNavBar/PhoneNavBar'
import Search from '../Search/Search'
import Realme_products from '../Source/Realme'
import '../Styles/Realme.css'
import Items from '../../Items/Items'
import PhoneBar from '../Navbar/PhoneBar'
import { FaWhatsapp } from "react-icons/fa";
import MobileNav from '../Navbar/Mobilenav'
const Realme = () => {
  const [searchTerm , setSearchTerm] = useState("");

  return (
    <>
    <Navbar/>
    <PhoneNavBar/><MobileNav/>
    <PhoneBar/>
    <div className="popular">
      <h2 className='ph1'>POPULAR REALME PRODUCTS</h2>
    </div>
     
    <input className="sm-search"type='text' placeholder='search phone.....'onChange={(e)=>{
    setSearchTerm(e.target.value);
  }}/>
      <div className="template-container">
       
        <div className="realme">
          {
                  Realme_products.filter((products)=>{
                    if(searchTerm == ""){
                      return products;
                    }else if(products.name.toLowerCase().includes(searchTerm.toLowerCase())){
                      return products;
                    }
                  })
                  .map((products)=>{
                   
                  })
                }
                {
                  Realme_products.map(products=>(
                    <Items data={products} id={products.id}/>
                  ))
                }
        </div>
                
              </div>
    </>
  )
}

export default Realme