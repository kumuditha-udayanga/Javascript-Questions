let car; 
let rightObstacle;
let leftObstacle;
let backgroundImg;

const game = () => {
    car = new component(50, 50, "red", 220, 220);
    backgroundImg = new component(480,279, "road.png", 0, 0, "background");
    rightObstacle = new component(10, 280, "black",345, 0);
    leftObstacle = new component(10, 280, "black",135, 0);
    playArea.area();
}

updateCanvas = () => {
    playArea.clearArea();
    backgroundImg.ySpeed =+1; 
    backgroundImg.newPos(); 
    backgroundImg.update();
    rightObstacle.update();
    leftObstacle.update();
    car.newPos();
    car.update();
}

const playArea = {
    canvas : document.getElementById("myCanvas"),
    area : function() {
        this.canvas.width = 480;
        this.canvas.height = 280;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateCanvas, 10);
    },
    clearArea : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

const movements = {
    moveLeft : function (){
        car.xSpeed -= 1;
    },
    moveRight : function (){
        car.xSpeed += 1;
    },
    break : function (){
        car.xSpeed = 0;
        car.ySpeed = 0;
    }
}

function component (width, height, color, xpos, ypos, type){
    this.type = type;
    if (type == "image" || type == "background") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.xpos = xpos;
    this.ypos = ypos;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.update = () => {
        ctx = playArea.context;
        if (type == "image" || type == "background"){
            ctx.drawImage(this.image,
                this.xpos,
                this.ypos,
                this.width, this.height);
            if (type == "background") {
                ctx.drawImage(this.image, this.xpos + this.width, this.ypos, this.width, this.height);
            }
        }else{
            ctx.fillStyle = color;
            ctx.fillRect(this.xpos, this.ypos, this.width, this.height);
        }
    }
    this.newPos = () => {
        this.xpos += this.xSpeed;
        this.ypos += this.ySpeed;
        if (this.type == "background"){
            if (this.ypos == +(this.height)) {
                this.ypos = 0;
              }
        }
    }
}

game();