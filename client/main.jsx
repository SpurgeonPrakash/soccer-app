import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
//import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from '../imports/ui/App.jsx';
import Example from '../imports/ui/Example.jsx';
import Lost from '../imports/ui/Lost.jsx'

//injectTapEventPlugin();

Meteor.startup(() => {
  //render(<App />, document.getElementById('render-target')) // renders to main.html
  render((
    <Router>
      <Switch>
        <Route exact path="/" component={App}/> {/*Default path*/}
        <Route path="/example" component={Example}/>
        <Route component={Lost}/>   {/*If neither of those paths*/}
      </Switch>
    </Router>
  ), document.getElementById('render-target'));
});
