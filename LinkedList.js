exports.Singly = function(){
      let _ = {}
      _.numberOfNodes = 0
      _.head = {
        next: null
      }
      _.ptr = {
        next: null
      }
      _.add = (val) => {
        if(_.numberOfNodes === 0) {
          _.head.data = val
          _.ptr = _.head
          _.numberOfNodes += 1
        }else {
          let tmp = {
            data: val,
            next: null
          }
          _.ptr.next = tmp
          _.ptr = tmp
        }
      }

      _.showLinkedList = () => {
          console.log('--Display Starts--')
          for(let tmp = _.head; tmp != null; tmp = tmp.next) {
            console.log(tmp.data)
          }
          console.log('--Display Ends--')
      }
      return _
  }
