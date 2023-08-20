import { Header } from './components/Header'
import './App.css'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';



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
      <Button onClick={handleChange} variant="contained">{state}</Button>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
    </Box>
    </div>
  );
}

export default App;