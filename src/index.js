import React from "react";
import ReactDOM from "react-dom";
const name = "Anmol";
const laast = "Pokhriyal";
const number = 9;
ReactDOM.render(
  <div>
    <h1> Hello {name + " " + laast}</h1>
    <p> My Lucky number is {number} </p>
  </div>,
  document.getElementById("root")
);