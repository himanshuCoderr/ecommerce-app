import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div>
      <h1 className='text-center text-2xl mt-4 ' >Ecommerce App</h1>
      <div className='w-[25vw] shadow-md border-[1px] mt-5 border-gray-100 m-auto p-5' >
        <h3 className='text-3xl' >Sign in</h3>
        <div className='mt-4'  >
          <label htmlFor="em" className='font-bold' >Email or mobile phone number</label>
          <input type="text" id='em' className='border-[1px] border-gray-500 w-full p-1 rounded-md' />
        </div>
        <div className='mt-4'  >
          <label htmlFor="em" className='font-bold' >password</label>
          <input type="password" id='em' className='border-[1px] border-gray-500 w-full p-1 rounded-md' />
        </div>
        <button className='w-full mt-4 bg-[#ffd814] p-2 rounded-md text-sm' >Continue</button>
        <h1 className='text-sm mt-4' >By Continuing you agree to Ecommerce Conditions of use and privacy notice.</h1>
      </div>
      <div>
        <h3 className='text-center mt-3'>New to Amazon</h3>
      </div>
      <Link to="/signup" >
      <button className='w-[25vw] mt-4 m-auto block p-1 rounded-md border-[1px] shadow-md text-sm' >Create Your Amazon account</button>
      </Link>
    </div>
  )
}

export default Login