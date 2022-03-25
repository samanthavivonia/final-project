import React from 'react';
import LinkButton from './link-button';
import Button from './button';

class CreateEditTeamModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextInputId: 1,
      teamName: '',
      characters: {},
      editing: null
    };
    this.handleTeamName = this.handleTeamName.bind(this);
    this.handleCharacterName = this.handleCharacterName.bind(this);
    this.addCharacterInput = this.addCharacterInput.bind(this);
    this.deleteCharacterInput = this.deleteCharacterInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleTeamName(event) {
    // console.log('handleteamName: ', event.target.value);
    this.setState({ teamName: event.target.value });
  }

  handleCharacterName(event, id) {
    // console.log('handleCharacterName: ', event.target.value);
    const characters = { ...this.state.characters };
    characters[id].characterName = event.target.value;
    this.setState({ characters });
  }

  addCharacterInput(id) {
    // console.log('addCharacterInput called');
    const characters = { ...this.state.characters };
    const newCharacter = {
      characterId: this.state.nextInputId,
      characterName: ''
    };
    characters[this.state.nextInputId] = newCharacter;
    this.setState({ characters: characters, nextInputId: (this.state.nextInputId + 1) });
  }

  deleteCharacterInput(id) {
    // console.log('deleteCharacterInput');
    const characters = { ...this.state.characters };
    delete characters[id];
    this.setState({ characters });
  }

  handleSubmit() {
    // console.log('Handle Submit Called');
    const newTeamData = {
      gameId: 1,
      teamName: this.state.teamName,
      characters: this.state.characters
    };
    // console.log('handleSubmit data: ', newTeamData);
    fetch('/api/newteam', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTeamData)
    })
      .then(res => res.json())
      .then(data => {
        location.hash = 'new-game-create-teams';
      });
  }

  handleClose() {
    // console.log('handleClose');
    location.hash = this.props.close;
  }

  render(props) {
    // console.log('MODAL STATE: ', this.state);
    const characterInputs = Object.keys(this.state.characters).map(key => {
      const character = this.state.characters[key];
      return (
        <div key={key} className='characterInputAndX'>
          <input className='character' type="text" placeholder='Character Name...' onChange={e => this.handleCharacterName(e, character.characterId)}/>
          <LinkButton icon='fas fa-times' onClick={() => this.deleteCharacterInput(character.characterId)} />
        </div>
      );
    });

    return (
      <>
        <div className='modal'>
          <input className='team' type="text" placeholder='Team Name...' onChange={this.handleTeamName}/>
          <div className='characterInputs'>
            {characterInputs}
          </div>
          <LinkButton text='Add Character' icon='fas fa-plus' onClick={this.addCharacterInput} />
          <div className='buttons'>
            <Button color='green' text='Save Team' onClick={this.handleSubmit}/>
            <LinkButton text='Cancel' onClick={this.handleClose} />
          </div>
        </div>
      </>
    );
  }
}

export default CreateEditTeamModal;
