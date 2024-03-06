// add more tiles that layer and adjust their height and width
import Map from './Map'
import './style.css'
import Menu from './Menu'

const map = new Map (3,3)

const imageSrc = ['./Game-Assets/Tiles/FieldsTile_32.png','./Game-Assets/Tiles/FieldsTile_38.png','./Game-Assets/Tiles/FieldsTile_06.png']
const zoneOneData = {
    start: [
    {
        y: 0,
        x: 0,
        imageUrl: './Game-Assets/Tiles/FieldsTile_38.png',
        type: 'base'              
    },
    {
        y: 0,
        x: 0,
        imageUrl: './Game-Assets/Objects/Decor/Tree2.png'  ,
        type: 'tileObject',
        position: {right: '10%'}             
    },
    {
        y: 0,
        x: 1,
        imageUrl: './Game-Assets/Tiles/FieldsTile_38.png',
        type: 'base' 

    },
    {
        y: 0,
        x: 2,
        imageUrl: './Game-Assets/Tiles/FieldsTile_38.png',
        type: 'base' 
    },
    {
        y: 1,
        x: 0,
        imageUrl: './Game-Assets/Tiles/FieldsTile_38.png',
        type: 'base' 
    },
    {
        y: 1,
        x: 1,
        imageUrl: './Game-Assets/Tiles/FieldsTile_06.png',
        type: 'base' 
    },
    {
        y: 1,
        x: 2,
        imageUrl: './Game-Assets/Tiles/FieldsTile_39.png',
        type: 'base' 
    },
    {
        y: 2,
        x: 0,
        imageUrl: './Game-Assets/Tiles/FieldsTile_38.png',
        type: 'base' 
    },
    {
        y: 2,
        x: 0,
        imageUrl: './Game-Assets/Objects/Stone/9.png',
        type: 'tileObject' 
    },
    {
        y: 2,
        x: 1,
        imageUrl: './Game-Assets/Tiles/FieldsTile_32.png',
        type: 'base' 
    },
    {
        y: 2,
        x: 2,
        imageUrl: './Game-Assets/Tiles/FieldsTile_38.png',
        type: 'base' 
    },
    {
        y: 2,
        x: 2,
        imageUrl: './Game-Assets/Objects/Camp/5.png',
        type: 'tileObject' 
    }
    ]
}

for (let i = 0; i < zoneOneData.start.length; i++) {   
    map.add(zoneOneData.start[i].y, zoneOneData.start[i].x, zoneOneData.start[i].imageUrl, zoneOneData.start[i].type, zoneOneData.start[i].position)   
}

const container = document.createElement('div')
container.setAttribute('class', 'container')
document.body.append(container)
const menu = new Menu()
menu.display(container)
menu.add('fa-house', 'UI', imageSrc)
map.display(container)


// map.timer(60)

console.table(map.grid)




