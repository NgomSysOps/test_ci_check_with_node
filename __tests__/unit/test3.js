// string.test.js

test('concatenates two strings', () => {
    const str1 = 'Hello';
    const str2 = 'World';
    const result = str1 + ' ' + str2;
    expect(result).toBe('Hello World');
  });
  
  test('splits a string into an array', () => {
    const str = 'Hello World';
    const result = str.split(' ');
    expect(result).toEqual(['Hello', 'World']);
  });
  