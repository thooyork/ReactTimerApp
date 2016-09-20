var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Time Application</li>
            <li><IndexLink activeClassName="active" to="/">Timer</IndexLink></li>
            <li><Link activeClassName="active" to="/countdown">Countdown</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text"><small>created by <a target="_blank" href="https://twitter.com/@thooyork">thooyork</a></small></li>
          </ul>
        </div>
      </div>
    );
};

module.exports = Navigation;
