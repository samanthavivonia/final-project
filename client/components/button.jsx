import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <a className={`button ${this.props.color}`} href={this.props.destination}>
        <i className={this.props.iconleft}/>
        {this.props.text}
        <i className={this.props.iconright}/>
      </a>
    );
  }
}

export default Button;
