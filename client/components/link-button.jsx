import React from 'react';

class LinkButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <div className="linkbutton">
        <i className={this.props.icon}/>
        {this.props.text}
      </div>
    );
  }
}

export default LinkButton;
