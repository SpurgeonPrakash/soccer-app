import React, { Component } from 'react';

export default class New extends Component {
  render() {
    return (
      <div className="row">
        <form className="col s12">
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
