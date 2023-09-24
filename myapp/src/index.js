import React from "react";
import  ReactDOM  from "react-dom";

const name = "Yash";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>Hello {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
