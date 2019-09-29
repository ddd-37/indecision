class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi, my name is ${this.name}`;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age); // Calls the parent constructor function
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, location) {
    super(name, age);
    this.location = location;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if (this.location) {
      greeting += `and I'm visitng from ${this.location}`;
    }

    return greeting;
  }
}

const me = new Traveller("Devon Deason", 37, "React");
const sid = new Traveller("Sid Pontoon", 12, "Dallas");

console.log("TCL: me", me);
console.log(me.getGreeting());
console.log(sid.getGreeting());
