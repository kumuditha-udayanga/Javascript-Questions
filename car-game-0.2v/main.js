//creating a canvas using JS
let canvas = document.createElement("canvas");
//making the canvas fullscreen
let w = canvas.width = 2245;
let h = canvas.height = 1097;
let ctx = canvas.getContext("2d");
//appending the canvas to the body
document.body.appendChild(canvas);


// ctx.fillRect(1100, 500, 100, 10);
// ctx.fillRect(1095, 510, 110, 10);
// ctx.fillRect(1090, 520, 120, 10);
roadLength = 1100;
segmentSize = 500;
segmentXpos = 100;
while (roadLength > 0){
    ctx.fillRect(roadLength, segmentSize, segmentXpos, 10);
    roadLength -= 5;
    segmentSize += 4;
    segmentXpos += 10;
}