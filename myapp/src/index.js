import React from "react";
import  ReactDOM  from "react-dom";
import "./styles.css";

const name = "Yash";
const currentDate = new Date();
const year = currentDate.getFullYear();

const img = "https://img.freepik.com/premium-photo/abstract-rainbow-colorful-bright-feather-closeup-up-macro-view-background-plumage-texture-with-dew-drops_753134-644.jpg";
const img1 = "https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg";

ReactDOM.render(
  <div className="heading">
    <h1>Hello {name}</h1>
    <li>Copyright {year}</li>
    <div>
      <img className="hd_img" src={img}/>
      <img className="hd_img" src={img1}/>
      <img className="hd_img" src={img1}/>
    </div>
  </div>,
  document.getElementById("root")
);
