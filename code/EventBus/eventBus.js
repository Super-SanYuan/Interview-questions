class EventBus {
  constructor() {
    this.evens = {}
  }
  on(eventName, fn) {
    this.evens[eventName] = this.evens[eventName] || []
    this.evens[eventName].push(fn)
  }
  emit(eventName, data) {
    console.log('emit', this.evens[eventName]);
    this.evens[eventName] && this.evens[eventName].forEach(fn => fn(data))
  }
  off(eventName, fn) {
    this.evens[eventName] = this.evens[eventName] || []
    const index = this.evens[eventName].findIndex(f => f === fn)
    this.evens[eventName].splice(index, 1)
  }
}