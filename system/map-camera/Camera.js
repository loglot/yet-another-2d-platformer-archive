'use strict';

// rename this to Player.js

export class Camera {

    // System
    keyManager;

    // Variables
    velX = 0;
    velY = 0;
    x;
    y;
    debug;
    map;

    // Constant
    maxVelX = 100;
    maxVelY = 100;
    noclipVelChange = 10;
    velChange = 5;
    jumpVel = 70

    constructor(x, y, keyManager, debug, map) {
        this.keyManager = keyManager;
        this.x = x;
        this.y = y;
        this.debug = debug
        this.map = map
    }

    update() {
        if(this.debug.noClip) {
            this.#updateVelocityNoclip();
            this.#moveNoclip();
        } else {
            this.#updateVelocity()
            this.#move()
        }

    }
    
    #updateVelocityNoclip() {
        if (this.keyManager.isKeyPressed("KeyD")) {
            this.velX -= this.noclipVelChange;
            if (Math.abs(this.velX) > this.maxVelX) {
                velX = -maxVelX;
            }

        }
        if (this.keyManager.isKeyPressed("KeyA")) {
              this.velX += this.noclipVelChange;
              if (this.velX > this.maxVelX) {
                velX = maxVelX;
            }
              
        }
        if (this.keyManager.isKeyPressed("KeyW")) {
            this.velY += this.noclipVelChange;
            if (this.velY > this.maxVelY) {
              velY = maxVelY;
          }
            
        }
        if (this.keyManager.isKeyPressed("KeyS")) {
            this.velY -= this.noclipVelChange;
            if (Math.abs(this.velY) > this.maxVelY) {
                velY = -maxVelY;
            }

        }
    }

    #moveNoclip() {
        this.x += this.velX;
        this.y += this.velY;
        this.velX = this.velX * .8
        this.velY = this.velY * .8
    }

    #updateVelocity() {
        if (this.keyManager.isKeyPressed("KeyD")) {
            this.velX -= this.velChange;
            if (Math.abs(this.velX) > this.maxVelX) {
                this.velX = -this.maxVelX;
            }

        }
        if (this.keyManager.isKeyPressed("KeyA")) {
              this.velX += this.velChange;
              if (this.velX > this.maxVelX) {
                this.velX = this.maxVelX;
            }
              
        }
        if (this.keyManager.wasKeyJustPressed("KeyW")) {
            this.velY = this.jumpVel;          
        }
        if (this.velY > this.maxVelY) {
            velY = maxVelY;
        }
        /*
        if (this.keyManager.isKeyPressed("KeyS")) {
            this.velY -= this.velChange;
            if (Math.abs(this.velY) > this.maxVelY) {
                velY = -maxVelY;
            }
        }
        */


    }

    #move() {
        this.velX = this.velX * .8
        this.velY = this.velY - 5
        this.velY = this.velY * .95
        this.#collisionCheck()
        this.x += this.velX;
        this.y += this.velY;
    }

    #collisionCheck() {
        for (let i = 0; i < 4; i++) {

            if ((this.y < this.map.hitboxes[i].y && this.y > this.map.hitboxes[i].y - this.map.hitboxes[i].height) && (this.x < this.map.hitboxes[i].x && this.x > this.map.hitboxes[i].x - this.map.hitboxes[i].width)){
                this.velY = 0
                for(let s = 0; s < 1; s++) {
                    this.y = this.y + 1
                    if (this.y < this.map.hitboxes[i].y && this.y > this.map.hitboxes[i].y + this.map.hitboxes[i].height){
                        this.y--
                    }
                }
            }
        }
    }
    
}
