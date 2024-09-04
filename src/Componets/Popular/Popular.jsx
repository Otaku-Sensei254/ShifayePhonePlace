import React from 'react'
import '../Styles/Popular.css'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'
import iphone_product from '../Source/IphoneData'
import Items from '../../Items/Items'
const Popular = () => {
  return (
    <>
    <Navbar/>
    <Search/>
    <div className="popular">
        <h2>POPULAR IPHONES</h2>
        <hr/>
          
    </div>
    </>
  )
}

export default Popular