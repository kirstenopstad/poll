import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return(
    <React.Fragment>
      <h1>Poll</h1>
      <Link to="/build">Build</Link>
      <br/>
      <Link to="/take">Take</Link>
      <h2>Login | Register</h2>
    </React.Fragment>
  );
}
export default Header;