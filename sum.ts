/**
 * Returns the sum of two numbers.
 */
function sum(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
}

// Keep the non-module browser API used by the HTML and Jest.
const calculatorWindow = window as unknown as {
  sum: typeof sum;
  subtract: typeof subtract;
  multiply: typeof multiply;
  divide: typeof divide;
};
calculatorWindow.sum = sum;
calculatorWindow.subtract = subtract;
calculatorWindow.multiply = multiply;
calculatorWindow.divide = divide;
