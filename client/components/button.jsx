import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick(destination) {

  }

  render(props) {
    return (
      <button className={this.props.color} onClick={this.handleClick(this.props.destination)}>
        <i className={this.props.iconleft}/>
        {this.props.text}
        <i className={this.props.iconright}/>
      </button>
    );
  }
}

export default Button;
