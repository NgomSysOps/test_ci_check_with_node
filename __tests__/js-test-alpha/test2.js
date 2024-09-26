// array.test.js

test('adds elements to an array', () => {
    let arr = [];
    arr.push(1);
    arr.push(2);
    expect(arr).toHaveLength(2);
    expect(arr).toEqual([1, 2]);
  });
  
  test('removes elements from an array', () => {
    let arr = [1, 2, 3];
    arr.pop();
    expect(arr).toHaveLength(2);
    expect(arr).toEqual([1, 2]);
  });
  