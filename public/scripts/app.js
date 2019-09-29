"use strict";

console.log("apfp");

/// JSX JavaScript XML
var app = {
  title: "Indesicon App",
  subTitle: "This is some info",
  options: []
};

var appRoot = document.getElementById("app");

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }

  console.log("form submitted!", option);
  render();
};

var removeAllClick = function removeAllClick() {
  app.options = [];
  render();
};

var onMakeDecision = function onMakeDecision() {
  var option = app.options[Math.floor(Math.random() * app.options.length)];
  console.log("TCL: onMakeDecision -> option", option);
};

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    app.subTitle && React.createElement(
      "p",
      null,
      app.subTitle
    ),
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? "Here are your options" : "No Options"
    ),
    React.createElement(
      "button",
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      "What should I do"
    ),
    React.createElement(
      "button",
      { onClick: removeAllClick },
      "Remove All"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
