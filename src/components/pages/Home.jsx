import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from '../commons/MovieCard'
import styles from '../styles/Home.module.css'
import Header from '../commons/Header'
import confetti from 'canvas-confetti'
import { Button } from '@mui/material'
import CreateMovie from '../commons/CreateMovie'

const Home = () => {

  const [movies, setMovies] = useState([])
  const [likeBtn, setLikeBtn] = useState(false)
  const [isFavourite, setIsFavourite] = useState(false)
  const [open, setOpen] = useState(false);
  const [newMovie, setNewMovie] = useState(false)
  const [deleteMovie, setDeleteMovie] = useState(false)

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios.get("http://localhost:5000/movies")
      .then(res => setMovies(res.data))
      .catch(err => console.log(err))
  }, [likeBtn, newMovie, deleteMovie])

  const handleLike = (movie) => {
    axios.patch(`http://localhost:5000/movies/${movie.id}`, { isLiked: !movie.isLiked })
      .then(res => setLikeBtn(!likeBtn))
      .catch(err => console.log(err))

    if (!movie.isLiked) {
      confetti()
    }
  }

  const favouriteList = movies.filter(movie => movie.isLiked)

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/movies/${id}`)
      .then(res => setDeleteMovie(preVal => !preVal))
      .catch(err => console.log(err))
  }

  return (
    <>
      <Header setIsFavourite={setIsFavourite} />
      <Button onClick={handleOpen}>Agregar pelicula</Button>
      <CreateMovie open={open} handleClose={handleClose} setNewMovie={setNewMovie} />

      {isFavourite ? <div className={styles.containerCard}>
        {favouriteList.map(movie =>
          <MovieCard movie={movie} key={movie.id} handleLike={handleLike} handleDelete={handleDelete} />
        )} </div> :

        <div className={styles.containerCard}>
          {movies.map(movie =>
            <MovieCard movie={movie} key={movie.id} handleLike={handleLike} handleDelete={handleDelete} />
          )} </div>}
    </>
  )
}

export default Home