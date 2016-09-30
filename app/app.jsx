var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');


//Load foundation CSS FRamework
//require('style!css!foundation-sites/dist/foundation.min.css');
//wird uber sassLoader geladen

$(document).foundation();

//App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Timer}></IndexRoute>
        <Route path="/countdown" component={Countdown}></Route>
      </Route>
  </Router>,
  document.getElementById('app')
);
