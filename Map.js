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
    constructor (row, column) {
      
        this.grid = []
        for (let i = 0; i < row; i++) {
            const row = []
           this.grid.push(row)

           for (let i = 0; i < column; i++) {
            row.push([])
            
           }
        }

        this.columns = {}

    }
    /**
     * Adds the piece to the board.
     * @param {number} x - The X axis. 
     * @param {number} y - The Y axis.
     * @param {string} piece - The item that sits on the board.
     */
    add (y, x, imageURL, zIndex, type, position) {
        const tile = new Tile (y, x, imageURL, zIndex, type, position)
        this.grid[y][x].push(tile)
        
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
     */
    display (element) {
        const map = document.createElement('div')
        map.classList.add('map')
        
        
        for (let i = 0; i < this.grid.length; i++) {
            const row = document.createElement('div')
            row.classList.add('row')
            map.append(row)

            for (let j = 0; j < this.grid[i].length; j++) {
                const column = document.createElement('div')
                console.log(column)
                this.columns[i.toString() + j.toString()] = column
                column.classList.add('column')      
                row.append(column)
                
                for (let k = 0; k < this.grid[i][j].length; k++) {
                    const tile = this.grid[i][j][k]                   
                    tile.display(column)               
                }
                
            }
            
        }
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
    edit () {
        for (let y = 0; y < this.grid.length; y++) {
            const row = this.grid[y];

            for (let x = 0; x < row.length; x++) {
                const column = this.columns[y.toString() + x.toString()];

                // give column a click event
                // edit has to have a call back and you pass x and y to the callback
            }
            
        }
        console.log(this.columns)
    }
}