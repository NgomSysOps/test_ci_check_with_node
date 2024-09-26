// object.test.js

test('has the correct object properties', () => {
    const person = { name: 'John', age: 30 };
    expect(person).toHaveProperty('name', 'John');
    expect(person).toHaveProperty('age', 30);
  });
  
  test('modifies an object property', () => {
    const person = { name: 'John', age: 30 };
    person.age = 31;
    expect(person.age).toBe(31);
  });
  