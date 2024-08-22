import React from 'react'
import ProductOverview from '../ProductOverview/ProductOverview'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const ProductsRow = () => {
  return (
    <div className=' relative' >
        <button className='absolute left-0 top-[40%] scale-150 bg-[#f2f0f096] h-20 w-10' ><ChevronLeftIcon /></button>
        <button className='absolute right-0 top-[40%] scale-150 bg-[#f2f0f096] h-20 w-10' ><ChevronRightIcon /></button>
        <h2 className='ml-2 mb-3'>Men Collection</h2>
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