import { useState } from 'react';
import LeftMainBar from './LeftMainBar';
import Content from './Content';

function MainContent() {
  // const [count, setCount] = useState(0);

  return (
    <div className='main-content'>
      <LeftMainBar />
      <Content />
    </div>
  );
}

export default MainContent;
