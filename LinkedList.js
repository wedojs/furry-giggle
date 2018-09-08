/**
 * @typedef {Object} Singly
 * @property {function} add
 * @property {function} showLinkedList
 */

 exports.Singly = function () {
  let _ = {}
  _.numberOfNodes = 0
  /**
   * @function
   * @memberof Singly
   * @param {Object} val - data part of the node
   * @returns {Singly}
   * @description - adds a new node to the end of existing singly linked list
   */
  this.add = (val) => {
    /**
     * Initialize head and ptr
     */
    if (_.numberOfNodes === 0) {
      _.head = {
        data: val,
        next: null
      }
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
    /**
     * Initialize head and ptr
     */
    if (_.numberOfNodes === 0) {
      _.head = {
        data: val,
        next: null
      }
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
   * @returns {Singly}
   * @description - deletes the head node
   */
  this.deleteHead = () => {
    _.head = _.head.next
    _.numberOfNodes = _.numberOfNodes > 0 ? _.numberOfNodes - 1: _.numberOfNodes
    return this
  }

  /**
   * @function
   * @memberof Singly
   * @returns {Singly}
   * @description - deletes the tail node
   */
  this.deleteTail = () => {
    if(_.numberOfNodes === 1) {
      this.deleteHead()
    }else {
      /**
       * Start traversing from head.
       * Termination condition
       * if((node a)|data, next| -> (node b)|data, next| -> null)
       * then set (node a)|data, next|.next = null
       */
      let tmp;
      for(tmp = _.head; tmp.next.next != null; tmp = tmp.next);

      tmp.next = null
      /**
       * Update ptr
       */
      _.ptr = tmp
    }
    _.numberOfNodes = _.numberOfNodes > 0 ? _.numberOfNodes - 1: _.numberOfNodes
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
    return this
  }
}

