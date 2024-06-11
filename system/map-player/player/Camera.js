'use strict';

const canvas = document.getElementById("game_screen");

export class Camera {

    x;
    y;
    mouseX = 0
    mouseY = 0
    debug;
    keyMan;
    mousePos
    velX
    velY
    playerSetVelX = 0
    playerSetVelY = 0
    speed = 10

    midX = 2514 / 2
    midY = 1377 / 2
    omidX = this.midX
    omidY = this.midY
    originalCanvas = canvas.getBoundingClientRect()
    zoom = 1

    targetX = 0
    targetY = 0

    game



    constructor(x, y, debug, keyman, game) {
        this.x = x
        this.y = y
        this.debug = debug
        this.keyMan = keyman
        this.game = game
        document.addEventListener('mousemove', evt => {
            this.mousePos = this.keyMan.getMousePos(canvas, evt)
    
          }, false)
    }

    update() {
        this.mouseX = 0 -(this.mousePos.x - 1676/2)/3
        this.mouseY = 0 -(this.mousePos.y - 918/2)/3

        if (!this.debug.freeCam) {
            this.move()
        } else {
            this.velX = 0
            this.velX = 0   
        }
        this.playerUpdateVel()
        if (this.keyMan.wasKeyJustPressed("Equal")) {
            this.Zoom("in")
        }
        if (this.keyMan.wasKeyJustPressed("Minus")) {
            this.Zoom("out")
        }
        this.x -=  this.velX + this.playerSetVelX 
        this.y -=  this.velY + this.playerSetVelY
        this.keyMan.camY = this.y
        this.keyMan.camX = this.x

    }

    playerUpdateVel(){
        if(this.keyMan.isKeyPressed("KeyI")){
            this.playerSetVelY -= this.speed

        }
        if(this.keyMan.isKeyPressed("KeyJ")){
            this.playerSetVelX -= this.speed

        }
        if(this.keyMan.isKeyPressed("KeyK")){
            this.playerSetVelY += this.speed

        }
        if(this.keyMan.isKeyPressed("KeyL")){
            this.playerSetVelX += this.speed

        }
        this.playerSetVelX *= .9
        this.playerSetVelY *= .9
    }

    move() {
        if(this.debug.cursorCamera) {
            this.velX = (((this.x - this.midX) - (this.game.player.x+this.mouseX))  /5) // 
            this.velY = (((this.y - this.midY) - (this.game.player.y+this.mouseY))  /5) //
        } else {
            this.velX = (((this.x - this.midX) - (this.targetX))  /5) //
            this.velY = (((this.y - this.midY) - (this.targetY))  /5) //
        }

    }

    Zoom(direction) {
        if (direction == "in") {
            this.zoom -= .1
        } else if (direction == "out") {
            this.zoom += .1
        }
        canvas.width = this.originalCanvas.width * this.zoom
        
        this.midX = this.omidX / (this.zoom)
        this.midY = this.omidY / (this.zoom)
             
    }
}
