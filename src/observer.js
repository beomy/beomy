export default class Observer {
  constructor (callback) {
    this._callback = callback
    this.observeArray()
  }

  observeArray () {
    const arrayProto = Array.prototype

    const methodsToPatch = [
      'push',
      'pop',
      'shift',
      'unshift',
      'splice',
      'sort',
      'reverse'
    ]

    const _this = this
    methodsToPatch.forEach((method) => {
      const original = arrayProto[method]
      arrayProto[method] = function (...args) {
        const result = original.apply(this, args)
        _this._callback()
        return result
      }
    })
  }

  defineReactive (obj, key) {
    let val = obj[key]
    const _this = this
    Object.defineProperty(obj, key, {
      get: function reactiveGetter () {
        return val
      },
      set: function reactiveSetter (newVal) {
        val = newVal
        _this._callback()
      }
    })
  }
}
