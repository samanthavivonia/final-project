import React from 'react';

class LinkButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <a
        className="linkbutton"
        onClick={
          () => { this.props.onClick(); }
        }
      >
      <i className={this.props.icon}/>
        {this.props.text}
      </a>
    );
  }
}

export default LinkButton;
