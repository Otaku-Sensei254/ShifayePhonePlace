import React, { useContext, useState } from 'react'
import '../Styles/Iphones.css'
import iphone_product from '../Source/IphoneData'
import Items from '../../Items/Items'
import Navbar from '../Navbar/Navbar'
import PhoneNavBar from '../PhoneNavBar/PhoneNavBar'
import PhoneBar from '../Navbar/PhoneBar'
import Search from '../Search/Search'
//import { useCart}from 'react-use-cart'
import Cart from '../../Pages/Cart'
import MobileNav from '../Navbar/Mobilenav'

const Iphones = () => {
  
  
  
  return (
    <>
    <Navbar/><MobileNav/>
    <PhoneNavBar/>
    <PhoneBar/>
    
    

        <h2 className='ITEM-P'>POPULAR APPLE PRODUCTS</h2>
        <div className="Shop-box">
          <div className="items-box">
            {
              iphone_product.map(products=>(
                <Items data={products} id={products.id} details={products.details}/>
              ))
            }
         </div>
        </div>
         
                
    
    </>
  )
}

export default Iphones