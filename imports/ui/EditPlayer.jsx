import React, { Component } from 'react';

export default class Edit extends Component {

  showTeamStats() {
    this.props.showTeamStats();
  }

  editPlayer(event) {
    event.preventDefault();

    let player = {
      _id: this.props.currentPlayer._id,
      name: this.refs.name.value,
      team: this.refs.team.value,
      passing: this.refs.passing.value,
      dribbling: this.refs.dribbling.value,
      shooting: this.refs.shooting.value,
      marking: this.refs.marking.value,
      tackling: this.refs.tackling.value,
      acceleration: this.refs.acceleration.value,
      topSpeed: this.refs.topSpeed.value,
      soccerIQ: this.refs.soccerIQ.value,
      notes: this.refs.notes.value,
      createdAt: new Date(),  // when this object was created
      owner: Meteor.userId(),
    }

    //console.log("Success player submitted!");

    Meteor.call('updatePlayer', player, (error) => { // insertPlayer is in ../server/methods.js
      if (error) {
        alert("Oops! Something went wrong: " + error.reason);
      } else {
        alert("Player updated!");
        this.showTeamStats();
      }
    });
  }

  render() {

    const currentPlayer = this.props.currentPlayer;

    return (
      <div className="row">
        <form className="col s12" onSubmit={this.editPlayer.bind(this)}>
          <h3>Edit Player</h3>

          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Name" ref="name" type="text" className="validate" defaultValue={currentPlayer.name}/>
            </div>
            <div className="input-field col s6">
              <input placeholder="Team" ref="team" type="text" className="validate" defaultValue={currentPlayer.team}/>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <h5>Passing</h5>
              <select className="browser-default" ref="passing" defaultValue={currentPlayer.passing}>
                <option value="0">0 - No skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Decent skill</option>
                <option value="3">3 - Beast mode</option>
              </select>
            </div>
            <div className="col s6">
              <h5>Dribbling</h5>
              <select className="browser-default" ref="dribbling" defaultValue={currentPlayer.dribbling}>
                <option value="0">0 - No skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Decent skill</option>
                <option value="3">3 - Beast mode</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <h5>Shooting</h5>
              <select className="browser-default" ref="shooting" defaultValue={currentPlayer.shooting}>
                <option value="0">0 - No skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Decent skill</option>
                <option value="3">3 - Beast mode</option>
              </select>
            </div>
            <div className="col s6">
              <h5>Marking</h5>
              <select className="browser-default" ref="marking" defaultValue={currentPlayer.marking}>
                <option value="0">0 - No skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Decent skill</option>
                <option value="3">3 - Beast mode</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <h5>Tackling</h5>
              <select className="browser-default" ref="tackling" defaultValue={currentPlayer.tackling}>
                <option value="0">0 - No skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Decent skill</option>
                <option value="3">3 - Beast mode</option>
              </select>
            </div>
            <div className="col s6">
              <h5>Acceleration</h5>
              <select className="browser-default" ref="acceleration" defaultValue={currentPlayer.acceleration}>
                <option value="0">0 - No skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Decent skill</option>
                <option value="3">3 - Beast mode</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <h5>Top Speed</h5>
              <select className="browser-default" ref="topSpeed" defaultValue={currentPlayer.topSpeed}>
                <option value="0">0 - No skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Decent skill</option>
                <option value="3">3 - Beast mode</option>
              </select>
            </div>
            <div className="col s6">
              <h5>Soccer IQ</h5>
              <select className="browser-default" ref="soccerIQ" defaultValue={currentPlayer.soccerIQ}>
                <option value="0">0 - No skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Decent skill</option>
                <option value="3">3 - Beast mode</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <textarea placeholder="Notes" ref="notes" className="materialize-textarea" defaultValue={currentPlayer.notes}/>
            </div>
            <div className="col s6">
              <button className="btn waves-effect waves-light" type="submit" name="action">
                Submit<i className="material-icons right">send</i>
              </button>
            </div>
          </div>


        </form>
      </div>
    )
  }
}

//export default withRouter(New); // withrouter allows us to use the push command to forward to the main page
