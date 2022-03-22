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
        <p>Create Team </p>
        <i className='fas fa-plus'></i>
      </div>
    );
  }
}

export default CreateTeamCard;
