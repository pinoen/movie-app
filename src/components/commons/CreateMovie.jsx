import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from '../styles/Form.module.css'
import { Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CreateMovie({ open, handleClose, setNewMovie }) {

  const { handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      description: '',
      createdAt: '',
      img: ''
    },
    onSubmit: (data) => axios.post("http://localhost:5000/movies", {
      name: data.name,
      description: data.description,
      createdAt: data.createdAt,
      img: data.img,
      isLiked: false
    }).then(res => {
      handleClose()
      setNewMovie(preVal => !preVal)
    })
      .catch(err => console.log(err))
  })

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <Typography variant='h4' color='primary' >Agregar Pelicula</Typography>

            <TextField id="outlined-basic" label="Ingresar titulo" variant="outlined" name='name' onChange={handleChange} fullWidth />
            <TextField id="outlined-basic" label="Descripcion" variant="outlined" name='description' onChange={handleChange} fullWidth />
            <TextField id="outlined-basic" label="URL de la imagen" variant="outlined" name='img' onChange={handleChange} fullWidth />
            <TextField id="outlined-basic" label="Fecha de lanzamiento" variant="outlined" name='createdAt' onChange={handleChange} fullWidth />

            <Button type='submit' variant='contained' color='primary'>Agregar</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}