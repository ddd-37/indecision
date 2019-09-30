let count = 0;

const addOne = () => {
  count++;
  console.log("addOne: " + count);
  renderCounterApp();
};

const minusOne = () => {
  count--;
  console.log("minusOne: " + count);
  renderCounterApp();
};

const reset = () => {
  count = 0;
  console.log("reset: " + count);
  renderCounterApp();
};

const renderCounterApp = () => {
  let templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne} className="button">
        +1
      </button>
      <button onClick={minusOne} className="button">
        -1
      </button>
      <button onClick={reset} className="button">
        Reset
      </button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
