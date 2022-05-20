import React from 'react';
import Button from '../components/button';
import LinkButton from '../components/link-button';

class NewGameRollCharacters extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rolled: false,
      teams: null
    };
    this.randomCharacter = this.randomCharacter.bind(this);
    this.rollAllCharacters = this.rollAllCharacters.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const gameId = this.props.gameId;
    fetch('/api/teams/' + gameId)
      .then(resp => resp.json())
      .then(data => {
        // console.log('fetch data: ', data);
        this.setState({ teams: data });
      });
  }

  randomCharacter(id) {
    if (this.state.teams) {
      const keys = Object.keys(this.state.teams[id].characters);
      // console.log('Keys: ', keys);
      const randomNumber = keys[Math.floor(Math.random() * keys.length)];
      // console.log('Random Number:', randomNumber);
      const randomCharacter = this.state.teams[id].characters[randomNumber];
      // console.log('Random Character: ', randomCharacter);
      return randomCharacter;
    }
  }

  rollAllCharacters() {
    // console.log('Roll All!');
    if (this.state.teams) {
      const teams = this.state.teams;
      for (const team in teams) {
        const activeCharacter = this.randomCharacter(team);
        teams[team].active = activeCharacter;
      }
      this.setState({
        teams: teams,
        rolled: true
      });
    }
  }

  handleSubmit() {
    location.hash = 'game?gameId=' + this.props.gameId;
  }

  render() {

    // console.log('STATE: ', this.state);

    // PRE-ROLL STATE

    let pageContent = <>
      <div>
        <h3>
          First, lets roll for starting characters.
        </h3>
      </div>
      <div className='buttons'>
        <Button
          color='black'
          text='Roll Characters'
          iconleft='fas fa-dice'
          onClick={this.rollAllCharacters}
        />
      </div>
    </>;

    // POST-ROLL STATE

    if (this.state.rolled) {
      const messageLines = Object.keys(this.state.teams).map(key => {
        return (
          <h3
            key={key}
          >
            {`${this.state.teams[key].teamName} is playing as ${this.state.teams[key].active}`};
          </h3>
        );
      });

      pageContent = <>
        <div>
          {messageLines}
        </div>
        <div className='buttons'>
          <LinkButton
            text='Roll New Characters'
            icon='fas fa-dice'
            onClick={this.rollAllCharacters}
          />
          <Button
            color='blue'
            text='Start Playing'
          />
        </div>
      </>;
    }

    return (
      <div className='page'>
        <div className='container'>
          {pageContent}
        </div>
      </div>
    );
  }

}

export default NewGameRollCharacters;
