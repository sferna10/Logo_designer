const { Square, Triangle, Circle } = require("./shapes");

Run | Debug
describe("Circle", () => {
    Run | Debug
    Test("should render svg for a green circle element", () => {
        const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
        const circle = new circle();
        circle.setcolor("green");
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    Run | Debug
    Test("Should accept a fillColor param", () => {
        const expectedSvg = '<circle  cx="150" cy="100" r="80" fill="blue" />';
        const circle = new circle();
        circle.setcolor("blue");
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});

Run|Debug
describe("Triangle", () => {
    Run|Debug
    Test("should render svg for a green polygon element", () => {
        const expectedSvg = '<polygon points "150, 18 244, 182 56, 182" fill="bisque" />';
        const triangle = new Triangle();
        triangle.setcolor("bisque");
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    Run|Debug
    test("should accept a fillColor param", () => {
        const expectedSvg =
        '<polygon points="150, 18 244, 182 56, 182" fill="purple" />';
        const triangle = new Triangle();
        triangle.setColor("purple");
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});
Run|Debug
describe("Square", () => {
    Run|Debug
    test("should render svg for a green polygon element", () => {
        const expectedSvg = '<rect x="90" y="40" width="120" height="120"  fill="pink" />';
        const square = new square();
        square.setcolor("pink");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    Run|Debug
    test("should accept a fillColor param", () => {
        const expectedSvg =
        '<rect x="90" y="40" width="120" height="120" fill="yellow" />';
        const square = new Square();
        square.setColor("white");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});
