import React from 'react';

class CreateTeamCard extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div
        className='create-team'
        onClick={
          () => { this.props.onClick(); }
        }
      >
        <i className='fas fa-plus'></i>
        <p>Create Team </p>
      </div>
    );
  }
}

export default CreateTeamCard;
