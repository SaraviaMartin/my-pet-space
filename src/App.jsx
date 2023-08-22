import './App.css'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Header from './components/Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, lime, purple } from '@mui/material/colors';
import Pets from './components/Pets';


const theme = createTheme({
  palette: {
    primary: lime,
    secondary: blue,
  },
});


function App() {
  const [state, setState] = useState('Quiero saber mas');


  const handleChange = () => {
    if(state === 'Quiero saber mas'){
      setState('Registrarme')
    }else{
      setState('Quiero saber mas')
    }
  }

  return (
    <div className='main-container'>
      <Header/>
      <ThemeProvider theme={theme}>
      <Pets/>
      <Button onClick={handleChange} variant="contained" color="secondary" sx={{ ml: 2 }}>{state}</Button>
    </ThemeProvider>
      
    </div>
  );
}

export default App;