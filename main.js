img = ""
objects = []
status = ""
function setup() {
    canvas = createCanvas(380,380)
    canvas.center() ;
    video = createCapture(VIDEO)
    video.size(380,380)
    video.hide()
    
}
function start() {
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "STATUS:DETECTING OBJECTS"
}

function preload() {
    video = loadImage("dog_cat.jpg")

}
function modelLoaded() {
    console.log("model is initialised")
    status = true
    objectDetector.detect(video,gotResult)
    document.getElementById("status").innerHTML = "status : detecting objects";
}

function draw() {
    image(video,0,0,380,380);
    if(status != ""){
        r= random(255)
        g= random(255)
        b=random(255)
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML = "status: OBJECT DETECTED";
            document.getElementById("no_objects").innerHTML = "no. of objects detected are: " + objects.length
            fill(r,g,b)
            percent = floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + "%",objects[i].x + 15,objects[i].y + 15)
            noFill()
            stroke(r,g,b);
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
