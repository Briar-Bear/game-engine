// add more tiles that layer and adjust their height and width
import Map from './Map'
import './style.css'
import Menu from './Menu'

const container = document.createElement('div')


const map = new Map (container, 3, 3)

const imageSrc = [
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_01.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_02.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_03.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_04.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_05.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_06.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_07.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_08.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_09.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_10.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_11.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_12.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_13.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_14.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_15.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_16.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_17.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_19.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_19.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_20.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_21.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_22.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_23.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_24.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_25.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_26.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_27.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_28.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_29.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_30.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_31.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_32.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_33.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_34.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_35.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_36.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_37.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_38.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_39.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_40.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_41.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_42.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_43.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_44.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_45.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_46.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_47.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_48.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_49.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_50.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_51.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_52.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_53.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_54.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_55.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_56.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_57.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_58.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_59.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_60.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_61.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_62.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_63.png'
    },
    {
        type: 'base',
        src: './Game-Assets/Tiles/FieldsTile_64.png'
    },
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
    map.add
    (
        zoneOneData.start[i].y,
        zoneOneData.start[i].x,
        zoneOneData.start[i].imageUrl,
        zoneOneData.start[i].type,
        zoneOneData.start[i].position
    )   
}

map.selectedColumnPosition.y
map.selectedColumnPosition.x
container.setAttribute('class', 'container')
document.body.append(container)
const menu = new Menu()
menu.display(container, map)
menu.add('fa-house', 'UI', imageSrc)
map.display(container)
map.edit()


// map.timer(60)

console.table(map.grid)




