import React from 'react';
import Logo from '../components/logo';
import Tabs from '../components/tabs';
import Button from '../components/button';
import LinkButton from '../components/link-button';

class NewGameSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulties: [],
      difficultySelected: null,
      pointsToWin: [],
      pointsToWinSelected: null,
      ratings: [],
      ratingSelected: null,
      isDisabled: true
    };
    this.handleDifficultyClick = this.handleDifficultyClick.bind(this);
    this.handlePointsToWinClick = this.handlePointsToWinClick.bind(this);
    this.handleRatingClick = this.handleRatingClick.bind(this);
    this.handleDisabled = this.handleDisabled.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  componentDidMount() {
    fetch('/api/gamesettings')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          difficulties: data.difficulties,
          pointsToWin: data.pointsToWin,
          ratings: data.ratings
        });
      });
  }

  handleDifficultyClick(id) {
    // console.log('handleDifficultyCLick');
    this.setState({ difficultySelected: id });
  }

  handlePointsToWinClick(id) {
    // console.log('handlePointsToWinCLick');
    this.setState({ pointsToWinSelected: id });
  }

  handleRatingClick(id) {
    // console.log('handleRatingCLick');
    this.setState({ ratingSelected: id });
  }

  handleDisabled() {
    if (this.state.difficultySelected && this.state.pointsToWinSelected && this.state.ratingSelected) {
      this.setState({ isDisabled: false });
    }
  }

  componentDidUpdate() {
    if (this.state.isDisabled) {
      this.handleDisabled();
    }
  }

  handleSubmit() {
    // console.log('Handle Submit Called');
    const newGameData = {
      gameDifficulty: this.state.difficultySelected,
      gamePointsToWin: this.state.pointsToWinSelected,
      gameRating: this.state.ratingSelected
    };
    fetch('/api/games', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGameData)
    })
      .then(res => res.json())
      .then(data => {
        location.hash = 'new-game-create-teams?gameId=' + data.gameId;
      });
  }

  handleBackClick() {
    // console.log('clicked');
    location.hash = '';
  }

  render() {
    // console.log('PAGE STATE: ', this.state);
    const difficulties = this.state.difficulties;
    const ratings = this.state.ratings;
    const pointsToWin = this.state.pointsToWin;
    return (
      <div className='page'>
        <div className='container'>
          <Logo size='smol' />
          <h1>Choose Game Settings</h1>

          <Tabs
            data={difficulties}
            label='How difficult do you want your game to be?'
            color='blue'
            onClick={this.handleDifficultyClick}
          />

          <Tabs
            data={pointsToWin}
            label='How long do you want your game to be?'
            color='green'
            onClick={this.handlePointsToWinClick}
          />

          <Tabs
            data={ratings}
            label='What kind of questions do you want to answer?'
            color='red'
            onClick={this.handleRatingClick}
          />

          <div className='buttons'>
            <Button
              color='yellow'
              text='Create Teams'
              iconright='fas fa-arrow-right'
              disabled={this.state.isDisabled}
              onClick={this.handleSubmit}/>
            <LinkButton text='Go Back' onClick={this.handleBackClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default NewGameSettings;
