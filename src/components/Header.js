import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const Header = ({ onSignOut }) => {

  const handleLogOut = (e) => {
    e.preventDefault();
    onSignOut()
  }

  return(
    <React.Fragment>
      <h1>Poll</h1>
      <Link to="/build">Build</Link>
      <br/>
      <Link to="/take">Take</Link>
      <br/>
      <Link to="/login">Login / Register</Link>
      <h2 onClick={handleLogOut}>Logout</h2>
    </React.Fragment>
  );
}

Header.propTypes = {
  onSignOut: PropTypes.func
}

export default Header;