import { Header } from './components/Header'
import './App.css'
import { useState, useEffect } from 'react'

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
    <div>
      <h1>Esta es la app</h1>
      <Header />
      <button onClick={handleChange}>{state}</button>
    </div>
  );
}

export default App;