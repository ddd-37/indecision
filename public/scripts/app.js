"use strict";

console.log("apfp");

/// JSX JavaScript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Indescision App"
  ),
  React.createElement(
    "p",
    null,
    "This is some info"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "List Item 1"
    ),
    React.createElement(
      "li",
      null,
      "List Item 2"
    )
  )
);

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Devon Deason"
  ),
  React.createElement(
    "p",
    null,
    "Age: 37"
  ),
  React.createElement(
    "p",
    null,
    "Location: Denver"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
