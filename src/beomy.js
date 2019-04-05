import './array'
import Watcher from './watcher'

global.Beomy = class Beomy {
    constructor (options) {
        this._el = document.querySelector(options.el)
        this._data = options.data()
        this._methods = options.methods
        this._render = options.render
        this._initBind()

        // 초기 랜더링
        this._rawHtml = this._render()

        // Watcher 설정
        this.watcher = global.watcher = new Watcher(() => {
            this._rawHtml = this._render()
        })
    }

   _initBind () {
        this._dataBind()
        this._methodsBind()
        this._domBind()
    }

   _dataBind () {
        for (const item in this._data) {
            this[item] = this._data[item]
            Object.defineProperty(this, item, {
                get () {
                    return this._data[item]
                },
                set (value) {
                    this._data[item] = value
                    this.watcher.renderTrigger()
                }
            })
        }
    }

    _methodsBind () {
        for (const func in this._methods) {
            this[func] = this._methods[func]
        }
    }

    _domBind () {
        Object.defineProperty(this, '_rawHtml', {
            get () {
                return this.rawHtml
            },
            set (value) {
                this.rawHtml = value.trim()
                this._el.innerHTML = value
            }
        })
    }
}