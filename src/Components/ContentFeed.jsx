import { useState } from 'react';
import Post from './Post';
import NewPostPrompt from './NewPostPrompt';

function ContentFeed() {
  // const [count, setCount] = useState(0);

  return (
    <div className='content-feed'>
      <NewPostPrompt />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default ContentFeed;
