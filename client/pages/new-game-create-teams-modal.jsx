import React from 'react';
import CreateEditTeamModal from '../components/create-edit-team-modal';
import NewGameCreateTeams from './new-game-create-teams';

class NewGameCreateTeamsModal extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
        <div className='modal-overlay'>
          <CreateEditTeamModal close='new-game-create-teams'/>
        </div>
        <NewGameCreateTeams />
      </>
    );
  }
}

export default NewGameCreateTeamsModal;
