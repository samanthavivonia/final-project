import React from 'react';
import Logo from '../components/logo';
import Button from '../components/button';
import LinkButton from '../components/link-button';

export default function Home(props) {
  return (
    <div className='container'>
      <Logo size='big'/>
      <div className='buttons'>
        <Button color='black' text='New Game' />
        <LinkButton text='How Do I Play?' />
      </div>
    </div>
  );
}
