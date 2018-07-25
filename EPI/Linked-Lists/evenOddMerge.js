/*
  Consider a singly linked list whose nodesare numbered starting at 0. Define the evenodd
  merge of the list to be the list consisting of the even-numbered nodes followed
  by the odd-numbered nodes. Write a program that computes the even-odd merge.
*/

// Time: O(n) | Space: O(1) | n = number of nodes
const evenOddMerge = (head) => {
  if (!head) return head
  let oddHead = head
  let evenHead = head.next
  let oddNodes = head
  let evenNodes = head.next
  let previousEvenNode = null
  while (evenNodes && evenNodes.next) {
    oddNodes.next = oddNodes.next.next
    evenNodes.next = evenNodes.next.next
    previousEvenNode = evenNodes
    oddNodes = oddNodes.next
    evenNodes = evenNodes.next
  }
  if (evenNodes) evenNodes.next = oddHead
  else previousEvenNode.next = oddHead
  oddNodes.next = null
  return evenHead
}

module.exports = {evenOddMerge}
