const {Hashtable} = require('./hashTable')

describe('A binary search bst', function () {
  let hashtable

  beforeEach(function () {
    hashtable = new Hashtable(50)
  })

  it('has methods', function () {
    expect(typeof hashtable.set).toBe('function')
    expect(typeof hashtable.get).toBe('function')
    expect(typeof hashtable.hasKey).toBe('function')
  })

  it('has 50 buckets', function () {
    expect(hashtable.buckets).toBe(50)
  })

  it('should `hash` correctly', function () {
    expect(hashtable.hashFunc('Aurelion Sol')).toBe(15)
  })

  it('should store and retrieve values by key', function () {
    hashtable.set('Annie', 'child pyromancer')
    hashtable.set('Ashe', 'frost archer')
    hashtable.set('Jhin', 4)
    expect(hashtable.get('Annie')).toBe('child pyromancer')
    expect(hashtable.get('Ashe')).toBe('frost archer')
    expect(hashtable.get('Jhin')).toBe(4)
  })

  it('should throw a TypeError when given a non-string key', function () {
    expect(function () { hashtable.set(134, 'check') }).toThrowError(TypeError, 'Keys must be strings')
  })

  it('should handle collisions', function () {
    hashtable.set('Buu', 'Majin')
    hashtable.set('uuB', 'Non-Majin')
    expect(hashtable.get('Buu')).toBe('Majin')
    expect(hashtable.get('uuB')).toBe('Non-Majin')
  })

  it('should overwrite keys', function () {
    hashtable.set('Buu', 'Majin')
    hashtable.set('Buu', 'Kid')
    expect(hashtable.get('Buu')).toBe('Kid')
  })

  it('should return a bool for hasKey', function () {
    hashtable.set('Bard', 'God')
    expect(hashtable.hasKey('Bard')).toBe(true)
  })
})
