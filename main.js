img = ""
objects = []
status = ""
function setup() {
    canvas = createCanvas(640,420)
    canvas.center() 
}
function preload() {
    img = loadImage("dog_cat.jpg")

}
function modelLoaded() {
    console.log("model is initialised")
    status = true
    objectDetector.detect(img,gotResult)
}

function draw() {
    image(img,0,0,640,420);
    fill("#04e03f")
    text("dog",45,75)
    noFill()
    stroke("#852020")
    rect(30,60,450,350)
}