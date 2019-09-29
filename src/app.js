console.log("apfp");

/// JSX JavaScript XML
var template = (
  <div>
    <h1>Indescision App</h1>
    <p>This is some info</p>
    <ol>
      <li>List Item 1</li>
      <li>List Item 2</li>
    </ol>
  </div>
);

var templateTwo = (
  <div>
    <h1>Devon Deason</h1>
    <p>Age: 37</p>
    <p>Location: Denver</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
