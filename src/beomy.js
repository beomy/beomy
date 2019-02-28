global.Beomy = class Beomy {
    constructor (options) {
        this._el = document.querySelector(options.el)
        this._data = options.data()
        this._methods = options.methods
        this._render = options.render
        this._initBind()
        this._rawHtml = this._render().trim()
    }

   _initBind () {
        this._dataBind()
        this._methodsBind()
        this._renderBind()
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
                    this._rawHtml = this._render()
                }
            })
        }
    }

    _methodsBind () {
        for (const func in this._methods) {
            this[func] = this._methods[func]
        }
    }

    _renderBind () {
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