import { Button, Typography } from '@mui/material'
import React from 'react'
import styles from '../styles/Header.module.css'

const Header = ({ setIsFavourite }) => {
  return (
    <div className={styles.headerContainer}>
      <Typography variant='h4' color='primary' >Peliculas</Typography>
      <div className={styles.buttonsContainer}>
        <Button variant='contained' color='primary' onClick={() => setIsFavourite(false)} >Todos</Button>
        <Button variant='contained' color='primary' onClick={() => setIsFavourite(true)} >Favoritos</Button>
      </div>
    </div>
  )
}

export default Header