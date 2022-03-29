import React from 'react';
import LinkButton from './link-button';

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamName: '',
      characters: {
        1: '',
        2: '',
        3: ''
      },
      selected: null
    };

  }

  componentDidMount() {
    this.setState({
      teamName: this.props.teamName,
      characters: this.props.characters
    });
  }

  render() {
    const characterSticks = Object.keys(this.state.characters).map(key => {
      const character = this.state.characters[key];
      return (
        <div
          className='character-stick'
          key={key}
        >
          {character}
        </div>
      );
    });

    return (
      <div className='team'>
        <h3>{this.state.teamName}</h3>
        <div className='character-sticks'>
          {characterSticks}
        </div>
      <LinkButton text='Edit Team' icon='fas fa-pencil-ruler'/>
      </div>

    );
  }
}

export default Team;
