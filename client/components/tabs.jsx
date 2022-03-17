import React from 'react';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ selected: !this.state.selected });
  }

  render() {
    return (
      <div className={`tab ${this.props.color} ${this.state.selected}`} onClick={this.handleClick}>
        {this.props.text}
      </div>
    );
  }
}

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: null };
  }

  render() {
    const data = this.props.data;
    return (
      <div className='input-tabs'>
        <label htmlFor="">{this.props.label}</label>
        <div className={`tabs ${this.props.color}`}>
          {
            data.map(tab => (
              <Tab
                key={Object.values(tab)[0]}
                text={Object.values(tab)[1]}
                color={this.props.color}
              />
            ))
          }

          {/* <Tab text={this.props.tab1text} color={this.props.color} />
          <Tab text={this.props.tab2text} color={this.props.color} />
          <Tab text={this.props.tab3text} color={this.props.color} /> */}

        </div>
      </div>
    );
  }
}

export default Tabs;
