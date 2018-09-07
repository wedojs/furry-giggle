/**
 * @typedef {Object} Singly
 * @property {function} add
 * @property {function} showLinkedList
 */

 exports.Singly = function () {
  let _ = {}
  _.numberOfNodes = 0
  _.head = {
    next: null
  }
  _.ptr = {
    next: null
  }

  /**
   * @function
   * @memberof Singly
   * @param {Object} val - data part of the node
   * @returns {Singly}
   * @description - adds a new node to the end of existing singly linked list
   */
  this.add = (val) => {
    if (_.numberOfNodes === 0) {
      _.head.data = val
      _.ptr = _.head
    } else {
      let tmp = {
        data: val,
        next: null
      }
      _.ptr.next = tmp
      _.ptr = tmp
    }
    _.numberOfNodes += 1
    return this
  }

   /**
   * @function
   * @memberof Singly
   * @param {Object} val - data part of the node
   * @returns {Singly}
   * @description - adds a new node to the beginning of existing singly linked list
   */
  this.addFirst = (val) => {
    if (_.numberOfNodes === 0) {
      _.head.data = val
      _.ptr = _.head
    } else {
      let tmp = {
        data: val,
        next: _.head
      }
      _.head = tmp
    }
    _.numberOfNodes += 1
    return this
  }

  /**
   * @function
   * @memberof Singly
   * @description - displays the singly linked list
   */
  this.showLinkedList = () => {
    console.log('--Display Starts--')
    for (let tmp = _.head; tmp != null; tmp = tmp.next) {
      console.log(tmp.data)
    }
    console.log('--Display Ends--')
  }
}

