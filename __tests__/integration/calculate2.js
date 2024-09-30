// __tests__/integration/mathOperations.test.js

function subtract(a, b) {
    return a - b;
  }
  
  function divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
  }
  
  function calculateDifferenceAndQuotient(a, b, c) {
    const difference = subtract(a, b);
    return divide(difference, c);  // Subtract a and b, then divide the result by c
  }
  
  test('calculates (5 - 2) / 3 to equal 1', () => {
    expect(calculateDifferenceAndQuotient(5, 2, 3)).toBe(1);
  });
  
  test('throws error when dividing by zero', () => {
    expect(() => calculateDifferenceAndQuotient(5, 2, 0)).toThrow("Cannot divide by zero");
  });
  return a - b;
}