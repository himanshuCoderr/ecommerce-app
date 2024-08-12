import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ChooseOptionNav from '../../Components/ChooseOptionNav/ChooseOptionNav'
import Sidebar from '../../Components/Sidebar/Sidebar'
import ProductsRow from '../../Components/ProductsRow/ProductsRow'

const Home = () => {

  return (
    <div className='bg-[#e2e6e6]'>
        <Navbar />
        <ChooseOptionNav />
        <Sidebar  />
        <div  >
          <ProductsRow />
          <ProductsRow />
          <ProductsRow />
          <ProductsRow />
        </div>
    </div>
  )
}

export default Home