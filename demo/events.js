const EventEmmiter = require("events")
const emmiter = new EventEmmiter()

// emmiter.on('anything', (data) => {
//   console.log("ON : anything: ",
//     data)
// })
// emmiter.emit('anything', {
//   a: 1
// })
// emmiter.emit('anything', {
//   b: 2
// })


// setTimeout(() => {
//   emmiter.emit('anything', {
//     a: 1,
//     b: 2
//   })
// }, 500);


class Dispatcher extends EventEmmiter {
  subscribe(eventName, cb) {
    console.log('[subcribe ...]')
    this.on(eventName, cb)
  }

  dispatch(eventName, data) {
    console.log('[Dispathing..]')
    this.emit(eventName, data)
  }
}
const dis = new Dispatcher()
dis.subscribe('aa', data => {
  console.log('aa', data)
})
dis.dispatch('aa', {
  a: 22
})
