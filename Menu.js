// images is an array of strings
// loop through the list of images and create itterations of images, every image needs its markup i.e divs around it

const imageUrls = ['./Game-Assets/Tiles/FieldsTile_32.png', './Game-Assets/Tiles/FieldsTile_38.png', './Game-Assets/Tiles/FieldsTile_06.png']

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
    }

        display (element) {
        const details = document.createElement('details')
        details.setAttribute('class', 'collapse')

        const summary = document.createElement('summary')
        summary.setAttribute('class', 'collapse-summary')
        
        const showMore = document.createElement('span')
        showMore.setAttribute('class', 'collapse-show')
        showMore.textContent = 'Show More'

        const showLess = document.createElement('span')
        showLess.setAttribute('class', 'collapse-hide')
        showLess.textContent = 'Show Less'
        
        const icon = document.createElement('i')
        icon.setAttribute('class', 'fa-solid ' + this.icon)

        const image = document.createElement('img')
        image.setAttribute('class', 'image ' + this.images)

        
        element.append(details)
        details.append(summary)
        summary.append(icon, this.text, showMore, showLess, image)
        

    }
}


