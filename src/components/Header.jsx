import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
    
  }

  return (
    <div className='absolute z-1 flex justify-between w-screen'>
      <div className='w-48 bg-gradient-to-b from-red ml-14 mt-5 '>
        <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
          alt="logo"/>
      </div>
      {user && <div className='w-16 mr-14 mt-5'>
        <img src={user?.photoURL} alt="user icon" />
        <button className='text-red-600 cursor-pointer' onClick={handleSignOut}>Sign out</button>
      </div>}
    </div>
  )
}

export default Header;
