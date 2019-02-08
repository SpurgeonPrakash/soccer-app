import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Players } from '../api/players';

class New extends Component {
  submitPlayer(event) {
    event.preventDefault();

    Players.insert({
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
    });

    console.log("Success player submitted!");

    this.props.history.push('/');
  }

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
          <h3>Add a new player</h3>

          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Name" ref="name" type="text" className="validate"/>
            </div>
            <div className="input-field col s6">
              <input placeholder="Team" ref="team" type="text" className="validate"/>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <h5>Passing</h5>
              <select className="browser-default" ref="passing">
                <option value="0">0 - No skills</option>
                <option value="0">1 - Needs improvement</option>
                <option value="0">2 - Decent skill</option>
                <option value="0">3 - Beast mode</option>
              </select>
            </div>
            <div className="col s6">
              <h5>Dribbling</h5>
              <select className="browser-default" ref="dribbling">
                <option value="0">0 - No skills</option>
                <option value="0">1 - Needs improvement</option>
                <option value="0">2 - Decent skill</option>
                <option value="0">3 - Beast mode</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <h5>Shooting</h5>
              <select className="browser-default" ref="shooting">
                <option value="0">0 - No skills</option>
                <option value="0">1 - Needs improvement</option>
                <option value="0">2 - Decent skill</option>
                <option value="0">3 - Beast mode</option>
              </select>
            </div>
            <div className="col s6">
              <h5>Marking</h5>
              <select className="browser-default" ref="marking">
                <option value="0">0 - No skills</option>
                <option value="0">1 - Needs improvement</option>
                <option value="0">2 - Decent skill</option>
                <option value="0">3 - Beast mode</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <h5>Tackling</h5>
              <select className="browser-default" ref="tackling">
                <option value="0">0 - No skills</option>
                <option value="0">1 - Needs improvement</option>
                <option value="0">2 - Decent skill</option>
                <option value="0">3 - Beast mode</option>
              </select>
            </div>
            <div className="col s6">
              <h5>Acceleration</h5>
              <select className="browser-default" ref="acceleration">
                <option value="0">0 - No skills</option>
                <option value="0">1 - Needs improvement</option>
                <option value="0">2 - Decent skill</option>
                <option value="0">3 - Beast mode</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <h5>Top Speed</h5>
              <select className="browser-default" ref="topSpeed">
                <option value="0">0 - No skills</option>
                <option value="0">1 - Needs improvement</option>
                <option value="0">2 - Decent skill</option>
                <option value="0">3 - Beast mode</option>
              </select>
            </div>
            <div className="col s6">
              <h5>Soccer IQ</h5>
              <select className="browser-default" ref="soccerIQ">
                <option value="0">0 - No skills</option>
                <option value="0">1 - Needs improvement</option>
                <option value="0">2 - Decent skill</option>
                <option value="0">3 - Beast mode</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <textarea placeholder="Notes" ref="notes" className="materialize-textarea"/>
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

export default withRouter(New); // withrouter allows us to use the push command to forward to the main page
