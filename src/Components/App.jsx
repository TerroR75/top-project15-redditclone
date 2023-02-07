import { useState } from 'react';
// import './App.css'
import TopMainBar from './TopMainBar';
import MainContent from './MainContent';
import '../styles/partials/app.scss';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { userContext } from '../Context/UserContext';

function App() {
  // const [user, setUser] = useState(null);
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className='App'>
      <userContext.Provider value={user}>
        <TopMainBar />
        <MainContent />
      </userContext.Provider>
    </div>
  );
}

export default App;
