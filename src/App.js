import Slider from "./Components/Slider/Slider";
import Header from "./Components/Header";
import ContactUs from "./Components/ContactUs/Contactus";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

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
      <Header />
      <Slider />
      <div>{form}</div>
    </React.Fragment>
  );
}

export default App;
