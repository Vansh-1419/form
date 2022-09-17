import React, { useState } from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import classes from "./Slider.module.css";
const Slider = () => {
  const arr = [image1, image2, image3];
  const [slide, setSlide] = useState(0);
  const ClickHandler = () => {
    setSlide(slide + 1);
    if (slide == arr.length - 1) {
      setSlide(0);
    }
  };
  const BackHandler = () => {
    setSlide(slide - 1);
    if (slide == -1) {
      setSlide(arr.length - 1);
    }
  };
  return (
    <React.Fragment>
      <div className={classes.main}>
        <img src={arr[slide]} className={classes.img} />
      </div>
      <div className={classes.but}>
        <button onClick={BackHandler}>{"<"} </button>
        <button onClick={ClickHandler} value={slide}>
          {">"}
        </button>
      </div>
    </React.Fragment>
  );
};
export default Slider;
