import React from 'react';
import Logo from '../components/logo';
import Tabs from '../components/tabs';
import Button from '../components/button';
import LinkButton from '../components/link-button';

class NewGameSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulties: [],
      ratings: []
    };
  }

  componentDidMount() {
    fetch('/api/difficulties')
      .then(resp => resp.json())
      .then(difficulties => {
        this.setState({ difficulties });
      });
    fetch('/api/ratings')
      .then(resp => resp.json())
      .then(ratings => {
        this.setState({ ratings });
      });
  }

  render() {
    const difficulties = this.state.difficulties;
    const ratings = this.state.ratings;
    return (
      <div className='container'>
        <Logo size='smol' />
        <h1>Choose Game Settings</h1>

        <Tabs
          data={difficulties}
          label='How difficult do you want your game to be?'
          color='blue'
        />

        <Tabs
          data={ratings}
          label='What kind of questions?'
          color='red'
        />

        <div className='buttons'>
          <Button color='yellow' text='Create Teams' destination='#new-game-configure-settings' />
          <LinkButton text='Go Back' destination='' />
        </div>
      </div>
    );
  }
}

export default NewGameSettings;
