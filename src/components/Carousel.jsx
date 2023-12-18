import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const[index,setindex]=useState(0)
  return (
    <>
        <div className="carousal-container flex">
          <div className="leftArrow arrowDiv flex" onClick={()=>{index!=0?setindex(index-1):setindex(images.length-1)}}>
            <ArrowBackIosIcon />
          </div>
          <h2 className="title">{images[index].title}</h2>
          <img src={images[index].img} alt="" />
          <h4 className="caption">{images[index].subtitle}</h4>
          <div
            className="rightArrow arrowDiv flex"
            onClick={()=>{index==images.length-1?setindex(0):setindex(index+1)}}
          >
            <ArrowForwardIosIcon />
          </div>
        </div>
      </>
  );
}

export default Carousel;
