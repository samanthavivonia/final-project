import React from 'react';
import LinkButton from './link-button';
import ModalTeam from './modal-team';

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamId: null,
      teamName: '',
      characters: {
        1: '',
        2: '',
        3: ''
      },
      selected: null,
      points: 0,
      modal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    this.setState({
      teamId: this.props.teamId,
      teamName: this.props.teamName,
      characters: this.props.characters
    });
  }

  handleOpenModal() {
    // console.log('handleOpenModal!');
    this.setState({ modal: true });
  }

  handleCloseModal() {
    // console.log('close modal!');
    this.setState({ modal: false });
  }

  render() {
    // console.log('TEAM COMPONENT STATE: ', this.state);
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

    const modal = () => {
      if (this.state.modal) {
        return (
          <div className='modal-overlay' >
            <ModalTeam
              editing={true}
              teamId={this.state.teamId}
              teamName={this.state.teamName}
              characters={this.state.characters}
              onClose={this.handleCloseModal}
            />
          </div >
        );
      } return null;
    };

    return (
      <>
        {modal()}
        <div className='team'>
          <h3>{this.state.teamName}</h3>
          <div className='character-sticks'>
            {characterSticks}
          </div>
          <LinkButton text='Edit Team' icon='fas fa-pencil-ruler' onClick={this.handleOpenModal}/>
        </div>
      </>
    );
  }
}

export default Team;
