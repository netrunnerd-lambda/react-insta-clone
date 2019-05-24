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
      },
      {
        target: '/user',
        icon: User
      }
    ]
  };

  handleClick = e => {
    e.preventDefault();
  };

  render() {
    const links = this.state.links;

    return (
      <>
        {links.map(link => <a href={link.target} onClick={this.handleClick}>
                             <link.icon size="25px" strokeWidth="1" />
                           </a>)}
      </>
    );
  }
}

export default NavLinks;