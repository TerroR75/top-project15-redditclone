import { useState, useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { userContext } from '../Context/UserContext';

function Post() {
  const user = useContext(userContext);

  if (user) {
    return (
      <div className='post'>
        <div className='post-karma-vote'>votes</div>
        <div className='post-content'>Content {user.displayName}</div>
      </div>
    );
  } else {
    return (
      <div className='post'>
        <div className='post-karma-vote'>votes</div>
        <div className='post-content'>Content LOGGED OUT</div>
      </div>
    );
  }
}

export default Post;
