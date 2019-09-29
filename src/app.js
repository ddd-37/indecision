console.log("apfp");

/// JSX JavaScript XML
var app = {
  title: "Indesicon App",
  subTitle: "This is some info"
};

var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subTitle}</p>
    <ol>
      <li>List Item 1</li>
      <li>List Item 2</li>
    </ol>
  </div>
);

var user = {
  name: "Devon Deason",
  age: 37,
  location: "Denver Colorado"
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
