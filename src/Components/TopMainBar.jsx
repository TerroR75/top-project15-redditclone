import { useState, useContext } from 'react';
import { logout, signInWithGoogle } from '../firebase';
import { userContext } from '../Context/UserContext';

function TopMainBar() {
  const user = useContext(userContext);

  if (!user) {
    return (
      <div className='top-main-bar'>
        <button onClick={signInWithGoogle}>Login</button>
      </div>
    );
  } else {
    return (
      <div className='top-main-bar'>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }
}

export default TopMainBar;
