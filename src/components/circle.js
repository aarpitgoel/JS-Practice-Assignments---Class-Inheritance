// declare class
const Shape = require("./shape.js");
class Circle extends Shape {
  constructor() {
    super();
    this.color = "red";
  }
  calculateArea() {}
}
module.exports = Circle;
