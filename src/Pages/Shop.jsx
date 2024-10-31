import React from 'react'
import '../Componets/Styles/Shop.css'
import OPPO from '../Componets/Assets/Onsale/OPPO.jpeg'
import PODS from '../Componets/Assets/Onsale/PODS.jpeg'
import S20ULTRA from '../Componets/Assets/Onsale/S20ULTRA.jpeg'
import SmartWatch from '../Componets/Assets/Onsale/Smart-watch.jpeg'
import PhoneNavBar from '../Componets/PhoneNavBar/PhoneNavBar'
import Navbar from '../Componets/Navbar/Navbar'
import iphone_product from '../Componets/Source/IphoneData'
import Items from '../Items/Items'
import Search from '../Componets/Search/Search'
import All_Products from '../Componets/Source/All_Products'
import Samsung_Products from '../Componets/Source/Samsung'
import Vivo_Products from '../Componets/Source/Vivo'
import Infinix_Products from '../Componets/Source/Infinix'
import Oppo_Products from '../Componets/Source/Oppo'
import Realme_Products from '../Componets/Source/Realme'
import Tecno_Products from '../Componets/Source/Techno'
import Nokia_Products from '../Componets/Source/Nokia'

import { useState } from 'react'
import { FaWhatsapp } from "react-icons/fa";
import MobileNav from '../Componets/Navbar/Mobilenav'
import PhoneBar from '../Componets/Navbar/PhoneBar'
import { Link } from 'react-router-dom'
import Footer from '../Componets/Footer/Footer'
//import Popular from '../Componets/Popular/Popular'

const Shop = () => {
{/*
  const list = [{
    id:1,
    name:"Book 1",
    image:"https://tinyurl.com/44yta7su",
  },
  {
    id:2,
    name:'Book 2',
    image:'https://tinyurl.com/yx4sej6s',
  }
];
*/}

  const[searchTerm, setSearchTerm] =useState("");
  
  return (
    <>
    <Navbar/>
    <MobileNav/>
    
    <PhoneBar/>
    
   <div className="shop-container">
     <h2 className='hot'> Hot Products On Offer!!!🔥🔥</h2>
    <div className="on-sale-products">
          <div className="item-sale-1">
            <img src={OPPO} alt="" />
            <p>Oppo 5G</p>
            <h4 className='now'>Now: KSH 20,000</h4>
            <h4 className='then'>Then: KSH 28,000</h4>
            <a href="https://wa.me/+254746429881" target='blank'><button className='order'> <FaWhatsapp className='whts'/>Order Now</button></a>
          </div>
          <div className="item-sale-2">
            <img src={PODS} alt="" />
            <p>Samsung Galaxy Buds</p>
            <h4 className='now'>Now: KSH 10,000</h4>
            <h4 className='then'>Then: KSH 13,000</h4>
            <a href="https://wa.me/+254746429881" target='blank'><button className='order'> <FaWhatsapp className='whts'/>Order Now</button></a>

          </div>
          <div className="item-sale-3">
            <img src={S20ULTRA} alt="" />
            <p>Samsung S23 ULTRA</p>
            <h4 className='now'>Now: KSH 95,000</h4>
            <h4 className='then'>Then: KSH 105,000</h4>
            <a href="https://wa.me/+254746429881" target='blank'><button className='order'> <FaWhatsapp className='whts'/>Order Now</button></a>

          </div>
          <div className="item-sale-4">
            <img src={SmartWatch} alt="" />
            <p>Smart Watch</p>
            <h4 className='now'>Now: KSH 7,000</h4>
            <h4 className='then'>Then: KSH 10,000</h4>
            <a href="https://wa.me/+254746429881" target='blank'><button className='order'> <FaWhatsapp className='whts'/>Order Now</button></a>

          </div>
    </div>
    {/*<Popular/>*/}
        <div className="Shop-box">
          <h3>Our Products</h3>
          <div className="items-box">
             {
      All_Products.map(mob =>(
          <Items data={mob} id={mob.id} name={mob.name} image={mob.image} new_price={mob.new_price} old_price={mob.old_price}/>
        ))
       }
          </div>
      
        </div>
                       
       
      </div>
   
     
     
    </>
  )
}

export default Shop