const { Square, Triangle, Circle } = require("./shapes");

describe("Circle", () => {
  test("should render svg for a blue circle element", () => {
    const expectedSvg = '<circle cx="75" cy="50" r="40" fill="blue" />';
    const circle = new Circle();
    circle.setColor("blue");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg = '<circle cx="75" cy="50" r="40" fill="blue" />';
    const circle = new Circle();
    circle.setColor("blue");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Triangle", () => {
  test("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="green" />';
    const triangle = new Triangle();
    triangle.setColor("green");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="green" />';
    const triangle = new Triangle();
    triangle.setColor("green");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Square", () => {
  test("should render svg for a red polygon element", () => {
    const expectedSvg =
      '<rect x="45" y="20" width="60" height="60" fill="red" />';
    const square = new Square();
    square.setColor("red");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg =
      '<rect x="45" y="20" width="60" height="60" fill="red" />';
    const square = new Square();
    square.setColor("red");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});  