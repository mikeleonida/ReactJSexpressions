import React from "react";
import ReactDOM from "react-dom";

const name = "Mike";
const lName = "Leo";
const luckyNumber = 7;

ReactDOM.render(
  <div>
    <h1>Hello {`${name} ${lName}`}!</h1>
    <h1>Hello {name + " " + lName}!</h1>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
