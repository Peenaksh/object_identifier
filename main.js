img = ""
objects = []
status = ""
function setup() {
    canvas = createCanvas(640,420)
    canvas.center() ;
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
}
function preload() {
    img = loadImage("dog_cat.jpg")

}
function modelLoaded() {
    console.log("model is initialised")
    status = true
    objectDetector.detect(img,gotResult)
    document.getElementById("status").innerHTML = "status : detecting objects";
}

function draw() {
    image(img,0,0,640,420);
    fill("#04e03f")
    text("dog",45,75)
    noFill()
    stroke("#852020")
    rect(30,60,450,350)

    fill("#04e03f")
    text("cat",530,150)
    noFill()
    stroke("#852020")
    rect(200,120,400,300)
}
function gotResult(error,results){
if(error){
    console.error(error)
}
else{
    console.log(results)
}
}
