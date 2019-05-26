import React, { Component } from 'react';
import { Compass, Heart, User } from 'react-feather';

class NavLinks extends Component {
  state = {
    links: [
      {
        target: '/explore',
        icon: Compass
      },
      {
        target: '/accounts/activity',
        icon: Heart
      }
    ]
  };

  handleClick = e => {
    e.preventDefault();
  };

  handleLogout = e => {
    window.localStorage.removeItem('username');
  };

  renderLink(link) {
    return (
      <a key={link.target} href={link.target} onClick={this.handleClick}>
        <link.icon size="25px" strokeWidth="1" />
      </a>
    );
  }

  render() {
    const links = this.state.links;

    return (
      <>
        {links.map(link => this.renderLink(link))}
        <a key="/logout" href="/" onClick={this.handleLogout}>
          <User size="25px" strokeWidth="1" />
        </a>
      </>
    );
  }
}

export default NavLinks;