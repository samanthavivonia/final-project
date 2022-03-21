import React from 'react';
import Logo from '../components/logo';
import Button from '../components/button';
import LinkButton from '../components/link-button';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // console.log('clicked');
    location.hash = 'new-game-settings';
  }

  render() {
    return (
      <div className='container'>
        <Logo size='big' />
        <div className='buttons'>
          <Button
            color='black'
            text='New Game'
            onClick={this.handleClick}
          />
          <LinkButton text='How Do I Play?' destination='#how-do-i-play' />
        </div>
      </div>
    );
  }
}

export default Home;
