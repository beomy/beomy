import Observer from './observer';

global.Beomy = class Beomy {
    constructor (options) {
        // 전역 설정
        this._el = document.querySelector(options.el)
        this._data = options.data()
        this._methods = options.methods
        this._render = options.render

        // Watcher 설정
        this.observer = new Observer(() => {
            this._rawHtml = this._render()
        })

        // 바인딩
        this._initBind()

        // 초기 랜더링
        this._rawHtml = this._render()
    }

    _initBind () {
        this._dataBind()
        this._methodsBind()
        this._domBind()
    }

    _dataBind () {
        for (const item in this._data) {
            this[item] = this._data[item]
            this.observer.defineReactive(this, item)
            for (const subItem in this[item]) {
                this.observer.defineReactive(this[item], subItem)
            }
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
                const trimValue = value.trim()
                if (this.rawHtml !== trimValue) {
                    this.rawHtml = trimValue
                    this._el.innerHTML = value
                }
            }
        })
    }
}