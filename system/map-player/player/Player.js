'use strict';

import { Hitbox } from ".././Hitbox.js";

export class Player {

    // System
    keyManager;

    // Variables
    velX = 0;
    velY = 0;
    x;
    y;
    respawnX
    respawnVelX
    respawnY
    respawnVelY
    jump = 0;
    jumpState = false
    wallJumpLeft = false
    wallJumpRight = false
    stuck = false
    wallJumpAmmountLeft = false
    wallJumpAmmountRight = false
    hidden = false
    death = false

    // Constant
    debug;
    extra;
    map;
    camera;
    deathMap;
    checkpointMap;
    teleportMap
    playerHitbox = new Array()
    maxVelX = 100;
    maxVelY = 50;
    noclipVelChange = 10;
    velChange = 4;
    coyoteTime = 5
    jumpVel = 38 // this.coyoteTime
    wallJumpVelY = 40
    wallJumpVelX = 60

    constructor(x, y, keyManager, debug, map, camera, DM, CPM, TPM, extra) {
        this.keyManager = keyManager;
        this.x = x;
        this.y = y;
        this.debug = debug
        this.map = map
        this.camera = camera
        this.deathMap = DM
        this.#buildHitbox(-25, -75, 50, 125)
        this.respawnX = x
        this.respawnVelX = 0
        this.respawnY = y
        this.respawnVelY = 0
        this.checkpointMap = CPM
        this.teleportMap = TPM
        this.game = extra
    }

    #buildHitbox(x, y, width, height) {
        this.playerHitbox[0] = new Hitbox(x + 5, y + (height - 10), width - 10, 10); // bottom of hitbox
        this.playerHitbox[1] = new Hitbox(x + 5, y, width - 10, 10) // top of hitbox
        this.playerHitbox[2] = new Hitbox(x, y + 50, 10, height - 100) // small left of hitbox
        this.playerHitbox[3] = new Hitbox(x + width - 10, y + 50, 10, height - 100) // small right of hitbox
        this.playerHitbox[4] = new Hitbox(x, y + 30, 10, height - 60) // left of hitbox
        this.playerHitbox[5] = new Hitbox(x + width - 10, y + 30, 10, height - 60) // right of hitbox

