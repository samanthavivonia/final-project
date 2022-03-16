import React from 'react';

function Logo(props) {
  return (
  <div className={`logo ${props.size}`}>
    <div className='logo-letter blue'>T</div>
    <div className='logo-letter red'>a</div>
    <div className='logo-letter yellow'>g</div>
    <div className='logo-letter green'>t</div>
    <div className='logo-letter red'>e</div>
    <div className='logo-letter yellow'>a</div>
    <div className='logo-letter blue'>m</div>
  </div>
  );
}

export default Logo;
