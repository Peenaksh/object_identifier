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
    if(status != ""){
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML = "status: OBJECT DETECTED";
            fill("#224455")
            percent = floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + "%",objects[i].x + 15,objects[i].y + 15)
            noFill()
            stroke("#030226");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }

}
function gotResult(error,results){
if(error){
    console.error(error)
}
else{
    console.log(results)
    objects = results
}
}
