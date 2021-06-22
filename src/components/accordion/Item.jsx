import React from 'react';
import Icon from '../../assets/images/icon-arrow-down.svg';

const Item = ({ title, text, id, active, setActive }) => {
  return (
    <div className='Item'>
      <div
        className={`${active === id && 'active'} Item__title`}
        onClick={() => {
          if (active === id) {
            setActive(null);
          } else {
            setActive(id);
          }
        }}
      >
        <div className='Item__title--text'>{title}</div>
        <div className='Item__title--img'>
          <img src={Icon} alt='Icon' />
        </div>
      </div>

      {active === id && <div className='Item__text'>{text}</div>}
    </div>
  );
};

export default Item;
