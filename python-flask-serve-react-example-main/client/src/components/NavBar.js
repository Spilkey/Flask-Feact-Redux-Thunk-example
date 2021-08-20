import React from "react";
import cx from "classnames";

import { Link, useLocation } from "react-router-dom";

import { withRouter } from "react-router-dom";

const NavbarRoute = withRouter((props) => <NavBar {...props} />);

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {location: this.props.location.pathname};
  }
  componentDidUpdate() {
	if(this.state.location != this.props.location.pathname){
		this.setState( {location: this.props.location.pathname});
	}
  }

  render() {
    return (
      <nav className="top-nav-bar">
        <ul>
          <li className={cx("", this.state.location == "/" && "active")}>
            <div><Link to="/">Home</Link></div>
          </li>
          <li
            className={cx("", this.state.location == "/create-element" && "active")}
          >
            <div><Link to="/create-element">Create Element</Link></div>
          </li>
          <li className={cx("", this.state.location == "/create-theme" && "active")}>
            <div><Link to="/create-theme">Create a Theme</Link></div>
          </li>
          <li
            className={cx("", this.state.location == "/element-explorer" && "active")}
          >
            <div><Link to="/element-explorer">Explore Elements</Link></div>
          </li>
          <li
            className={cx("", this.state.location == "/theme-explorer" && "active")}
          >
            <div><Link to="/theme-explorer">Explore Themes</Link></div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavbarRoute;
