// async.test.js

const fetchData = () => new Promise((resolve) => setTimeout(() => resolve('data'), 100));

test('fetches data asynchronously', async () => {
  const data = await fetchData();
  expect(data).toBe('datab');
});
