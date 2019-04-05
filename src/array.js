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

methodsToPatch.forEach((method) => {
    const original = arrayProto[method]
    arrayProto[method] = function (...args) {
        const result = original.apply(this, args)
        global.watcher.renderTrigger()
        return result
    }
})