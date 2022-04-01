import React from 'react';
import LinkButton from './link-button';
import Button from './button';

class ModalTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextInputId: 1,
      teamName: '',
      characters: {}
    };
    this.handleTeamName = this.handleTeamName.bind(this);
    this.handleTeamName = this.handleTeamName.bind(this);
    this.handleCharacterName = this.handleCharacterName.bind(this);
    this.addCharacterInput = this.addCharacterInput.bind(this);
    this.deleteCharacterInput = this.deleteCharacterInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

    if (this.props.editing) {
      // console.log('loadEditData called!');
      // console.log(Object.keys(this.props.characters));
      const ids = Object.keys(this.props.characters).map(id => parseInt(id));
      // console.log('ids: ', ids);
      const nextId = Math.max(...ids) + 1;
      // console.log('nextId: ', nextId);

      this.setState({
        teamName: this.props.teamName,
        characters: this.props.characters,
        nextInputId: nextId
      });
    }

  }

  handleTeamName(event) {
    // console.log('handleteamName: ', event.target.value);
    this.setState({ teamName: event.target.value });
  }

  handleCharacterName(event, id) {
    // console.log('handleCharacterName: ', event.target.value);
    const characters = { ...this.state.characters };
    characters[id] = event.target.value;
    this.setState({ characters });
  }

  addCharacterInput(id) {
    // console.log('addCharacterInput called');
    const characters = { ...this.state.characters };
    // console.log('characters: ', characters);
    characters[this.state.nextInputId] = '';
    // console.log('characters: ', characters);
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
    if (!this.props.editing) {
      // console.log('This is a create!');
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
        .then(res => res.json());
    }
    if (this.props.editing) {
      // console.log('This is an edit!');
      const newTeamData = {
        gameId: 1,
        teamId: this.props.teamId,
        teamName: this.state.teamName,
        characters: this.state.characters
      };
      // console.log('handleSubmit data: ', newTeamData);
      fetch('api/editteam', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTeamData)
      })
        .then(res => res.json());
    }
  }

  render(props) {
    // console.log('MODAL STATE: ', this.state);
    const characterInputs = Object.keys(this.state.characters).map(key => {
      const character = this.state.characters[key];
      return (
        <div
          key={key}
          className='characterInputAndX'
        >
          <input
            className='character'
            type="text" placeholder='Character Name...'
            value={character}
            onChange={e => this.handleCharacterName(e, key)}
          />
          <LinkButton
            icon='fas fa-times'
            onClick={() => this.deleteCharacterInput(key)}
          />
        </div>
      );
    });

    return (
      <>
        <div className='modal'>
          <input
            className='team'
            type="text"
            placeholder='Team Name...'
            value={this.state.teamName}
            onChange={this.handleTeamName}
          />
          <div className='characterInputs'>
            {characterInputs}
          </div>
          <LinkButton
            text='Add Character'
            icon='fas fa-plus'
            onClick={this.addCharacterInput}
          />
          <div className='buttons'>
            <Button
              color='green'
              text='Save Team'
              onClick={
                () => {
                  this.handleSubmit();
                  this.props.onClose();
                }
              }
            />
            {/* <LinkButton
              icon='fas fa-trash'
              text='Delete Team'
            /> */}
            <LinkButton
              text='Cancel'
              onClick={
                () => { this.props.onClose(); }
              }
            />
          </div>
        </div>
      </>
    );
  }
}

export default ModalTeam;
