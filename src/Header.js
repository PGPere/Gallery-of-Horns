import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component {
  render() {
    return (
      <Navbar className="header">
        <Navbar.Brand>
        <h1>Unique Horned Characters</h1>
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;