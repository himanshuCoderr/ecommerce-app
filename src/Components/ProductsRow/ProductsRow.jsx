import React from 'react'
import ProductOverview from '../ProductOverview/ProductOverview'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const ProductsRow = () => {
  return (
    <div className='w-[85%] m-auto mt-5 p-3 bg-[white]' >
        <button> <ChevronLeftIcon /></button>
        <button><ChevronRightIcon /></button>
        <h2 className='ml-2 mb-2' >Men Collection</h2>
        <div className='flex overflow-x-scroll' >
            <ProductOverview />
            <ProductOverview />
            <ProductOverview />
            <ProductOverview />
            <ProductOverview />
            <ProductOverview />
            <ProductOverview /> 
        </div>
    </div>
  )
}

export default ProductsRow