const add = (a, b) => {
  //console.log(arguments);
  return a + b;
};

console.log(add(20, 5, 500));

const user = {
  name: "Devon",
  cities: ["Dallas", "Denver", "Austin"],
  // Below is the ES6 ways of creating methods
  printPlacesLived() {
    console.log(this.name);
    console.log(this.cities);
    return this.cities.map(city => this.name + " has lived in " + city + "!");
  }
};

const multiplier = {
  arr: [2, 5, 7],
  multiplyBy: 10,
  multiply() {
    return this.arr.map(num => num * this.multiplyBy);
  }
};

console.log(user.printPlacesLived());
console.log(multiplier.multiply());
