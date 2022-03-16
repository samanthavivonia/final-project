import React from 'react';
import Logo from '../components/logo';
import Button from '../components/button';
import LinkButton from '../components/link-button';

export default function Home(props) {
  return (
    <div className='container'>
      <Logo size='big'/>
      <div className='buttons'>
        <Button color='black' text='New Game' destination='#new-game-configure-settings'/>
        <LinkButton text='How Do I Play?' destination='#how-do-i-play'/>
      </div>
    </div>
  );
}
