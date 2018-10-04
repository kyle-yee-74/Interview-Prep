const { boggleBoard } = require('./solution')

const board = [
  ['y', 'g', 'f', 'y', 'e', 'i'],
  ['c', 'o', 'r', 'p', 'o', 'u'],
  ['j', 'u', 'z', 's', 'e', 'l'],
  ['s', 'y', 'u', 'r', 'h', 'p'],
  ['e', 'a', 'e', 'g', 'n', 'd'],
  ['h', 'e', 'l', 's', 'a', 't']
];

const words = [
  'san', 
  'sana', 
  'at', 
  'vomit', 
  'yours', 
  'help', 
  'end', 
  'been', 
  'bed', 
  'danger', 
  'calm', 
  'ok', 
  'chaos', 
  'complete', 
  'rear', 
  'going', 
  'storm', 
  'face', 
  'epual', 
  'dangerous'
];

const match = (arr1, arr2) => {
  for(let i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
};

test('boggleBoard #1', () => {
  let result = boggleBoard(board, words);
  expect(match(result, ['yours', 'help', 'danger', 'san', 'at'])).toEqual(true);
});
