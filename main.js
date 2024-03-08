// add more tiles that layer and adjust their height and width
import Map from './Map'
import './style.css'
import Menu from './Menu'

const map = new Map (3,3)

const imageSrc = [
    './Game-Assets/Tiles/FieldsTile_01.png',
    './Game-Assets/Tiles/FieldsTile_02.png',
    './Game-Assets/Tiles/FieldsTile_03.png',
    './Game-Assets/Tiles/FieldsTile_04.png',
    './Game-Assets/Tiles/FieldsTile_05.png',
    './Game-Assets/Tiles/FieldsTile_06.png',
    './Game-Assets/Tiles/FieldsTile_07.png',
    './Game-Assets/Tiles/FieldsTile_08.png',
    './Game-Assets/Tiles/FieldsTile_09.png',
    './Game-Assets/Tiles/FieldsTile_10.png',
    './Game-Assets/Tiles/FieldsTile_11.png',
    './Game-Assets/Tiles/FieldsTile_12.png',
    './Game-Assets/Tiles/FieldsTile_13.png',
    './Game-Assets/Tiles/FieldsTile_14.png',
    './Game-Assets/Tiles/FieldsTile_15.png',
    './Game-Assets/Tiles/FieldsTile_16.png',
    './Game-Assets/Tiles/FieldsTile_17.png',
    './Game-Assets/Tiles/FieldsTile_18.png',
    './Game-Assets/Tiles/FieldsTile_19.png',
    './Game-Assets/Tiles/FieldsTile_20.png',
    './Game-Assets/Tiles/FieldsTile_21.png',
    './Game-Assets/Tiles/FieldsTile_22.png',
    './Game-Assets/Tiles/FieldsTile_23.png',
    './Game-Assets/Tiles/FieldsTile_24.png',
    './Game-Assets/Tiles/FieldsTile_25.png',
    './Game-Assets/Tiles/FieldsTile_26.png',
    './Game-Assets/Tiles/FieldsTile_27.png',
    './Game-Assets/Tiles/FieldsTile_28.png',
    './Game-Assets/Tiles/FieldsTile_29.png',
    './Game-Assets/Tiles/FieldsTile_30.png',
    './Game-Assets/Tiles/FieldsTile_31.png',
    './Game-Assets/Tiles/FieldsTile_32.png',
    './Game-Assets/Tiles/FieldsTile_33.png',
    './Game-Assets/Tiles/FieldsTile_34.png',
    './Game-Assets/Tiles/FieldsTile_35.png',
    './Game-Assets/Tiles/FieldsTile_36.png',
    './Game-Assets/Tiles/FieldsTile_37.png',
    './Game-Assets/Tiles/FieldsTile_38.png',
    './Game-Assets/Tiles/FieldsTile_39.png',
    './Game-Assets/Tiles/FieldsTile_40.png',
    './Game-Assets/Tiles/FieldsTile_41.png',
    './Game-Assets/Tiles/FieldsTile_42.png',
    './Game-Assets/Tiles/FieldsTile_43.png',
    './Game-Assets/Tiles/FieldsTile_44.png',
    './Game-Assets/Tiles/FieldsTile_45.png',
    './Game-Assets/Tiles/FieldsTile_46.png',
    './Game-Assets/Tiles/FieldsTile_47.png',
    './Game-Assets/Tiles/FieldsTile_48.png',
    './Game-Assets/Tiles/FieldsTile_49.png',
    './Game-Assets/Tiles/FieldsTile_50.png',
    './Game-Assets/Tiles/FieldsTile_51.png',
    './Game-Assets/Tiles/FieldsTile_52.png',
    './Game-Assets/Tiles/FieldsTile_53.png',
    './Game-Assets/Tiles/FieldsTile_54.png',
    './Game-Assets/Tiles/FieldsTile_55.png',
    './Game-Assets/Tiles/FieldsTile_56.png',
    './Game-Assets/Tiles/FieldsTile_57.png',
    './Game-Assets/Tiles/FieldsTile_58.png',
    './Game-Assets/Tiles/FieldsTile_59.png',
    './Game-Assets/Tiles/FieldsTile_60.png',
    './Game-Assets/Tiles/FieldsTile_61.png',
    './Game-Assets/Tiles/FieldsTile_62.png',
    './Game-Assets/Tiles/FieldsTile_63.png',
    './Game-Assets/Tiles/FieldsTile_64.png',
]
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




