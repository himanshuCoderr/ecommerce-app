import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ChooseOptionNav from '../../Components/ChooseOptionNav/ChooseOptionNav'
import Sidebar from '../../Components/Sidebar/Sidebar'
import ProductsRow from '../../Components/ProductsRow/ProductsRow'
import ProductOverview from '../../Components/ProductOverview/ProductOverview'
const Home = () => {
  const [optionChoose, setOptionChoose] = useState("All")

  function getOptionUpdate(optionChoosed) {
    setOptionChoose(optionChoosed)
    console.log("Hey ", optionChoose)
  }

  return (
    <div className='bg-[#e2e6e6]'>
      <Navbar />
      <ChooseOptionNav chooseOptionFunc={getOptionUpdate} />
      <Sidebar />
      <div className='w-[85%] m-auto mt-5 p-3 bg-[white]'>

        {
          optionChoose == "All" ? (<div>
            <ProductsRow />
            <ProductsRow />
            <ProductsRow />
            <ProductsRow />
          </div>) :
          <div> 
            <h1>{optionChoose} Collection </h1>
            <div className='flex flex-wrap justify-between' >
              <ProductOverview />
              <ProductOverview />
              <ProductOverview />
              <ProductOverview />
              <ProductOverview />
              <ProductOverview />
              <ProductOverview />
              <ProductOverview />
              <ProductOverview />
              <ProductOverview />
              <ProductOverview />
              <ProductOverview />
              <ProductOverview />
              <ProductOverview />
              <ProductOverview />
            </div>
          </div>
        }
      </div>

    </div>
  )
}

export default Home