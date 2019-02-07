import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import TeamList from './Team-list.jsx';
import TeamStats from './Team-stats.jsx';
import Player from './Player.jsx';

export default class App extends Component {
  getPlayers() {
    return [
      {
        _id: 1,
        name: "Alex Sanchez",
        passing: 7,
        dribbling: 8,
        shooting: 7,
        marking: 7,
        tackling: 4,
        acceleration: 9,
        topSpeed: 8,
        soccerIQ: 7,
      },
      {
        _id: 2,
        name: "Sergey Ramos",
        passing: 7,
        dribbling: 8,
        shooting: 5,
        marking: 9,
        tackling: 9,
        acceleration: 7,
        topSpeed: 7,
        soccerIQ: 5,
      },
      {
        _id: 3,
        name: "Brick Wall",
        passing: 7,
        dribbling: 8,
        shooting: 5,
        marking: 10,
        tackling: 10,
        acceleration: 7,
        topSpeed: 7,
        soccerIQ: 5,
      },
    ];
  }

  renderPlayers() {
    return this.getPlayers().map((player) => (
      <TeamList key={player._id} player={player} />
    ));
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title="Soccer Application"
            iconClassNameRight="muidocs-icon-navigation-expand"
            showMenuIconButton={false}/>
          <div className="row">
            <div className="col s12 m7"><Player /></div>
            <div className="col s12 m5">
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
