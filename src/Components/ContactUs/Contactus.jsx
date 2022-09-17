import React, { usestate } from "react";
import classes from "./Contactus.module.css";
const ContactUs = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div>
        <label htmlFor="FirstName:">FirstName:</label>
        <input type="text" id="FirstName" />
      </div>
      <div>
        <label htmlFor="LastName:">LastName:</label>
        <input type="text" id="LastName" />
      </div>
      <div>
        <label htmlFor="LastName:">Email:</label>
        <input type="text" id="Email" />
      </div>
      <button type="Submit">Submit</button>
    </form>
  );
};
export default ContactUs;
