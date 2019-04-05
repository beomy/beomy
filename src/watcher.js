export default class Watcher {
    constructor (callback) {
        this._callback = callback
    }

    renderTrigger () {
        this._callback()
    }
}