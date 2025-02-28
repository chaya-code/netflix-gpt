import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidate } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState([]);
  const navigate = useNavigate();

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage("");
  }

  const handleButtonClick = () => {   
    const message = checkValidate(name,email.current.value, password.current.value);
    setErrorMessage(message);

    if(message) return;

    if(!isSignIn) {
      createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, 
          photoURL: "https://lh3.googleusercontent.com/a/ACg8ocK8fqcnylcS1NjC-KR7RWyzUX_QO1O6AvKC1XNo_8Oc2zD8hFJoGw=s360-c-no"
        }).then(() => {
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL:photoURL}));
          navigate("/browse");
        }).catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
    }
  }

  return (
    <div className=''>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg" 
        alt="background image"/>
      </div>
      <div className='absolute w-3/12 bg-black text-white p-12 mx-auto my-52 left-0 right-0 opacity-85'>
        <form className='flex flex-col' onClick={(e)=>e.preventDefault()}>
          <h1 className='text-2xl my-3'>{isSignIn? "Sign In" : "Sign Up"}</h1>
          {!isSignIn && <input ref={name} type="text" className='p-3 my-3 bg-gray-700' placeholder='Full Name'/>}
          <input ref={email} type="text" className='p-3 my-3 bg-gray-700' placeholder='Email Id'/>
          <input ref={password} type="password" className='p-3 my-3 bg-gray-700' placeholder='Password'/>
          <p className='text-red-600'>{errorMessage}</p>
          <button className='p-3 my-5 bg-red-800' onClick={handleButtonClick}>{isSignIn? "Sign In" : "Sign Up"}</button>
        </form>
        <p className='cursor-pointer' onClick={handleSignIn}>{isSignIn? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
      </div>
      
    </div>
  )
}

export default Login;
