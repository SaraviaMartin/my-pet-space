import './App.css'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Header from './components/Header';


function App() {
  const [state, setState] = useState('Click me');


  const handleChange = () => {
    if(state === 'Click me'){
      setState('Ahora cambia el estado')
    }else{
      setState('Click me')
    }
  }

  return (
    <div className='main-container'>
      <Header/>
      <h1>Esta es la app</h1>
      <Button onClick={handleChange} variant="contained">{state}</Button>
    </div>
  );
}

export default App;