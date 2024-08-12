import React from 'react'
import ProductOverview from '../ProductOverview/ProductOverview'
const ProductsRow = () => {
  return (
    <div className='w-[85%] m-auto mt-5 p-3' >
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