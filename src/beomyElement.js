export default class BeomyElement {
    constructor (rawhtml) {
        this._element = this._htmlToNodeElement(rawhtml)
    }

    get element () {
        return this._element
    }

    _htmlToNodeElement (html) {
        const template = document.createElement('template')
        html = html.trim()
        template.innerHTML = html
        return template.content.firstChild
    }
}