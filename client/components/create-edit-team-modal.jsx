import React from 'react';
import LinkButton from './link-button';
import Button from './button';

class CreateEditTeamModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextInputId: 2,
      characters: [1],
      editing: null
    };
    this.addCharacterInput = this.addCharacterInput.bind(this);
    this.deleteCharacterInput = this.deleteCharacterInput.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  addCharacterInput() {
    // console.log('addCharacterInput called');
    this.state.characters.push(this.state.nextInputId);
    this.setState({ nextInputId: this.state.nextInputId + 1 });
  }

  deleteCharacterInput(id) {
    // console.log('deleteCharacterInput');
    const charCopy = [...this.state.characters];
    charCopy.splice(id, 1);
    this.setState({ characters: charCopy });
  }

  handleClose() {
    // console.log('handleClose');
    location.hash = this.props.close;
  }

  render(props) {
    const characterInputs = this.state.characters.map(character => {
      return (
        <div key={character} className='characterInputAndX'>
          <input className='character' type="text" placeholder='Character Name...' />
          <LinkButton icon='fas fa-times' onClick={() => this.deleteCharacterInput(character)} />
        </div>
      );
    });

    return (
      <>
        <div className='modal'>
          <input className='team' type="text" placeholder='Team Name...' />
          <div className='characterInputs'>
            {characterInputs}
          </div>
          <LinkButton text='Add Character' icon='fas fa-plus' onClick={this.addCharacterInput} />
          <div className='buttons'>
            <Button color='green' text='Save Team' />
            <LinkButton text='Cancel' onClick={this.handleClose} />
          </div>
        </div>
      </>
    );
  }
}

export default CreateEditTeamModal;
