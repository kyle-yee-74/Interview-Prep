const {reverseStringWithMethods, reverseStringIteratively, reverseStringRecursively} = require('./reverseString')

test('Reverse Aatrox to xortaA', () => {
  expect(reverseStringWithMethods('Aatrox')).toEqual('xortaA')
})

test('Reverse Ahri to irhA', () => {
  expect(reverseStringIteratively('Ahri')).toEqual('irhA')
})

test('Reverse Akali to ilakA', () => {
  expect(reverseStringRecursively('Akali')).toEqual('ilakA')
})
