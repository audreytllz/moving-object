const canvas = document.querySelector("canvas");
const cw = canvas.width;
const ch = canvas.height;

const ctx = canvas.getContext("2d");

// ctx.strokeRect(350, -10, 100, 100);
// ctx.strokeRect(10, 10, 100, 100);
// ctx.fillStyle = "#00a";
// ctx.fillRect(50, 50, 80, 120);

// ctx.strokeStyle= "#90a"
// ctx.strokeText('ALGOSUP', 50, 30, 50);
// ctx.font = "30px Arial";
// ctx.strokeText('JavaScript', 200, 50, 300);

// rectangle (w: 100, h: 150)
// center inside canvas

//* First method
//ctx.strokeRect(175,100, 100, 150)

//* Second method
// const w = 50, h = 50;

// ctx.fillStyle = "#0a0";
// ctx.fillRect((cw - w) / 2, (ch - h) / 2, w, h);

// ctx.ellipse(150, 250, 50, 50, 0, 0, Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.setLineDash([10, 15]); 
// ctx.moveTo(400, 120);
// ctx.lineTo(250, 250);
// ctx.stroke();

//TODO 1: Make a triangle

//* Greg
// ctx.beginPath();
// ctx.moveTo(300, 213);
// ctx.lineTo(450, 200);
// ctx.lineTo(400, 125);
// ctx.fill();

class Smile {
    image = null;
    
    constructor(w, h, source) {
        this.w = w; 
        this.h = h;

        this.x = 0;
        this.y = (ch - this.h) / 2;

        this.rect = {
            x: this.x, y: this.y, w: this.w, h: this.h
        };
        
        this.image = new Image();
        this.image.src = source;
        this.image.addEventListener('load', () => {
            this.drawImage();
        });
    }

    drawImage() {
        ctx.clearRect(this.rect.x, this.rect.y, this.rect.w, this.rect.h);
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    }

    moveRight() {
        this.x +=  2;
    }

    moveLeft() {
        this.x -= 2;
    }

    moveUp() {
        this.y -= 2;
    }

    moveDown() {    
        this.y += 2;
    }
}

// let w = 50, h = 50;
// let x = 0, y = (ch - h) / 2;

// const image = new Image();
// image.src = "images/food1.png";
// image.addEventListener('load', () => {
//     ctx.drawImage(image, x, y, w, h);
// });

const smile = new Smile(50, 50, 'smile.svg');
document.addEventListener("keydown", e => {

    if (e.key === "ArrowRight") {
        smile.moveRight();
        smile.drawImage();
    }

    if (e.key === "ArrowLeft") {
        smile.moveLeft();
        smile.drawImage();
    }

    if (e.key === "ArrowUp") {
        smile.moveUp();
        smile.drawImage();
    }

    if (e.key === "ArrowDown") {
        smile.moveDown();
        smile.drawImage();
    }

});