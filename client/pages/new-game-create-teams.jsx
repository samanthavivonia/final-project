import React from 'react';
import Logo from '../components/logo';
import CreateTeamCard from '../components/create-team-card';
import Button from '../components/button';
import LinkButton from '../components/link-button';
class NewGameCreateTeams extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  handleOpenModal() {
    // console.log('open modal!');
    location.hash = 'new-game-create-teams-modal';
  }

  handleBackClick() {
    // console.log('clicked');
    location.hash = 'new-game-settings';
  }

  render() {
    return (
      <div className='page'>
        <div className='container'>
          <Logo size='smol' />
          <h1>Create Teams</h1>
          <div className='create-teams-container'>
            <CreateTeamCard onClick={this.handleOpenModal} />
          </div>
          <div className='buttons'>
            <Button color='blue' text='Start Game' iconright='fas fa-arrow-right'/>
            <LinkButton text='Go Back' onClick={this.handleBackClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default NewGameCreateTeams;
