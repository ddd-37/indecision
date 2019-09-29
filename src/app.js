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

const render = () => {
  var template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
      <p>{app.options.length}</p>
      <button onClick={removeAllClick}>Remove All</button>
      <ol>
        <li>List Item 1</li>
        <li>List Item 2</li>
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
