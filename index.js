const LinkedList = require('./LinkedList')
exports.LinkedList = LinkedList

const ll = new LinkedList.Singly()
ll.add(10).add(20).add(30)
.deleteByValue(20).showLinkedList()
.deleteByValue(10).showLinkedList()
.deleteByValue(30)
.add(100).addFirst(200).showLinkedList()
ll.deleteTail()