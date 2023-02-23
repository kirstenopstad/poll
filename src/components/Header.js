import React from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from 'prop-types'
import Nav from 'react-bootstrap/Nav';
 

const Header = ({ onSignOut }) => {

  const handleLogOut = (e) => {
    e.preventDefault();
    onSignOut()
  }

  return(
    <React.Fragment>
      <Nav className="justify-content-center">
      <Nav.Item>
        <Nav.Link as="li">Poll</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as="li">
          <Link to="/build">Build</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as="li">
          <Link to="/take">Take</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as="li">
          <Link to="/login">Login / Register</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as="li" onClick={handleLogOut}>
          Logout
        </Nav.Link>
      </Nav.Item>

      </Nav>
    </React.Fragment>
  );
}

Header.propTypes = {
  onSignOut: PropTypes.func
}

export default Header;