const SVG = require("./svg");
const { Square } = require("./shapes");

test("must render a 300 x 200 svg element", () => {
  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
  const svg = new SVG();
  expect(svg.render()).toEqual(expectedSvg);
});

test("Choose text", () => {
  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="300" y="250" font-size="120" text-anchor="middle" fill="white">A</text></svg>';
  const svg = new SVG();
  svg.setText("A", "white");
  expect(svg.render()).toEqual(expectedSvg);
});

test("Choose text and color", () => {
  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="300" y="250" font-size="120" text-anchor="middle" fill="white">SVG</text></svg>';
  const svg = new SVG();
  svg.setText("SVG", "white");
  expect(svg.render()).toEqual(expectedSvg);
});

test("show an error if more than 5 characters", () => {
    const expectedError = new Error("Your input must not exceed 5 characters.");
    const svg = new SVG();
    expect(() => svg.setText("Hey", "white")).toThrow(expectedError);
  });
  
  test("Choose shape", () => {
    const expectedSvg =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="180" y="80" width="240" height="240" fill="blue /><text x="300" y="255" font-size="120" text-anchor="middle" fill="white">SVG</text></svg>';
    const svg = new SVG();
    svg.setText("SVG", "white");
    const square = new Square();
    square.setColor("blue");
    svg.setShape(square);
    expect(svg.render()).toEqual(expectedSvg);
  });