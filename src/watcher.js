export default class Watcher {
    constructor (template, data) {
        this._template = this._htmlToElement(template)
        this._data = data
    }

    _htmlToElement (html) {
        const template = document.createElement('template')
        html = html.trim()
        template.innerHTML = html
        return template.content.firstChild
    }
}