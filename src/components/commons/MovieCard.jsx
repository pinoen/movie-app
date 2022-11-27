import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';

export default function MovieCard({ movie, handleLike, handleDelete }) {

  return (
    <Card sx={{ width: 300, height: 500 }}>
      <CardHeader
        title={movie.name}
        subheader={movie.createdAt}
      />
      <CardMedia
        component="img"
        height="200"
        image={movie.img}
        alt={movie.name}
      />
      <CardContent sx={{ height: 150 }}>
        <Typography variant="body2" color="text.secondary">
          {movie.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton aria-label="add to favorites" onClick={() => handleLike(movie)}>
          <FavoriteIcon color={movie.isLiked ? 'error' : 'inherit'} />
        </IconButton>
        <IconButton aria-label='delete' onClick={() => handleDelete(movie.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}