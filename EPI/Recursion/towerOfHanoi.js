/*
  Tower of Hanoi is a mathematical puzzle where we have three rods and n disks.
  The objective of the puzzle is to move the entire stack to another rod,
  obeying the following simple rules:
  1) Only one disk can be moved at a time.
  2) Each move consists of taking the upper disk from
  one of the stacks and placing it on top of another stack
  (i.e., a disk can only be moved if it is the uppermost disk on a stack).
  3) No disk may be placed on top of a smaller disk.
*/

// Time: O(2^n - 1) | Space: O(n)
const towerOfHanoi = (n, fromRod = 0, toRod = 1, auxRod = 2) => {
  if (n < 1) {
    console.log('Not a valid input for n')
  } else if (n === 1) {
    console.log(`Move disk 1 from rod ${fromRod} to rod ${toRod}`)
  } else {
    towerOfHanoi(n - 1, fromRod, auxRod, toRod)
    console.log(`Move disk ${n} from rod ${fromRod} to rod ${toRod}`)
    towerOfHanoi(n - 1, auxRod, toRod, fromRod)
  }
}

module.exports = {towerOfHanoi}
