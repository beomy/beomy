import Beomy from './beomy'

const beomy = new Beomy({
    el: '#beomy-root',
    template: '<div @click="clickEvent"></div>',
    data () {
        return {
            temp: 1,
            list: []
        }
    },
    methods: {
        clickEvent () {
            console.log('test')
        }
    },
    render () {
        return `
            <div b-click="${this.clickEvent}" b-touchend="${this.clickEvent}">
                <p b-click="${this.clickEvent}">${this.temp}</p>
            </div>
        `
    }
})
