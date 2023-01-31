import { useState } from 'react';

function Post() {
  // const [count, setCount] = useState(0);

  return (
    <div className='post'>
      <div className='post-karma-vote'>votes</div>
      <div className='post-content'>Content</div>
    </div>
  );
}

export default Post;
