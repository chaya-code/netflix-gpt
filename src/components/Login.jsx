import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  }

  const handleFormSubmit = () => {

  }
  
  return (
    <div className=''>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg" 
        alt="background image"/>
      </div>
      <div className='absolute w-3/12 bg-black text-white p-12 mx-auto my-52 left-0 right-0 opacity-85'>
        <form className='flex flex-col'>
          <h1 className='text-2xl my-3'>{isSignIn? "Sign In" : "Sign Up"}</h1>
          {!isSignIn && <input type="text" className='p-3 my-3 bg-gray-700' placeholder='Full Name'/>}
          <input type="text" className='p-3 my-3 bg-gray-700' placeholder='Email Id'/>
          <input type="password" className='p-3 my-3 bg-gray-700' placeholder='Password'/>
          <button className='p-3 my-5 bg-red-800' onClick={handleFormSubmit}>{isSignIn? "Sign In" : "Sign Up"}</button>
        </form>
        <p className='cursor-pointer' onClick={handleSignIn}>{isSignIn? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
      </div>
      
    </div>
  )
}

export default Login;
