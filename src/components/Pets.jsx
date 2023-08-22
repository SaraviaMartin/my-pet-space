import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import gato from "../assets/gato.jpg"

export default function () {
    return (
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={gato}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Descripcion de la mascota.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Adoptar</Button>
        <Button size="small">Donar</Button>
      </CardActions>
    </Card>
    )
}