        this.playerHitbox[100] = new Hitbox(x, y, width, height)
    }

    update() {
        if(this.debug.noClip) {
            this.#updateVelocityNoclip();
            this.#moveNoclip();
        } else if (!this.death){
            this.#move()
            this.#updateVelocity()
        }
        if (!this.debug.freeCam) {

        /*    this.camera.x = this.x + 900
            this.camera.y = this.y + 500 /**/

        /**/    this.camera.x = this.camera.x - (((this.camera.x - 838) - this.x) / 10)
            this.camera.y = this.camera.y - (((this.camera.y - 509) - this.y) / 10) /**/
        }
        if (this.jump > 0) {
            this.wallJumpAmmountLeft = true
            this.wallJumpAmmountRight = true
        }
        if (this.keyManager.wasKeyJustPressed("KeyR")){
            this.die()
        }
        this.hidden = this.death
        //console.log(this.velY)

    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    #updateVelocityNoclip() {
        if (this.keyManager.isKeyPressed("KeyD")) {
            this.velX -= this.noclipVelChange;
            if (Math.abs(this.velX) > this.maxVelX) {
                this.velX = -this.maxVelX;
            }

        }
        if (this.keyManager.isKeyPressed("KeyA")) {
              this.velX += this.noclipVelChange;
              if (this.velX > this.maxVelX) {
                this.velX = this.maxVelX;
            }
              
        }
        if (this.keyManager.isKeyPressed("KeyW") || this.keyManager.isKeyPressed("Space")) {
            this.velY += this.noclipVelChange;
            if (this.velY > this.maxVelY) {
                this.velY = this.maxVelY;
          }
            
        }
        if (this.keyManager.isKeyPressed("KeyS")) {
            this.velY -= this.noclipVelChange;
            if (Math.abs(this.velY) > this.maxVelY) {
                this.velY = -this.maxVelY;
            }

        }
        if (this.velY < -this.maxVelY) {
            this.velY = -this.maxVelY;
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
            if (this.velY < 0 && this.wallJumpRight) {
                this.velY = this.velY / 2
            }

        }
        
        if (this.keyManager.isKeyPressed("KeyA")) {
            this.velX += this.velChange;
            if (this.velX > this.maxVelX) {
                this.velX = this.maxVelX;
            }    
            if (this.velY < 0 && this.wallJumpLeft) {
                this.velY = this.velY / 2
                console.log("wallslide")
            }
        }

        if (this.keyManager.isKeyPressed("KeyW") || this.keyManager.isKeyPressed("Space")) {
                if (this.velY <= 0 && this.jump > 0) {
                    this.velY += this.jumpVel;     
                } else if (this.keyManager.wasKeyJustPressed("KeyW") || this.keyManager.wasKeyJustPressed("Space")) {
                    if (this.jump > 0) {
                        this.velY += this.jumpVel;   
                    } else if (this.wallJumpLeft) {
                        if (this.velY < 0) {
                            this.velY += (this.wallJumpVelY - 10) / (this.wallJumpAmmountLeft / 2 + .4)
                        } else {
                            this.velY += ((this.wallJumpVelY - 10) / (this.wallJumpAmmountLeft / 2 + .4)) / 1.3
                        }
                        
                        this.velX -= this.wallJumpVelX
                        this.wallJumpAmmountLeft += .5
                        this.wallJumpAmmountRight = 1
                    } else if (this.wallJumpRight) {
                        if (this.velY < 0) {
                            this.velY += (this.wallJumpVelY - 10) / (this.wallJumpAmmountRight / 2 + .4)
                        } else {
                            this.velY += ((this.wallJumpVelY - 10) / (this.wallJumpAmmountRight / 2 + .4)) / 1.3
                        }
                        
                        this.velX += this.wallJumpVelX
                        this.wallJumpAmmountRight += .5
                        this.wallJumpAmmountLeft = 1
                    }
                }
            this.jump = 0

        }

        if (this.keyManager.isKeyPressed("KeyS")) {
            this.velY -= 2
        }


        if (this.jump == 5) {
            this.velX = this.velX * .8
        }  else {
            this.velX = this.velX * .85
        }

        if (this.game.hook.enabled) {
            if 
            ((  this.keyManager.isKeyPressed("KeyA")    && 
                !this.keyManager.isKeyPressed("KeyD"))  && 
                -this.x < this.keyManager.mousePos.x    && 
                -this.y > this.keyManager.mousePos.y) 
                {
                    this.velY = this.velY + ((this.game.hook.y1 - this.game.hook.y2) / 300) + .1
            }
            if 
            ((  this.keyManager.isKeyPressed("KeyA")    && 
                !this.keyManager.isKeyPressed("KeyD"))  && 
                -this.x < this.keyManager.mousePos.x    && 
                -this.y < this.keyManager.mousePos.y ) 
                {
                    this.velY = this.velY - ((this.game.hook.y1 - this.game.hook.y2) / 300)
            }
            if 
            ((  this.keyManager.isKeyPressed("KeyD")    && 
                !this.keyManager.isKeyPressed("KeyA"))  && 
                -this.x > this.keyManager.mousePos.x    && 
                -this.y > this.keyManager.mousePos.y) 
                {
                    this.velY = this.velY + ((this.game.hook.y1 - this.game.hook.y2) / 300) + .1
            }
            if 
            ((  this.keyManager.isKeyPressed("KeyD")    && 
                !this.keyManager.isKeyPressed("KeyA"))  && 
                -this.x > this.keyManager.mousePos.x    && 
                -this.y < this.keyManager.mousePos.y ) 
                {
                    this.velY = this.velY - ((this.game.hook.y1 - this.game.hook.y2) / 300)
            }
            this.velY = this.velY * .99
        }
        
        this.velY = this.velY - 1.5
        this.velY = this.velY * .997

        if (this.velY > this.maxVelY + 50) {
            this.velY = this.maxVelY + 50;
        }
        if (this.velY < -this.maxVelY) {
            this.velY = -this.maxVelY;
            console.log("fixed velocity")
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
        this.x += this.velX;
        this.y += this.velY;
        this.jump--
        this.#colide()
        //console.log(this.x, this.y)
    }

    async die() {
        this.death = true
        this.game.hook.enabled = false
        await this.sleep(500)
        this.x = this.respawnX
        this.velX = this.respawnVelX
        this.y = this.respawnY
        this.velY = this.respawnVelY
        this.death = false
        this.game.hook.enabled = false

    }

    drawHitbox() {
        this.playerHitbox[100].draw(-this.x + this.camera.x, -this.y + this.camera.y, "#909090");

        this.playerHitbox[4].draw(-this.x + this.camera.x, -this.y + this.camera.y, "#c0c0c0");
        this.playerHitbox[5].draw(-this.x + this.camera.x, -this.y + this.camera.y, "#c0c0c0");
        this.playerHitbox[0].draw(-this.x + this.camera.x, -this.y + this.camera.y, "#f0f0f0");
        this.playerHitbox[1].draw(-this.x + this.camera.x, -this.y + this.camera.y, "#f0f0f0");
        this.playerHitbox[2].draw(-this.x + this.camera.x, -this.y + this.camera.y, "#f0f0f0");
        this.playerHitbox[3].draw(-this.x + this.camera.x, -this.y + this.camera.y, "#f0f0f0");
    }

    #collisionCheck(part, i, type) {
        if  (  
        ((  this.playerHitbox[part].y -this.y >= type.hitboxes[i].y                                                                &&
            this.playerHitbox[part].y -this.y <= type.hitboxes[i].y + type.hitboxes[i].height)                                     || 
        (   this.playerHitbox[part].y + this.playerHitbox[part].height -this.y >= type.hitboxes[i].y                               &&
            this.playerHitbox[part].y + this.playerHitbox[part].height -this.y <= type.hitboxes[i].y + type.hitboxes[i].height))   &&
        ((  this.playerHitbox[part].x -this.x >= type.hitboxes[i].x                                                                &&
            this.playerHitbox[part].x -this.x <= type.hitboxes[i].x + type.hitboxes[i].width)                                      ||
        (   this.playerHitbox[part].x + this.playerHitbox[part].width -this.x >= type.hitboxes[i].x                                &&
            this.playerHitbox[part].x + this.playerHitbox[part].width -this.x <= type.hitboxes[i].x + type.hitboxes[i].width       ))
            ) {
            var hit = true
        }
        return (hit);
    }
    async #colide() {
        var hitDown = false
        this.wallJumpRight = false
        this.wallJumpLeft = false

        for (let i = 0; i < this.map.hitboxes.length; i++) /* check if stuck */ { 
            if(this.#collisionCheck(0, i, this.map) && this.#collisionCheck(1, i, this.map) && this.#collisionCheck(2, i, this.map) && this.#collisionCheck(3, i, this.map)) {
                this.die()
                return
            }
        }

        for (let i = 0; i < this.map.hitboxes.length; i++) /* left hit */ { 
            if(this.#collisionCheck(2, i, this.map) && !this.#collisionCheck(3, i, this.map)) {
                var offset = 25
                //console.log("hit!")
                if (this.velX > 0) {
                    this.velX = 0
                }
                var hitW = this.map.hitboxes[i].width
                var hitX = this.map.hitboxes[i].x

                this.x = (-hitX - (offset)) - hitW
                this.wallJumpLeft = true
                //console.log("left hit")
            }
        }

        for (let i = 0; i < this.map.hitboxes.length; i++) /* right hit */ { 
            if(this.#collisionCheck(3, i, this.map) && !this.#collisionCheck(2, i, this.map)) {
                var offset = 25
                //console.log("hit!")
                if (this.velX < 0) {
                    this.velX = 0
                }
                var hitW = this.map.hitboxes[i].width
                var hitX = this.map.hitboxes[i].x

                this.x = -hitX + offset
                this.wallJumpRight = true
            }
        }

        for (let i = 0; i < this.map.hitboxes.length; i++) /* ground hit */ {  
            if(this.#collisionCheck(0, i, this.map) && !this.#collisionCheck(1, i, this.map)) {
                var offset = 50
                //console.log("hit!")
                if(this.velY < 0) {
                    this.velY = 0
                }
                var y = this.y 
                var hitY = this.map.hitboxes[i].y
                this.y = -hitY + offset
                this.jump = this.coyoteTime
                hitDown = true
            }
        }

        for (let i = 0; i < this.map.hitboxes.length; i++) /* ceilling hit */ { 
            if(this.#collisionCheck(1, i, this.map) && !this.#collisionCheck(0, i, this.map)) {
                var offset = 75
                //console.log("hit!")
                if(this.velY > 0) {
                    this.velY = 0
                }
                var hitH = this.map.hitboxes[i].height
                var hitY = this.map.hitboxes[i].y
                this.y = (-hitY - (offset)) - hitH
                //this.jump = true
            }
        }

        for (let i = 0; i < this.map.hitboxes.length; i++) /* left hit */ { 
            if(this.#collisionCheck(4, i, this.map)) {
                var offset = 25
                //console.log("hit!")
                if (this.velX > 0) {
                    this.velX = 0
                }
                var hitW = this.map.hitboxes[i].width
                var hitX = this.map.hitboxes[i].x

                this.x = (-hitX - (offset)) - hitW
                //this.wallJumpLeft = true
            } 
        }

        for (let i = 0; i < this.map.hitboxes.length; i++) /* right hit */ { 
            if(this.#collisionCheck(5, i, this.map)) {
                var offset = 25
                //console.log("hit!")
                if (this.velX > 0) {
                    this.velX = 0
                }
                var hitW = this.map.hitboxes[i].width
                var hitX = this.map.hitboxes[i].x

                this.x = -hitX + offset
                //this.wallJumpRight = true
            }
        }
        

        for (let i = 0; i < this.deathMap.hitboxes.length; i++) {
            if(this.#collisionCheck(100, i, this.deathMap) && !this.death) {
                this.die()
            }
        }

        for (let i = 0; i < this.checkpointMap.hitboxes.length; i++) {
            if(this.#collisionCheck(100, i, this.checkpointMap)) {
                this.respawnX = this.x
                this.respawnVelX = this.velX
                this.respawnY = this.y
                this.respawnVelY = this.velY
            }
        }

        for (let i = 0; i < this.teleportMap.hitboxes.length; i++) {
            if(this.#collisionCheck(100, i, this.teleportMap)) {
                this.x = this.teleportMap.hitboxes[i].extraInfoI
                this.y = this.teleportMap.hitboxes[i].extraInfoII 
                this.velX = this.teleportMap.hitboxes[i].extraInfoIII
            }
        }
    }
}
