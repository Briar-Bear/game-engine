
export default class Menu {
    /**
     * @class
     * @param {string} position - Positions elements on the map.
     */
    constructor (position) {
        this.position = position
        // Creates the aside HTMLElement.
        this.sideBar = document.createElement('aside')
    }

    /**
     * 
     * @param {HTMLElement} element - An element used to attach the sidebar. 
     */
    display (element) {
        this.sideBar.setAttribute('class', 'sidebar-left')

        // Appends sidebar to the element.
        element.append(this.sideBar)
    }

    /**
     * 
     * @param {string} icon - An Icon that can be attached to the menu.
     * @param {string} text Text/Titles for the menu.
     * @param {string} images - Images that can be added to the menu.
     * @param {object} map - An object that the menu can be appended to.
     */
    add (icon, text, images, map) {
        // Creates a new MenuDetails class.
        const details = new MenuDetails (icon, text, images)

        // Displays the sidebar and map onto details.
       details.display(this.sideBar, map)
    }
}


class MenuDetails {
    /**
     * @class
     * @param {string} icon - Adds an Icon to the menu.
     * @param {string} text - Adds text to the menu.
     * @param {string[]} images - An array of Image urls.
     */
    constructor (icon, text, images) {
        this.icon = icon
        this.text = text
        this.images = images
    }
        /**
         * 
         * @param {HTMLElement} element - An element used to display Items to the menu.
         * @param {object} map - An object that the menuDetails can be appended to.
         */
        display (element, map) {
        // Creates the details HTMLElement.
        const details = document.createElement('details')
        // Adds the collapse class to the HTMLElement.
        details.setAttribute('class', 'collapse')
        
        // Creates the summary HTMLElement.
        const summary = document.createElement('summary')
        // Adds the collapse-summary class to the HTMLElement.
        summary.setAttribute('class', 'collapse-summary')
        
        // Creates the div HTMLElement.
        const container = document.createElement('div')
        
        // Creates the div HTMLElement.
        const tileGroup = document.createElement('div')
        // Adds the tile-group class to the HTMLElement.
        tileGroup.setAttribute('class', 'tile-group')
        
        // Creates the span HTMLElement.
        const btnSmall = document.createElement('span')
        // Adds the btn and btn-small class to the HTMLElement.
        btnSmall.setAttribute('class', 'btn btn-small')
        
        // Creates the span HTMLElement.
        const showMore = document.createElement('span')
        // Adds the collapse-show class to the HTMLElement.
        showMore.setAttribute('class', 'collapse-show')
        // Adds text to the showMore btn.
        showMore.textContent = 'Show More'
        
        // Creates the span HTMLElement.
        const showLess = document.createElement('span')
        // Adds the collapse-close class to the HTMLElement.
        showLess.setAttribute('class', 'collapse-close')
        // Adds text to the showLess btn.
        showLess.textContent = 'Show Less'
        
        // Creates the Icon HTMLElement.
        const icon = document.createElement('i')
        // Adds the fa-solid class + the chosen Icon to the HTMLElement (using fontawesome Icons).
        icon.setAttribute('class', 'fa-solid ' + this.icon)
        
       for (let i = 0; i < this.images.length; i++) {
        // Creates the img HTMLElement.
        const imageElement = document.createElement('img')
        const image = this.images[i]
        // Adds the image class to the HTMLElement.
        imageElement.setAttribute('class', 'image')
        // Adds the src class + the image.src[{}] from main.js to the HTMLElement.
        imageElement.setAttribute('src', image.src) 

        // An eventlistener that adds x and y coords to the map and the image.type and image.src.
        imageElement.addEventListener('click', () => {
            map.add(
                map.selectedColumnPosition.y,
                map.selectedColumnPosition.x,
                image.src,
                image.type
            )
        })

        // Appends images to tileGroup.
        tileGroup.append(imageElement)
       }

       // Various different appends.
        element.append(details)
        details.append(summary, container)
        container.append(tileGroup)
        btnSmall.append(showMore, showLess)
        summary.append(icon, this.text, btnSmall)
    }
}


