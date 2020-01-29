const pics = [
    'imgs/kitty_bed.JPG',
    'imgs/kitty_basket.JPG',
    'imgs/kitty_laptop.JPG',
    'imgs/kitty_door.JPG',
    'imgs/kitty_sink.JPG',
    'imgs/kitty_wall.JPG'
]

const button = document.querySelector('button')
const img = document.querySelector('img')

let counter = 0

button.addEventListener('click', function(){
    counter += 1
    if (index == pics.length){
        
    }
    img.src = pics[counter]
})