"use strict";

var add = function add(a, b) {
  //console.log(arguments);
  return a + b;
};

console.log(add(20, 5, 500));

var user = {
  name: "Devon",
  cities: ["Dallas", "Denver", "Austin"],
  // Below is the ES6 ways of creating methods
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    console.log(this.name);
    console.log(this.cities);
    return this.cities.map(function (city) {
      return _this.name + " has lived in " + city + "!";
    });
  }
};

var multiplier = {
  arr: [2, 5, 7],
  multiplyBy: 10,
  multiply: function multiply() {
    var _this2 = this;

    return this.arr.map(function (num) {
      return num * _this2.multiplyBy;
    });
  }
};

console.log(user.printPlacesLived());
console.log(multiplier.multiply());
