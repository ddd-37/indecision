class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision App";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["Thing 1", "Thing 2", "Thing 3"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOptions />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    console.log("bingo");
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  handleRemoveAll() {
    console.log("bingo");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {this.props.options.map(option => {
          return <Option key={option} option={option} />;
        })}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <p>{this.props.option}</p>;
  }
}

class AddOptions extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    if (e.target.elements[0].value) {
      console.log(e.target.elements[0].value);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleAddOption(e)}>
          <p>Add options Component</p>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
