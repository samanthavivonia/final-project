import React from 'react';
import Logo from '../components/logo';
import CreateTeamCard from '../components/create-team-card';
import Team from '../components/team';
import Button from '../components/button';
import LinkButton from '../components/link-button';
class NewGameCreateTeams extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      teams: {},
      isDisabled: true
    };
    this.reloadTeams = this.reloadTeams.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleDisabled = this.handleDisabled.bind(this);
  }

  componentDidMount() {
    const gameId = this.props.gameId;
    fetch('/api/teams/' + gameId)
      .then(resp => resp.json())
      .then(data => {
        // console.log('fetch data: ', data);
        this.setState({ teams: data });
      });
  }

  reloadTeams() {
    const gameId = this.props.gameId;
    fetch('/api/teams/' + gameId)
      .then(resp => resp.json())
      .then(data => {
        // console.log('fetch data: ', data);
        this.setState({ teams: data });
      });
  }

  handleDisabled() {
    if (Object.keys(this.state.teams).length > 1) {
      this.setState({ isDisabled: false });
    }
  }

  componentDidUpdate() {
    // this.componentDidMount();
    if (this.state.isDisabled) {
      this.handleDisabled();
    }
  }

  handleBackClick() {
    // console.log('clicked');
    location.hash = 'new-game-settings';
  }

  render() {
    // console.log('Length: ', Object.keys(this.state.teams).length);
    // console.log('PAGE STATE: ', this.state);
    const teams = Object.keys(this.state.teams).map(key => {
      return (
        <Team
          key={key}
          teamId={this.state.teams[key].teamId}
          teamName={this.state.teams[key].teamName}
          characters={this.state.teams[key].characters}
        />
      );
    });

    return (
      <>
        <div className='page'>
          <div className='container'>
            <Logo size='smol' />
            <h1>Create Teams</h1>
            <div className='teams-container'>
              {teams}
              <CreateTeamCard onClick={this.handleOpenModal} />
            </div>
            <div className='buttons'>
              <Button
                color='blue'
                text='Start Game'
                iconright='fas fa-arrow-right'
                disabled={this.state.isDisabled}
              />
              <LinkButton text='Go Back' onClick={this.handleBackClick} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewGameCreateTeams;
