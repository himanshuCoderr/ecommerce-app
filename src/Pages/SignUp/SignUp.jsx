import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword  } from 'firebase/auth'
import { auth } from '../../firebase.js'
const Signup = () => {

  let [userEmail , setUserEmail] = useState("")
  let [userPassword , setUserPassword] = useState("")
  function createUser(){
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }
  

  return (
    <div>
      <h1 className='text-center text-2xl mt-4 ' >Ecommerce App</h1>
      <div className='w-[25vw] shadow-md border-[1px] mt-5 border-gray-100 m-auto p-5' >
        <h3 className='text-3xl' >Create Account</h3>
        <div className='mt-4'  >
          <label htmlFor="em" className='font-bold' >Your name</label>
          <input type="text" id='em' className='border-[1px] border-gray-500 w-full p-1 rounded-md' />
        </div>
        <div className='mt-4' >
          <label htmlFor="em" className='font-bold' >Email</label>
          <input type="text" id='em' className='border-[1px] border-gray-500 w-full p-1 rounded-md' onChange={(e)=>{setUserEmail(e.target.value)}} />
        </div>
        <div className='mt-4' >
          <label htmlFor="em" className='font-bold' >Password</label>
          <input type="password" id='em' className='border-[1px] border-gray-500 w-full p-1 rounded-md' onChange={(e)=>{setUserPassword(e.target.value)}} />
        </div>
        <button className='w-full mt-4 bg-[#ffd814] p-2 rounded-md text-sm' >Continue</button>
        <h1 className='text-sm mt-4' >By Continuing you agree to Ecommerce Conditions of use and privacy notice.</h1>
      </div>
      <div>
        <h3 className='text-center mt-3'>Already have an Account ?</h3>
      </div>
      <Link to="/login" >
      <button className='w-[25vw] mt-4 m-auto block p-1 rounded-md border-[1px] shadow-md text-sm' >Login here!</button>
      </Link>
    </div>
  )
}

export default Signup