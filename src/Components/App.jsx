import { useState } from 'react';
// import './App.css'
import TopMainBar from './TopMainBar';
import MainContent from './MainContent';
import '../styles/partials/app.scss';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <TopMainBar />
      <MainContent />
    </div>
  );
}

export default App;
