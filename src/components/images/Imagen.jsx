import React from 'react';
import box from '../../assets/images/illustration-box-desktop.svg';
import bg from '../../assets/images/bg-pattern-desktop.svg';
import woman from '../../assets/images/illustration-woman-online-desktop.svg';

const Imagen = () => {
  return (
    <div className='Imagen'>
      <img className='Imagen__Box' src={box} alt={`Imagen`} />
      <img className='Imagen_BG' src={bg} alt='Background' />
      <img className='Imagen_Woman' src={woman} alt='Background' />
    </div>
  );
};

export default Imagen;
