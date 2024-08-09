import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ChooseOptionNav from '../../Components/ChooseOptionNav/ChooseOptionNav'
import Sidebar from '../../Components/Sidebar/Sidebar'
const Home = () => {

  return (
    <div>
        <Navbar />
        <ChooseOptionNav />
        <Sidebar  />
    </div>
  )
}

export default Home