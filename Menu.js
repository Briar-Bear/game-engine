// Create a README file
export default class Menu {
    constructor (position) {
        this.position = position
        this.sideBar = document.createElement('aside')
    }

    display (element) {
        this.sideBar.setAttribute('class', 'sidebar-left')


        element.append(this.sideBar)
    }

    add (icon, text, images) {
        const details = new MenuDetails (icon, text, images)

       details.display(this.sideBar)
    }
}


class MenuDetails {
    /**
     * 
     * @param {*} icon 
     * @param {*} text 
     * @param {string[]} images - an array of image urls
     */
    constructor (icon, text, images) {
        this.icon = icon
        this.text = text
        this.images = images
    }

        display (element) {
        const details = document.createElement('details')
        details.setAttribute('class', 'collapse')

        const summary = document.createElement('summary')
        summary.setAttribute('class', 'collapse-summary')

        const container = document.createElement('div')

        const tileGroup = document.createElement('div')
        tileGroup.setAttribute('class', 'tile-group')

        const btnSmall = document.createElement('span')
        btnSmall.setAttribute('class', 'btn btn-small')

        const showMore = document.createElement('span')
        showMore.setAttribute('class', 'collapse-show')
        showMore.textContent = 'Show More'

        const showLess = document.createElement('span')
        showLess.setAttribute('class', 'collapse-close')
        showLess.textContent = 'Show Less'
        
        const icon = document.createElement('i')
        icon.setAttribute('class', 'fa-solid ' + this.icon)

       for (let i = 0; i < this.images.length; i++) {
        const image = document.createElement('img')
        image.setAttribute('class', 'image')
        image.setAttribute('src', this.images[i]) 
        tileGroup.append(image)
       }
        element.append(details)
        details.append(summary, container)
        container.append(tileGroup)
        btnSmall.append(showMore, showLess)
        summary.append(icon, this.text, btnSmall)
        

    }
}


