export default class Tile {
    constructor(y, x, imageURL, type, position = { top: 0, right: 0, bottom: 0, left: 0}) {       
        this.y = y,
        this.x = x,
        this.imageURL = imageURL
        this.type = type
        this.position = position

    }
    display (cell) {
        const baseTileHeight = 32
        const baseTileWidth = 32
        const floorTile = document.createElement('img')
        floorTile.src = this.imageURL
        

        if (this.type === 'base') {
            floorTile.classList.add('base')

            return cell.append(floorTile) 
        }
        const tileObject = document.createElement('img')
        tileObject.classList.add('tileObject') 
        tileObject.src = this.imageURL           
        tileObject.style.zIndex = this.zIndex
        tileObject.style.top = this.position.top
        tileObject.style.right = this.position.right
        tileObject.style.bottom = this.position.bottom
        tileObject.style.left = this.position.left
        cell.append(tileObject)

        tileObject.onload = () => {
            console.log(tileObject.height % baseTileHeight)
            console.log(tileObject.width % baseTileWidth)

            tileObject.style.height = (tileObject.naturalHeight % baseTileHeight) + '%'
            tileObject.style.width = (tileObject.naturalWidth % baseTileWidth) + '%'
        }
    }
}