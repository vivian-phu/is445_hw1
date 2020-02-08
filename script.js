// list with all the pictures
const pics = [
    'kitty_bed.JPG',
    'kitty_basket.JPG',
    'kitty_laptop.JPG',
    'kitty_door.JPG',
    'kitty_sink.JPG',
    'kitty_wall.JPG'
]

const button = document.querySelector('button')
const img = document.querySelector('img')

//counter to know when to cycle the photos
let counter = 0

//button directions
button.addEventListener('click', function(){
    if (counter === pics.length){
        counter = 0
    }
    img.src = pics[counter]
    counter = counter +1
})
