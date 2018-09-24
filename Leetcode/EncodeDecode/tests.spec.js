const { TinyURLCreator1, TinyURLCreator2 } = require('./solution')

const test1 = new TinyURLCreator1();
const test2 = new TinyURLCreator2();

test('Encode and Decode TinyURL #1', () => {
  expect(test1.encode('https://github.com/ShifuYee')).toEqual('http://tinyurl.com/0');
  expect(test1.decode('http://tinyurl.com/0')).toEqual('https://github.com/ShifuYee');
});

test('Encode and Decode TinyURL #2', () => {
  let encodedURL1 = test2.encode('https://github.com/ShifuYee1');
  let encodedURL2 = test2.encode('https://github.com/ShifuYee2');
  expect(encodedURL1.length).toEqual(25);
  expect(encodedURL2.length).toEqual(25);
  expect(test2.decode(encodedURL1)).toEqual('https://github.com/ShifuYee1');
  expect(test2.decode(encodedURL2)).toEqual('https://github.com/ShifuYee2');
});
