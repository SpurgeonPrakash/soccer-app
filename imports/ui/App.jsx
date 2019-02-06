import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

import TeamList from './Team-list.jsx';
import TeamStats from './Team-stats.jsx';
import Player from './Player.jsx';

export default class App extends Component {
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
            <div className="col s12 m5"><TeamStats /></div>
            <div className="col s12 m5"><TeamList /></div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}