import React from 'react';
import ModalTeam from './modal-team';

class CreateTeamCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    // console.log('open modal!');
    this.setState({ modal: true });
  }

  handleCloseModal() {
    // console.log('close modal!');
    this.setState({ modal: false });
  }

  render() {
    const modal = () => {
      if (this.state.modal) {
        return (
          <div className='modal-overlay' >
            <ModalTeam
              onClose={this.handleCloseModal}
            />
          </div >
        );
      } return null;
    };

    return (
      <>
        {modal()}
        <div
          className='create-team'
          onClick={this.handleOpenModal}
        >
          <i className='fas fa-plus'></i>
          <p>Create Team </p>
        </div>
      </>
    );
  }
}

export default CreateTeamCard;
