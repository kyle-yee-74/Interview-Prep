/*
  Write a program that takes the head of a singly linked list and returns null if there
  does not exist a cycle, and the node at the start of the cycle, if a cycle is present. (You
  do not know the length of the list in advance.)
*/

// Time: O(n) | Space: O(1) | n = number of nodes
const cyclicity = (head) => {
  let start = head
  let slowRunner = head
  let fastRunner = head

  while (fastRunner && fastRunner.next) {
    slowRunner = slowRunner.next
    fastRunner = fastRunner.next.next
    if (slowRunner === fastRunner) break
  }
  if (!fastRunner || !fastRunner.next) return null
  while (start !== fastRunner) {
    start = start.next
    fastRunner = fastRunner.next
  }
  return start
}

module.exports = {cyclicity}
