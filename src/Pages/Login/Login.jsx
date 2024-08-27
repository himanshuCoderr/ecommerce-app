import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import Loader from '../../Components/Process-loader/Loader'
const Login = () => {
  
  const navigate = useNavigate()
  let [buttonClicked, setButtonClicked]=useState(false)
  let [userEmail , setUserEmail ] = useState("")
  let [userPassword , setUserPassword] = useState("")
  let [errorMessage , setErrorMessage] = useState("")

  function setUserInLocal(crUser){
    localStorage.setItem("currentUserEmail",crUser.email)
    localStorage.setItem("currentUserAccessToken",crUser.accessToken)
    navigate("/")
  }
  
  function signInUser() {
    setButtonClicked(true)
    if(userEmail.length <=0){
      alert("Email is required!!")
      setButtonClicked(false)
      return
    }
    if(userPassword.length <= 0){
      alert("User Password is required")
      setButtonClicked(false)
      return
    }

    console.log("Trying to sign in ", userEmail , userPassword)

    signInWithEmailAndPassword(auth , userEmail , userPassword).then((userCred)=>{
      const currentUser =  userCred.user

      console.log(currentUser)
    
      setUserInLocal(currentUser)
      setButtonClicked(false)
     }).catch((error)=>{
       const errorCode = error.code;
       const errorMessage = error.message;
       setButtonClicked(false)
       console.log(errorMessage)
       setErrorMessage(errorMessage)
     })
  }
  

  return (
    <div>
      <h1 className='text-center text-2xl mt-4 ' >Ecommerce App</h1>
      {
       buttonClicked ? <Loader />:""
      }
      <div className='w-[25vw] shadow-md border-[1px] mt-5 border-gray-100 m-auto p-5' >
        <h3 className='text-3xl' >Sign in</h3>
        <div className='mt-4'  >
          <label htmlFor="em" className='font-bold' >Email or mobile phone number</label>
          <input type="text" id='em' className='border-[1px] border-gray-500 w-full p-1 rounded-md' onChange={(e)=>{setUserEmail(e.target.value)}} />
        </div>
        <div className='mt-4'  >
          <label htmlFor="em" className='font-bold' >password</label>
          <input type="password" id='em' className='border-[1px] border-gray-500 w-full p-1 rounded-md' onChange={(e)=>{setUserPassword(e.target.value)}} />
        </div>
        <h1 className='text-sm mt-4 text-red-700' >{errorMessage}</h1>
        <button className='w-full mt-4 bg-[#ffd814] p-2 rounded-md text-sm' onClick={signInUser} >Continue</button>
        <h1 className='text-sm mt-4' >By Continuing you agree to Ecommerce Conditions of use and privacy notice.</h1>
      </div>
      <div>
        <h3 className='text-center mt-3'>New to Amazon</h3>
      </div>
      <Link to="/signup" >
      <button className='w-[25vw] mt-4 m-auto block p-1 rounded-md border-[1px] shadow-md text-sm'  >Create Your Amazon account</button>
      </Link>
    </div>
  )
}

export default Login