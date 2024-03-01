export default class Menu {
    constructor (menu) {
        this.menu = menu
    }

    display (element) {
        this.menu = document.createElement('aside')

        element.append(this.menu)
    }

    add () {
        const details = new MenuDetails ('fa-house', 'UI')

        this.menu.push(details)
    }
}

// append menudetailitem to menu


class MenuDetails {
    constructor (icon, text) {
        this.icon = icon
        this.text = text
    }

        display (element) {
        const details = document.createElement('details')
        details.setAttribute('class', 'collapse')

        const summary = document.createElement('summary')
        summary.setAttribute('class', 'collapse-summary')
        
        const showMore = document.createElement('span')
        showMore.setAttribute('class', 'collapse-show')

        const showLess = document.createElement('span')
        showLess.setAttribute('class', 'collapse-hide')
        
        const icon = document.createElement('i')
        icon.setAttribute('class', 'fa-solid ' + this.icon)

        this.icon.append(icon)
        element.append(this.icon, this.text)
    }
}


