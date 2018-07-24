/*
  Write a program that takes two cycle-free singly linked lists, and determines if there
  exists a node that is common to both lists.
*/

// Time: O(n) | Space: O(1) | n = number of nodes of the larger linked list
const overlappingLists = (list1, list2) => {
  let listLength1 = countList(list1)
  let listLength2 = countList(list2)

  if (listLength1 > listLength2) {
    let temp = list1
    list1 = list2
    list2 = temp
  }

  for (let i = 0; i < Math.abs(listLength1 - listLength2); ++i) {
    list2 = list2.next
  }

  while (list1 && list2 && list1 !== list2) {
    list1 = list1.next
    list2 = list2.next
  }
  return list1
}

const countList = (list) => {
  let count = 0
  while (list) {
    list = list.next
    ++count
  }
  return count
}

module.exports = {overlappingLists}
