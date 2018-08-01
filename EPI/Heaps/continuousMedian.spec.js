const {continuousMedian} = require('./continuousMedian')

describe(`You want to compute the running median of a sequence of numbers. The sequence is
  presented to you in a streaming fashion—you cannot back up to read an earlier value,
  and you need to output the median after reading in each new element. For example,
  if the input is [1, 0, 3, 5, 2, 0, 1] the output is [1, 0.5, 1, 2, 2, 1.5, 1].
  Design an algorithm for computing the running median of a sequence.`, function () {
  it('computes the running median of a sequence', function () {
    expect(continuousMedian([])).toEqual([])
    expect(continuousMedian([1])).toEqual([1])
    expect(continuousMedian([1, 2])).toEqual([1, 1.5])
    expect(continuousMedian([1, 1, 1, 1])).toEqual([1, 1, 1, 1])
    expect(continuousMedian([1, 0, 3, 5, 2, 0, 1])).toEqual([1, 0.5, 1, 2, 2, 1.5, 1])
  })
})
