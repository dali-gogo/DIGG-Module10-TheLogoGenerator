class Shape {
    constructor() {
      this.color = "";
    }
    setColor(color) {
      this.color = color;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="300" cy="200" r="160" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="180" y="80" width="240" height="240" fill="${this.color}" />`;
    }
  }

  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  module.exports = {Circle, Square, Triangle};