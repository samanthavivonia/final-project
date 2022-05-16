import React from 'react';
import LinkButton from './link-button';
import Button from './button';

class ModalDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <div className='modal'>
        <h3>
          Are you sure you want to delete this team?
        </h3>
        <div className='buttons'>
          <Button
            color='red'
            text='Delete Team'
            // onClick={
            //   () => {
            //     this.handleSubmit();
            //     this.props.onClose();
            //   }
            // }
          />
          <LinkButton
            text='Cancel'
            // onClick={
            //   () => { this.props.onClose(); }
            // }
          />
        </div>
      </div>
    );
  }
}

export default ModalDelete;
