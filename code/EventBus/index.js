const event = new EventBus()

function fn() {
  console.log('fn click')
}
function fn1() {
  console.log('fn1 click')
}
event.on('click', fn)
event.on('click', fn1)

event.emit('click', 'Hi')
event.off('click', fn)