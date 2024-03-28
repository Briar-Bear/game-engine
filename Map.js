import Tile from './Tile.js'

/**
 * Creates a board for games.
 * @class
 */
export default class Map {

    /**
     * The constructor creates the board.
     * @param {number} row - Number of rows on the board.
     * @param {number} column - Number of columns on the board.
     */
    constructor (element, row, column) {
      
        this.grid = []
        for (let i = 0; i < row; i++) {
            const row = []
           this.grid.push(row)

           for (let i = 0; i < column; i++) {
            row.push([])
            
           }
        }

        // store column elements
        this.columns = {}

        // store column handlers
        this.columnHandlers = {}

        // Currently selected column positions
        this.selectedColumnPosition = {
            y: 0,
            x: 0
        }

        // this.display(element)
    }

    /**
     * Adds the piece to the board.
     * @param {number} x - The X axis. 
     * @param {number} y - The Y axis.
     * @param {string} piece - The item that sits on the board.
     */
    add (y, x, imageURL, type, zIndex) {
        const tile = new Tile (y, x, imageURL, type, zIndex)

        // Adds tile to grid
        this.grid[y][x].push(tile)

        const column = this.columns[y.toString() + x.toString()]

       tile.display(column)
        
    }
    /**
     * Removes the piece from the board.
     * @param {number} x - The X axis. 
     * @param {number} y - The Y axis.
     * @param {string} piece - The item that sits on the board.
     */
    remove (y, x, piece) {
        const cell = this.grid[y][x]
        
        for (let i = 0; i < cell.length; i++) {
            const item = cell[i]

            if (item === piece) {
                return cell.splice(i, 1)
            }
            
        }
    }
    /**
     * Replaces the piece on the board.
     * @param {number} x - The X axis. 
     * @param {number} y - The Y axis.
     * @param {string} piece - The item that sits on the board.
     */
    replace (y, x, piece) {
        const cell = this.grid[y][x]
        for (let i = 0; i < cell.length; i++) {
            const item = cell[i]

            if (item === cell[i]) {
                return cell.splice(i, 1, piece)
            }
            
        }
    }
    /**
     * Displays the piece on the board.
     * @param {HTMLElement} - Element used to attach map
     */
    display (element) {
        const map = document.createElement('div')

        // style map element
        map.classList.add('map')
          
        for (let y = 0; y < this.grid.length; y++) {
            const row = document.createElement('div')

            // style row
            row.classList.add('row')

            // add row to map
            map.append(row)

            for (let x = 0; x < this.grid.length; x++) {
                const column = document.createElement('div')
                
                // storing column element globally
                this.columns[y.toString() + x.toString()] = column

                // style column
                column.classList.add('column')    
                
                // add column to row
                row.append(column)
                
            }
            
        }

        // add map to element
        element.append(map)
    }  
    /**
     * Sets a timer.
     * @param {number} count - The set time.
     */
    timer (count) {
        this.count = count
        /**
         * Counts down from the set time.
         * @param {callback} - Sets the rate in which the timer counts down.
         */
        const countdown = setInterval(() => {
            count --
            console.log(count)
            if (count === 0) {
                clearInterval(countdown)
                console.log("Time's up!")
            }
        }, 1000)
    }
    /**
     * Edits items on the map.
     */
    edit () {
        for (let y = 0; y < this.grid.length; y++) {
            const row = this.grid[y];

            for (let x = 0; x < row.length; x++) {
                // create column id
                const id = y.toString() + x.toString();
                // get column element
                const column = this.columns[id]
                // create click handler
                const handler = () => {
                    this.previousColumnPosition = this.selectedColumnPosition
                    this.selectedColumnPosition = { y, x }
                    column.style.border = '1px solid black'

                    const prevColumn = this.columns
                    [
                        this.previousColumnPosition.y.toString() +
                        this.previousColumnPosition.x.toString()
                    ]
                    prevColumn.style.border = 'none'
                }

                // store handlers
                this.columnHandlers[id] = handler
                // event listener that targets tiles and border style
                column.addEventListener('click', handler)
            }
        }
        console.log(this.columns)
    }
    /**
     * Disables edits made on the map.
     */
    disableEdit () {
        for (let y = 0; y < this.grid.length; y++) {
            const row = this.grid[y];

            for (let x = 0; x < row.length; x++) {
                const id = y.toString() + x.toString();
                const column = this.columns[id]

                column.removeEventListener('click', this.columnHandlers[id])
            }
        }
    }
}