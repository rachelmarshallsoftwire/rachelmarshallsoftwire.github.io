const turtles = ['<img class="turtle" src="beach-turtle.png">', '<img class="turtle" src="plant-turtle.png">', '<img class="turtle" src="aubergine-turtle.png">', '<img class="turtle-with-glasses" src="cocktail-turtle.png">', '<img class="turtle-with-glasses" src="surf-turtle.png">']

let index = 0

function getNewTurtle() {
    const image = document.getElementById("turtle-image")
    image.innerHTML = turtles[index]
    index === turtles.length-1 ? index = 0 : index+=1
    // index+=1
    console.log(index)
}