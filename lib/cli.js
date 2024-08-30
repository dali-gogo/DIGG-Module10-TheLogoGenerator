const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Square, Triangle } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
    run() {
      return inquirer
        .prompt([
          {
            name: "text",
            type: "input",
            message:
              "Write your text (no more than 3 characters)",
            validate: (text) =>
              text.length <= 3 ||
              "Your text must not have more than 3 characters",
          },
          {
            name: "textColor",
            type: "input",
            message: "Enter a color for your text",
          },
          {
            name: "shapeColor",
            type: "input",
            message: "Enter a color for your shape",
          },
          {
            name: "shapeType",
            type: "list",
            message: "Select a shape for your logo",
            choices: ["circle", "square", "triangle"],
          },

        ])
        .then(({ text, textColor, shapeColor, shapeType }) => {
          let shape;
          switch (shapeType) {
            case "circle":
              shape = new Circle();
              break;
  
            case "square":
              shape = new Square();
              break;
  
            case "triangle":
            default:
              shape = new Triangle();
              break;
          }
          
          shape.setColor(shapeColor);
  
          const svg = new SVG();
          svg.setText(text, textColor);
          svg.setShape(shape);
          return writeFile("logo.svg", svg.render());
        })
        .then(() => {
          console.log("logo.svg");
        })
        .catch((error) => {
          console.log(error);
          console.log("Error detected.");
        });
    }
  }
  
  module.exports = CLI;