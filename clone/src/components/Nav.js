import React, { Component } from "react";

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      openMenu: false,
    };

    this.handleMenuOpen = this.handleMenuOpen.bind(this);
  }

  handleMenuOpen() {
    this.setState({ openMenu: !this.state.openMenu });
  }

  render() {
    return (
      <div className="nav">
        <div className="header-container">
          <img
            className="logo"
            alt="logo"
            src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"
          />
          <button onClick={() => this.handleMenuOpen()} className="menu-button">
            MENU &#9776;
          </button>
        </div>
        <ul id="links" className={this.state.openMenu ? "visible-links" : ""}>
          <li>
            <a>SERVICES</a>
          </li>
          <li>
            <a>PORTFOLIO</a>
          </li>
          <li>
            <a>ABOUT</a>
          </li>
          <li>
            <a>TEAM</a>
          </li>
          <li>
            <a>CONTACT</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
