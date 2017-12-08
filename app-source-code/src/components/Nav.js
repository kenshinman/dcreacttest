import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
  state = {}
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">Weather App</Link>
        </div>

        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav">
            <li className=""><Link to="/">Home</Link></li>
            <li><Link to="/sunrise-set">Sunset / Sunrise</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;