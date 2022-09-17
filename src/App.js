import classes from "./App.module.css";
import Header from "./Components/Header";
import ContactUs from "./Components/ContactUs/Contactus";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [form, setForm] = useState();
  useEffect(() => {
    setTimeout(() => {
      setForm(
        ReactDOM.createPortal(<ContactUs />, document.getElementById("overlay"))
      );
    }, 5000);
  });
  return (
    <React.Fragment>
      <Header className={classes.nav} />
      <div className={classes.over}>{form}</div>
    </React.Fragment>
  );
}

export default App;
