import { useState } from 'react';
import Post from './Post';

function ContentFeed() {
  // const [count, setCount] = useState(0);

  return (
    <div className='content-feed'>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default ContentFeed;
