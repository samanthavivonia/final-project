import React from 'react';
import Home from './pages/home';
import HowDoIPlay from './pages/how-do-i-play';
import NewGameSettings from './pages/new-game-configure-settings';
import { parseRoute } from './lib';
import './styles/styles.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: parseRoute(location.hash)
      });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home />;
    } if (route.path === 'how-do-i-play') {
      return <HowDoIPlay />;
    } if (route.path === 'new-game-settings') {
      return <NewGameSettings />;
    } else {
      return <div>THIS IS A 404 PAGE</div>;
    }
  }

  render() {
    return (
      <>
        {this.renderPage()}
      </>);
  }
}
