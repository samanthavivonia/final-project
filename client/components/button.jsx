import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <button
        className={`button ${this.props.color}`}
        onClick={
         () => { this.props.onClick(); }
        }
      >
        <i className={this.props.iconleft}/>
        {this.props.text}
        <i className={this.props.iconright}/>
      </button>
    );
  }
}

export default Button;
