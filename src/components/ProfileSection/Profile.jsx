import React from 'react';
import { Avatar, Typography } from '@material-ui/core';

function Profile() {
  return (
    <div className='section-container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0px' }}>
      <div className='cart-container' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: '160px 100px', width: 'calc(100% - 40px)' }}>
        <Avatar
          alt="Tu foto"
          src="public/imgs/FotoMia.jpg"
          style={{ width: '300px', height: '300px' }}
        />

        <div className='cart-text-container' style={{ marginLeft: '20px' }}>
          <Typography variant="h5" className="poppins-text" style={{ color: 'black', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
            Pablo Beckmann
          </Typography>
          <Typography variant="subtitle1" className="poppins-text" style={{ color: '#555', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
            Estudiante de Sistemas - Front End Developer
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Profile;
