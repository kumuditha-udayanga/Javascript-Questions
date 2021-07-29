//creating a canvas using JS
let canvas = document.createElement("canvas");
//making the canvas fullscreen
let w = canvas.width = innerWidth;
let h = canvas.height = innerHeight;
let ctx = canvas.getContext("2d");
//appending the canvas to the body
document.body.appendChild(canvas);


// ctx.fillRect(1100, 500, 100, 10);
// ctx.fillRect(1095, 510, 110, 10);
// ctx.fillRect(1090, 520, 120, 10);
gameComponents = {
    drawTrack: () => {
        segmentXpos = w/2;
        segmentYpos = 500;
        roadWidth = 40;
        while (segmentXpos > 0){
            ctx.fillRect(segmentXpos, segmentYpos, roadWidth, 10);
            segmentXpos -= 5;
            segmentYpos += 4;
            roadWidth += 10;
        }
    },
    drawTrackLines: () => {
        segmentXpos = w/2 + 16;
        segmentYpos = 500; 
        ctx.fillStyle = "white";
        ctx.fillRect(segmentXpos, 510, 5, 15);
        
        // ctx.fillRect(segmentXpos - 1, 540, 7, 15 + 2);
        // ctx.fillRect(segmentXpos - 2, 570, 9, 15 + 4);
        // ctx.fillRect(segmentXpos - 3, 600, 11, 15 + 8);
        // ctx.fillRect(segmentXpos - 4, 640, 13, 15 + 16);
        // ctx.fillRect(segmentXpos - 5, 700, 16, 15 + 32);
        // ctx.fillRect(segmentXpos - 5, 800, 19, 15 + 64);
        // ctx.fillRect(segmentXpos - 5, 960, 23, 15 + 128);
    }
}

gameComponents.drawTrack();
gameComponents.drawTrackLines();