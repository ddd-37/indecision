console.log("apfp");

/// JSX JavaScript XML
var app = {
  title: "Indesicon App",
  subTitle: "This is some info",
  options: []
};

const appRoot = document.getElementById("app");

const onFormSubmit = e => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }

  console.log("form submitted!", option);
  render();
};

const removeAllClick = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const option = app.options[Math.floor(Math.random() * app.options.length)];
  console.log("TCL: onMakeDecision -> option", option);
};

const render = () => {
  var template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do
      </button>
      <button onClick={removeAllClick}>Remove All</button>
      <ol>
        {app.options.map(option => {
          return <li key={option}>{option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
