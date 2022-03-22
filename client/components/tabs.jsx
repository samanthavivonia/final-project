import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: null };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(tabId) {
    // console.log('Clicked a tab');
    this.setState({ selected: tabId });
  }

  render() {
    // console.log('TABS STATE: ', this.state);
    const data = this.props.data;
    return (
      <div className='input-tabs'>
        <label htmlFor="">{this.props.label}</label>
        <div className={`tabs ${this.props.color}`}>
          {
            data.map(tab => {
              let isSelected = false;
              if (this.state.selected === Object.values(tab)[0]) {
                isSelected = true;
              }
              return (
                <div
                  key={Object.values(tab)[0]}
                  className={`tab ${this.props.color} ${isSelected}`}
                  onClick={
                    () => {
                      this.props.onClick(Object.values(tab)[0]);
                      this.handleSelect(Object.values(tab)[0]);
                    }
                    }
                >
                  {Object.values(tab)[1]}
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Tabs;
