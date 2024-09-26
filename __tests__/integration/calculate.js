// __tests__/integration/calculate.test.js
function add(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function calculate(a, b) {
    return multiply(add(a, b), 2); // First adds, then multiplies the result by 2
  }
  
  test('calculates (1 + 2) * 2 to equal 6', () => {
    expect(calculate(1, 2)).toBe(6);
  });
  