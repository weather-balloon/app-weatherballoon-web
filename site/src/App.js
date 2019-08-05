// @flow

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserLocationContext } from './Contexts';
import './App.css';
import Home from './components/Home';
import Photos from './components/Photos';
import Weather from './components/Weather';
import Navigation from './components/Navigation';
import Lighting from './components/Lighting';
import Timer from './components/Timer';
import Config from './components/Config';

type Props = {
  title: string,
};

type State = {
  user_location: Position;
};



class App extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
      user_location: '',
    };
  }

  watchUserLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) =>
          this.setState({ user_location: position })
      );
    } else {
      this.setState({
        user_location: null
      });
    }
  }

  componentDidMount() {
    this.watchUserLocation();
  }

  render() {
    return (

      <Router>
        <div className="App">
          <Navigation></Navigation>
          <section className="content-pane">
            <UserLocationContext.Provider value={this.state.user_location}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/weather" component={Weather} />
                <Route exact path="/photos" component={Photos} />
                <Route exact path="/lighting" component={Lighting} />
                <Route exact path="/timer" component={Timer} />
                <Route exact path="/config" component={Config} />
              </Switch>
            </UserLocationContext.Provider>
          </section>
          <footer />
        </div>
      </Router>
    );
  }
}

export default App;
