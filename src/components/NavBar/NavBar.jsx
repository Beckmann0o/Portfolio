import React, { useRef } from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbarTitle: {
    fontFamily: 'Poppins, sans-serif',
    flexGrow: 1,
    color: 'white', // Cambia el color a blanco u otro color claro
  },
  navbarButton: {
    fontFamily: 'Poppins, sans-serif',
    color: 'white', // Cambia el color a blanco u otro color claro
  },
});

function Navbar() {
  const classes = useStyles();
  const sectionRef = useRef(null);

  const handleInicioClick = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <Typography variant="h6" className={classes.navbarTitle}>
          Pablo Beckmann
        </Typography>
        <Button href='#' color="inherit" className={classes.navbarButton} onClick={handleInicioClick}>
          Inicio
        </Button>
        <Button color="inherit" className={classes.navbarButton}>
          Sobre Mi
        </Button>
        <Button color="inherit" className={classes.navbarButton}>
          Proyectos
        </Button>
        <Button color="inherit" className={classes.navbarButton}>
          Contacto
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
