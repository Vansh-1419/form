import React from "react";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <nav className={classes.nav}>
      <p>Digi</p>
      <div>
        <span>Home</span>
        <span>About</span>
        <span>Testimonials</span>
      </div>
    </nav>
  );
};
export default Header;
