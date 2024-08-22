import React from 'react'

const ProductOverview = () => {
    return (
        <div className='max-w-[15vw] min-w-[15vw] m-3 mr-2 bg-blend-multiply bg-gray-100' >
            <img src="https://m.media-amazon.com/images/I/41tps1-sn4L._SR480,440_.jpg" alt="" className=' mix-blend-multiply' />
            <div className='bg-white' >
                <div className='flex mt-1 items-center' >
                    <h3 className='bg-[#cc0a39] text-white px-2 py-1 rounded-sm' >61% off</h3>
                    <p className='text-[#ce1841] ml-2 font-semibold' >Monthly Sale</p>
                </div>
                <div className='my-2' >
                    <p><sup>&#8377;</sup><span className='font-semibold' >48,990</span><sup>00</sup><span className='ml-2 text-[#969999]' >M.R.P:</span>  <del className='text-[#969999]' > <span >&#8377;</span> <span>67,457.00</span> </del>   </p>
                </div>
                <p>Dell Laptop Laptop dell lenovo </p>
            </div>
        </div>
    )
}

export default ProductOverview