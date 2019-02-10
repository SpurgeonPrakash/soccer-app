import React, { Component } from 'react';
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

// database
import { Players } from '../api/players';

import TeamList from './Team-list.jsx';
import TeamStats from './Team-stats.jsx';
import Player from './Player.jsx';
import AccountsWrapper from './AccountsWrapper';

const tempPlayer = {
  name: "Temp Player",
  team: "Lynda",
  passing: 2,
  dribbling: 2,
  shooting: 3,
  marking: 1,
  tackling: 3,
  acceleration: 2,
  topSpeed: 2,
  soccerIQ: 1,
  notes: "This player is only temporary",
}

class App extends Component {
  constructor(props) {
    super(props);

    // setting up the state
    this.state = { currentPlayer: tempPlayer };
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  }

  renderPlayers() {
    return this.props.players.map((player) => (
      <TeamList key={player._id} player={player} updateCurrentPlayer={this.updateCurrentPlayer}/>
    ));
  }

  updateCurrentPlayer(player) {
    this.setState({
      currentPlayer: player,
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title="Soccer Application"
            iconClassNameRight="muidocs-icon-navigation-expand"
            showMenuIconButton={false}>
            <AccountsWrapper />
          </AppBar>
          <div className="row">
            <div className="col s12 m7"><Player player={this.state.currentPlayer}/></div>
            <div className="col s12 m5">
              <h2>Team List</h2><Link to="/new" className="waves-effect waves-light btn">Add player</Link>
              <Divider />
                <List>
                  {this.renderPlayers()}
                </List>
              <Divider />
            </div>
            <div className="col s12 m5"><TeamStats /></div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

// Check for propTypes
App.propTypes = {
  players: PropTypes.array.isRequired,
};

// subscribe to data published by the server
export default createContainer(() => {
  Meteor.subscribe('players');
  const user = Meteor.userId();

  return {
    players: Players.find({owner: user}, {sort:{ name: 1 }}).fetch(),
  };
}, App);
