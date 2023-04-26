const turtles = ['<img src="beach-turtle.png">', '<img src="plant-turtle.png">', '<img src="aubergine-turtle.png">', '<img src="cocktail-turtle.png">', '<img src="surf-turtle.png">']

let index = 1

function getNewTurtle() {
    const image = document.getElementById("turtle-image")
    image.innerHTML = turtles[index]
    index === turtles.length-1 ? index = 0 : index+=1
    // index+=1
    console.log(index)
}