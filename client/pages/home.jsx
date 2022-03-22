import React from 'react';
import Logo from '../components/logo';
import Button from '../components/button';
import LinkButton from '../components/link-button';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleButtonClick() {
    // console.log('clicked');
    location.hash = 'new-game-settings';
  }

  handleLinkClick() {
    // console.log('clicked');
    location.hash = 'how-do-i-play';
  }

  render() {
    return (
      <div className='page'>
        <div className='container'>
          <Logo size='big' />
          <div className='buttons'>
            <Button
              color='black'
              text='New Game'
              onClick={this.handleButtonClick}
            />
            <LinkButton text='How Do I Play?' onClick={this.handleLinkClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
