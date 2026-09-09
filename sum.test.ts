/** Tests the compiled script, as loaded by the published calculator. */
declare global {
  interface Window {
    sum: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
    divide: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./sum.js");
});

describe("sum (suma)", () => {
  it.each([
    [2, 3, 5],
    [0, 0, 0],
    [0, 5, 5],
    [-2, 3, 1],
    [-2, -3, -5],
  ])("sum(%s, %s) = %s", (a, b, expected) => {
    expect(window.sum(a, b)).toBe(expected);
  });
});

describe("subtract (resta)", () => {
  it.each([
    [5, 3, 2],
    [0, 0, 0],
    [5, 0, 5],
    [0, 5, -5],
    [-2, 3, -5],
    [-2, -3, 1],
  ])("subtract(%s, %s) = %s", (a, b, expected) => {
    expect(window.subtract(a, b)).toBe(expected);
  });
});

describe("multiply (multiplicacion)", () => {
  it.each([
    [2, 3, 6],
    [5, 0, 0],
    [0, 0, 0],
    [-2, 3, -6],
    [-2, -3, 6],
  ])("multiply(%s, %s) = %s", (a, b, expected) => {
    expect(window.multiply(a, b)).toBe(expected);
  });
});

describe("divide (division)", () => {
  it.each([
    [6, 3, 2],
    [0, 3, 0],
    [-6, 3, -2],
    [-6, -3, 2],
    [7, 2, 3.5],
  ])("divide(%s, %s) = %s", (a, b, expected) => {
    expect(window.divide(a, b)).toBe(expected);
  });

  it.each([[5, 0], [0, 0], [5, -0]])(
    "divide(%s, %s) lanza error por division por cero",
    (a, b) => {
      expect(() => window.divide(a, b)).toThrow(
        "No se puede dividir por cero",
      );
    },
  );
});

export {};
