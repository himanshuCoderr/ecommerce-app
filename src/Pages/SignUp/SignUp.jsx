import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.js';
import Loader from '../../Components/Process-loader/Loader'

const Signup = () => {
  let [userEmail, setUserEmail] = useState("");
  let [userPassword, setUserPassword] = useState("");
  let [errorMessage, setErrorMessage] = useState("");
  let [passwordErrorMessage, setPasswordErrorMessage] = useState(false);
  let [buttonClicked, setButtonClicked]=useState(false)

  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  function createUser() {
    setButtonClicked(true)
    if (userEmail.length <= 0) {
      alert("Add User Email");
      setButtonClicked(false)
      return;
    }
    
    if (userPassword.length <= 0) {
      alert("Add Password First");
      setButtonClicked(false)
      return;
    }

    // Check password pattern
    if (!passwordPattern.test(userPassword)) {
      setPasswordErrorMessage(true);
      setButtonClicked(false)
      return;
    }

    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        alert("User Is Added")
        console.log(user);
        setButtonClicked(false)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        setButtonClicked(false)
      });
  }

  return (
    <div>
      <h1 className='text-center text-2xl mt-4'>Ecommerce App</h1>
      {
       buttonClicked ? <Loader />:""
      }
      <div className='w-[25vw] shadow-md border-[1px] mt-5 border-gray-100 m-auto p-5'>
        <h3 className='text-3xl'>Create Account</h3>
        <div className='mt-4'>
          <label htmlFor="em" className='font-bold'>Your name</label>
          <input type="text" id='em' className='border-[1px] border-gray-500 w-full p-1 rounded-md' />
        </div>
        <div className='mt-4'>
          <label htmlFor="em" className='font-bold'>Email</label>
          <input 
            type="text" 
            id='em' 
            className='border-[1px] border-gray-500 w-full p-1 rounded-md' 
            onChange={(e) => setUserEmail(e.target.value)} 
          />
        </div>
        <div className='mt-4'>
          <label htmlFor="em" className='font-bold'>Password</label>
          <input 
            type="password" 
            id='em' 
            className='border-[1px] border-gray-500 w-full p-1 rounded-md' 
            onChange={(e) => setUserPassword(e.target.value)} 
          />
          {passwordErrorMessage && <div className='text-red-500'>Password must be<ul className='list-disc' ><li>At least 8 characters long</li><li>include a mix of letters, numbers, and special characters.</li></ul></div>}
        </div>
        <button className='w-full mt-4 bg-[#ffd814] p-2 rounded-md text-sm' onClick={createUser}>Continue</button>
        {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
        <h1 className='text-sm mt-4'>By Continuing you agree to Ecommerce Conditions of use and privacy notice.</h1>
      </div>
      <div>
        <h3 className='text-center mt-3'>Already have an Account?</h3>
      </div>
      <Link to="/login">
        <button className='w-[25vw] mt-4 m-auto block p-1 rounded-md border-[1px] shadow-md text-sm'>Login here!</button>
      </Link>
    </div>
  );
};

export default Signup;
