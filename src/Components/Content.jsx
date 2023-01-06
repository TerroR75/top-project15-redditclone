import { useState } from 'react';
import ContentFeed from './ContentFeed';
import ContentRightSide from './ContentRightSide.jsx';

function Content() {
  // const [count, setCount] = useState(0);

  return (
    <div className='content'>
      <ContentFeed />
      <ContentRightSide />
    </div>
  );
}

export default Content;
