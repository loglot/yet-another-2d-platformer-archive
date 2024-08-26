'use strict';

import { Hitbox } from ".././Hitbox.js";
import { Orb } from "./orbAnim.js";

export class Player {

    x; velX = 0; maxVelX = 100;
    y; velY = 0; maxVelY = 50; avgVelY = 0
    noclipVelChange = 10; velChange = 4;
    friction = .8; stopFriction = .5; airFriction = .85; hookFriction = .95;

    jump = 0; lastJump = 0; coyoteTime = 5;
    jumpVel = 30 ; float = .35; gravity = 1.5; 

    wallJumpLeft = false; wallJumpAmmountLeft = false;
    wallJumpRight = false; wallJumpAmmountRight = false;
    wallJumpVelY = 40 ; wallJumpVelX = 60

    respawnX; respawnVelX; 
    respawnY; respawnVelY;

    debug; extra; camera; keyManager;
    map;

    toastIdList = []

    stuck = false; death = false; hidden = false;
    playerHitbox = new Array();

    hookHeld = false; hookHeldII = false; bazookaHeld = false; shotgunHeld = false; dashHeld = false
    change
    orb = new Array(); anim = false; animFrames = 0; orbAlpha = 1
    mousevis = false
    loops = 50
    doors = new Object()

    constructor(x, y, keyManager, debug, map, camera, DM, CPM, TPM, extra) {
        this.keyManager = keyManager;
        this.x = x;
        this.y = y;
        this.debug = debug
        this.map = map
        this.camera = camera
        this.#buildHitbox(-25, -75, 50, 125)
        this.respawnX = x
        this.respawnVelX = 0
        this.respawnY = y
        this.respawnVelY = 0
        this.game = extra
        this.doors.index = new Array()
        this.doors.i = 0
        this.doors.temp = new Object()
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
        this.lastJump = this.jump
        if(this.debug.noClip) {
            this.#updateVelocityNoclip();
            this.#moveNoclip();
        } else if (!this.death){
            this.#updateVelocity()
            this.#move()
        }
        if (!this.game.debug.freeCam) {

        /*    this.camera.x = this.x + 900
            this.camera.y = this.y + 500 /**/

        /*    this.camera.x -=((((this.camera.x - this.camera.midX) - this.x) / 10))
            this.camera.y -= (((this.game.timeUtils.speedFactor* (this.camera.y - this.camera.midY) - this.y) / 10)) /**/
        }
        if (this.jump > 0) {
            this.wallJumpAmmountLeft = true
            this.wallJumpAmmountRight = true
        }
        if (this.keyManager.wasKeyJustPressed("KeyR") && (!this.keyManager.isKeyPressed("ShiftLeft") && !this.keyManager.isKeyPressed("AltLeft"))){
            this.die()
        }
        if(this.game.keyManager.wasKeyJustPressed("KeyE")){
            this.game.held.up()
        }
        if(this.game.keyManager.wasKeyJustPressed("KeyQ")){
            this.game.held.down()
        }
        
        
        this.hidden = this.death
        //console.log(this.velY)
        this.orbAlpha -= .001
        if(this.anim == true && this.orbAlpha >= 0) {
            this.orb[this.orb.length] = new Orb(this.x - 1000, this.y+ 1000, 20, this, `rgba(255,255,255,1)`)
            this.orb[this.orb.length] = new Orb(this.x - 0, this.y+ 1500, 20, this, `rgba(255,255,255,1)`)
            this.orb[this.orb.length] = new Orb(this.x - 0, this.y- 1500, 20, this, `rgba(255,255,255,1)`)
            this.orb[this.orb.length] = new Orb(this.x - 1000, this.y- 1000, 20, this, `rgba(255,255,255,1)`)
            this.orb[this.orb.length] = new Orb(this.x - 1500, this.y- 0, 20, this, `rgba(255,255,255,1)`)
            this.orb[this.orb.length] = new Orb(this.x + 1500, this.y- 0, 20, this, `rgba(255,255,255,1)`)
            this.orb[this.orb.length] = new Orb(this.x + 1000, this.y- 1000, 20, this, `rgba(255,255,255,1)`)
            this.orb[this.orb.length] = new Orb(this.x + 1000, this.y+ 1000, 20, this, `rgba(255,255,255,1)`)
            this.orbAlpha -= .01
        }

        if(this.orbAlpha <= 0 && this.anim == true && this.hookHeld == false && this.change == "hook") {
            this.hookHeld = true
            this.game.gameDisplayer.targetR = 167
            this.game.gameDisplayer.targetG = 199
            this.game.gameDisplayer.targetB = 216
            this.game.gameDisplayer.gradMinTarget = 300
            this.game.gameDisplayer.gradMaxTarget = 1500
            this.anim = false
            this.game.held.selected = 0
            this.game.held.makeImg()
        }
        
        if(this.orbAlpha <= 0 && this.anim == true && this.hookHeldII == false && this.change == "hookII") {
            this.hookHeldII = true
            this.game.gameDisplayer.targetR = 216
            this.game.gameDisplayer.targetG = 199
            this.game.gameDisplayer.targetB = 167
            this.game.gameDisplayer.gradMinTarget = 700
            this.game.gameDisplayer.gradMaxTarget = 2000
            this.anim = false
            this.game.held.selected = 1
            this.game.held.makeImg()
        }

        if(this.orbAlpha <= 0 && this.anim == true && this.bazookaHeld == false && this.change == "bazooka") {
            this.bazookaHeld = true
            this.game.gameDisplayer.targetR = 199
            this.game.gameDisplayer.targetG = 216
            this.game.gameDisplayer.targetB = 167
            this.game.gameDisplayer.gradMinTarget = 700
            this.game.gameDisplayer.gradMaxTarget = 2000
            this.anim = false
            this.game.held.selected = 2
            this.game.held.makeImg()
        }

        if(this.orbAlpha <= 0 && this.anim == true && this.shotgunHeld == false && this.change == "shotgun") {
            this.shotgunHeld = true
            this.game.gameDisplayer.targetR = 216
            this.game.gameDisplayer.targetG = 199
            this.game.gameDisplayer.targetB = 216
            this.game.gameDisplayer.gradMinTarget = 700
            this.game.gameDisplayer.gradMaxTarget = 2000
            this.anim = false
            this.game.held.selected = 3
            this.game.held.makeImg()
        }

        if(this.orbAlpha <= 0 && this.anim == true && this.dashHeld == false && this.change == "dash") {
            this.dashHeld = true
            this.game.gameDisplayer.targetR = 255
            this.game.gameDisplayer.targetG = 199
            this.game.gameDisplayer.targetB = 199
            this.game.gameDisplayer.gradMinTarget = 700
            this.game.gameDisplayer.gradMaxTarget = 2000
            this.anim = false
            this.game.held.selected = 4
            this.game.held.makeImg()
        }


        
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    #updateVelocityNoclip() {
        if (this.keyManager.isKeyPressed("KeyD")) {
            this.velX -= this.noclipVelChange //*18 * (;


        }
        if (this.keyManager.isKeyPressed("KeyA")) {
              this.velX += this.noclipVelChange //;

              
        }
        if (this.keyManager.isKeyPressed("KeyW") || this.keyManager.isKeyPressed("Space")) {
            this.velY += this.noclipVelChange //;
            if (this.velY > this.maxVelY) {
                this.velY = this.maxVelY;
          }
            
        }
        
        if (this.keyManager.isKeyPressed("KeyS") && (!this.keyManager.isKeyPressed("ShiftLeft") && !this.keyManager.isKeyPressed("ShiftRight") && !this.keyManager.isKeyPressed("AltLeft"))) {
            this.velY -= this.noclipVelChange //;
            if (Math.abs(this.velY) > this.maxVelY) {
                this.velY = -this.maxVelY;
            }

        }
        if (this.velY < -this.maxVelY) {
            this.velY = -this.maxVelY;
        }
    }

    #moveNoclip() {
        this.x += this.velX ;
        this.y += this.velY ;
        this.velX = this.velX * .8
        this.velY = this.velY * .8
        this.game.camera.targetX = this.x
        this.game.camera.targetY = this.y
    }

    #updateVelocity() {
        var check = false
        if (this.keyManager.isKeyPressed("KeyD")) {
            check = true
            this.velX -= this.velChange;
            if (Math.abs(this.velX) > this.maxVelX) {
                this.velX = -this.maxVelX;
            }
            if (this.velY < 0 && this.wallJumpRight) {
                this.velY = this.velY / 2
            }

        }
        
        if (this.keyManager.isKeyPressed("KeyA")) {
            check = true
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
            this.velY += this.float * 2
                if (this.velY <= 0 && this.jump > 0) {
                    this.velY += this.jumpVel;     
                } else if (this.keyManager.wasKeyJustPressed("KeyW") || this.keyManager.wasKeyJustPressed("Space")) {
                    if (this.jump > 0) {
                        this.velY += this.jumpVel; 
                        
                        this.game.audio.jumpSound()
                    } else if (this.wallJumpLeft) {
                        if (this.velY < 0) {
                            this.velY += (this.wallJumpVelY - 10) / (this.wallJumpAmmountLeft / 2 + .4)
                        } else {
                            this.velY += ((this.wallJumpVelY - 10) / (this.wallJumpAmmountLeft / 2 + .4)) / 1.3
                        }
                        
                        this.velX -= this.wallJumpVelX
                        this.game.audio.wallJumpSound()
                        this.wallJumpAmmountLeft += .5
                        this.wallJumpAmmountRight = 1
                    } else if (this.wallJumpRight) {
                        if (this.velY < 0) {
                            this.velY += (this.wallJumpVelY - 10) / (this.wallJumpAmmountRight / 2 + .4)
                        } else {
                            this.velY += ((this.wallJumpVelY - 10) / (this.wallJumpAmmountRight / 2 + .4)) / 1.3
                        }
                        
                        this.velX += this.wallJumpVelX
                        this.game.audio.wallJumpSound()
                        this.wallJumpAmmountRight += .5
                        this.wallJumpAmmountLeft = 1
                    }
                    this.jump = 0
                }

        }

        if (this.keyManager.isKeyPressed("KeyS")) {
            this.velY -= 2
            this.avgVelY += 4
        }

        if (this.game.hook.enabled == true || this.game.hookII.enabled == true) {
            this.velX = this.velX * this.hookFriction
        } else if (this.jump == 5) {
            this.game.held.grounded()
            if(check == true){
                this.velX = this.velX * this.friction
            } else{
                this.velX = this.velX * this.stopFriction
            }
        } else {
            this.velX = this.velX * this.airFriction
        }
        
        this.velY = this.velY - this.gravity
        this.velY = this.velY * .997

        if (this.velY > this.maxVelY + 50) {
            this.velY = this.maxVelY + 50;
        }
        if (this.velY < -this.maxVelY) {
            this.velY = -this.maxVelY;
            console.log("fixed velocity")
        }

        this.avgVelY = (this.avgVelY + this.velY + Math.abs(this.velX))/3

    }

    #move() {
        
        this.x += this.velX //* this.game.main.deltaTime;
        this.y += this.velY ;
        this.jump--
        this.game.camera.targetX = this.x
        this.game.camera.targetY = this.y
        this.#colide()
        //console.log(this.x, this.y)
    }

    async die() {
        this.death = true
        this.game.hook.enabled = false
        this.game.hook.visible = false
        this.game.hookII.enabled = false
        this.game.hookII.visible = false
        this.game.audio.hurtSound()
        await this.sleep(500)
        this.x = this.respawnX
        this.velX = 0
        this.y = this.respawnY
        this.velY = 0
        this.death = false
        this.game.hook.enabled = false
        this.game.hook.visibility = false
        this.game.hookII.enabled = false
        this.game.hookII.visibility = false

    }

    async check(valC, valS) {
        if(valC == "hook") {
            if(this.anim == false && this.hookHeld != true){
                this.orbAlpha = 1
                this.anim = true
                await this.sleep(750)
                this.game.audio.powerUpSound()
                await this.sleep(750)
                this.change = "hook"
                this.mousevis = true
                document.getElementsByTagName("body")[0].style.cursor = "url('http://wiki-devel.sugarlabs.org/images/e/e2/Arrow.cur'), auto";
            }
        }
        if(valC == "hookII") {
            if(this.anim == false && this.hookHeldII != true){
                this.orbAlpha = 1
                this.anim = true
                await this.sleep(750)
                this.game.audio.powerUpSound()
                await this.sleep(750)
                this.change = "hookII"
                this.mousevis = true
                document.getElementsByTagName("body")[0].style.cursor = "url('http://wiki-devel.sugarlabs.org/images/e/e2/Arrow.cur'), auto";
            }
        }
        if(valC == "bazooka") {
            if(this.anim == false && this.bazookaHeld != true){
                this.orbAlpha = 1
                this.anim = true
                await this.sleep(750)
                this.game.audio.powerUpSound()
                await this.sleep(750)
                this.change = "bazooka"
                this.mousevis = true
                document.getElementsByTagName("body")[0].style.cursor = "url('http://wiki-devel.sugarlabs.org/images/e/e2/Arrow.cur'), auto";
            }
        }
        if(valC == "shotgun") {
            if(this.anim == false && this.shotgunHeld != true){
                this.orbAlpha = 1
                this.anim = true
                await this.sleep(750)
                this.game.audio.powerUpSound()
                await this.sleep(750)
                this.change = "shotgun"
                this.mousevis = true
                document.getElementsByTagName("body")[0].style.cursor = "url('http://wiki-devel.sugarlabs.org/images/e/e2/Arrow.cur'), auto";
            }
        }
        if(valC == "dash") {
            if(this.anim == false && this.dashHeld != true){
                this.orbAlpha = 1
                this.anim = true
                await this.sleep(750)
                this.game.audio.powerUpSound()
                await this.sleep(750)
                this.change = "dash"
                this.mousevis = true
                document.getElementsByTagName("body")[0].style.cursor = "url('http://wiki-devel.sugarlabs.org/images/e/e2/Arrow.cur'), auto";
            }
        }

        //shotgunHeld
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

        for (let i = 0; i < this.map.ground.hitboxes.length; i++) /* check if stuck */ { 
            if(this.#collisionCheck(0, i, this.map.ground) && this.#collisionCheck(1, i, this.map.ground) && this.#collisionCheck(2, i, this.map.ground) && this.#collisionCheck(3, i, this.map.ground)) {
                //this.die()
                
                if(
                    Math.abs(this.velX) > Math.abs(this.velY)
                ) {
                    if(this.velX > 0) {
                        var offset = 25
                        //console.log("hit!")
                        if (this.velX > 0) {
                            this.velX = 0
                        }
                        var hitW = this.map.ground.hitboxes[i].width
                        var hitX = this.map.ground.hitboxes[i].x
        
                        this.x = (-hitX - (offset)) - hitW
                    } else {
                        var offset = 25
                        //console.log("hit!")
                        if (this.velX < 0) {
                            this.velX = 0
                        }
                        var hitW = this.map.ground.hitboxes[i].width
                        var hitX = this.map.ground.hitboxes[i].x
        
                        this.x = (-hitX + (offset))
                    }
                } else {
                    if(this.velY > 0) {
                        var offset = 75
                        //console.log("hit!")
                        if(this.velY > 0) {
                            this.velY = 0
                        }
                        var hitH = this.map.ground.hitboxes[i].height
                        var hitY = this.map.ground.hitboxes[i].y
                        this.y = (-hitY - (offset)) - hitH
                    } else {
                        var offset = 50
                        //console.log("hit!")
                        if(this.velY < 0) {
                            this.velY = 0
                        }
                        var y = this.y 
                        var hitY = this.map.ground.hitboxes[i].y
                        this.y = -hitY + offset
                        this.jump = this.coyoteTime
                        hitDown = true
                    }
                }
                return
            }
        }

        for (let i = 0; i < this.map.ground.hitboxes.length; i++) /* left hit */ { 
            if(this.#collisionCheck(2, i, this.map.ground) && !this.#collisionCheck(3, i, this.map.ground)) {
                var offset = 25
                //console.log("hit!")
                if (this.velX > 0) {
                    this.velX = 0
                }
                var hitW = this.map.ground.hitboxes[i].width
                var hitX = this.map.ground.hitboxes[i].x

                this.x = (-hitX - (offset)) - hitW
                this.wallJumpLeft = true
                //console.log("left hit")
            }
        }

        for (let i = 0; i < this.map.ground.hitboxes.length; i++) /* right hit */ { 
            if(this.#collisionCheck(3, i, this.map.ground) && !this.#collisionCheck(2, i, this.map.ground)) {
                var offset = 25
                //console.log("hit!")
                if (this.velX < 0) {
                    this.velX = 0
                }
                var hitW = this.map.ground.hitboxes[i].width
                var hitX = this.map.ground.hitboxes[i].x

                this.x = -hitX + offset
                this.wallJumpRight = true
            }
        }

        for (let i = 0; i < this.map.ground.hitboxes.length; i++) /* ground hit */ {  
            if(this.#collisionCheck(0, i, this.map.ground) && !this.#collisionCheck(1, i, this.map.ground)) {
                var offset = 50
                //console.log("hit!")
                if(this.velY < 0) {
                    this.velY = 0
                }
                var y = this.y 
                var hitY = this.map.ground.hitboxes[i].y
                this.y = -hitY + offset
                this.jump = this.coyoteTime
                hitDown = true
            }
        }

        for (let i = 0; i < this.map.ground.hitboxes.length; i++) /* ceilling hit */ { 
            if(this.#collisionCheck(1, i, this.map.ground) && !this.#collisionCheck(0, i, this.map.ground)) {
                var offset = 75
                //console.log("hit!")
                if(this.velY > 0) {
                    this.velY = 0
                }
                var hitH = this.map.ground.hitboxes[i].height
                var hitY = this.map.ground.hitboxes[i].y
                this.y = (-hitY - (offset)) - hitH
                //this.jump = true
            }
        }

        for (let i = 0; i < this.map.ground.hitboxes.length; i++) /* left hit */ { 
            if(this.#collisionCheck(4, i, this.map.ground)) {
                var offset = 25
                //console.log("hit!")
                if (this.velX > 0) {
                    this.velX = 0
                }
                var hitW = this.map.ground.hitboxes[i].width
                var hitX = this.map.ground.hitboxes[i].x

                this.x = (-hitX - (offset)) - hitW
                //this.wallJumpLeft = true
            } 
        }

        for (let i = 0; i < this.map.ground.hitboxes.length; i++) /* right hit */ { 
            if(this.#collisionCheck(5, i, this.map.ground)) {
                var offset = 25
                //console.log("hit!")
                if (this.velX > 0) {
                    this.velX = 0
                }
                var hitW = this.map.ground.hitboxes[i].width
                var hitX = this.map.ground.hitboxes[i].x

                this.x = -hitX + offset
                //this.wallJumpRight = true
            }
        }
        

        for (let i = 0; i < this.map.lava.hitboxes.length; i++) {
            if(this.#collisionCheck(100, i, this.map.lava) && !this.death) {
                this.die()
            }
        }

        for (let i = 0; i < this.game.trigger.hitboxes.length; i++) {
            if(this.#collisionCheck(100, i, this.game.trigger)) {
                console.log(i)
                if(this.game.trigger.hitboxes[i].extraInfoI == "camera"){
                    this.game.camera.targetX = this.game.trigger.hitboxes[i].extraInfoII
                    this.game.camera.targetY = this.game.trigger.hitboxes[i].extraInfoIII    
                }
                if(this.game.trigger.hitboxes[i].extraInfoI == "toast"){
                    var check = true
                    for(let j = 0; j < this.toastIdList.length; j++){
                        if(this.game.trigger.hitboxes[i].extraInfoIIII == this.toastIdList[j]){
                            check = false
                        }
                    }
                    if(check){
                        this.game.uitills.toast(this.game.trigger.hitboxes[i].extraInfoII, this.game.trigger.hitboxes[i].extraInfoIII)
                        this.toastIdList.push(this.game.trigger.hitboxes[i].extraInfoIIII)
                    }
                }
                if(this.game.trigger.hitboxes[i].extraInfoI == "door"){
                    for(let h = 0; h < this.game.map.ground.hitboxes.length; h++){
                        //console.log()
                        if(this.map.ground.hitboxes[h].extraInfoII == this.game.trigger.hitboxes[i].extraInfoII){
                            var check = true
                            for(let j = 0; j < this.doors.i; j++){
                                if(this.doors.index[j] == this.map.ground.hitboxes[h].extraInfoII) {
                                    check = false
                                }
                            }
                            if(check){
                                this.doors.index[this.doors.i] = this.map.ground.hitboxes[h].extraInfoII
                                this.doors.i++
                                eval("this.doors."+this.map.ground.hitboxes[h].extraInfoII+" = new Object()")
                                eval("this.doors."+this.map.ground.hitboxes[h].extraInfoII+".velY = this.map.ground.hitboxes[h].extraInfoIIII")
                                eval("this.doors."+this.map.ground.hitboxes[h].extraInfoII+".index = h")
                                eval("this.doors."+this.map.ground.hitboxes[h].extraInfoII+".oY = this.map.ground.hitboxes[h].y")
                                eval("this.doors."+this.map.ground.hitboxes[h].extraInfoII+".height = this.map.ground.hitboxes[h].height")
                                //this.doors.A = new Object()
                                //this.doors.A.velY = -5
                                //this.doors.A.index = h
                                //this.map.ground.hitboxes[h].y -= 1
                            }
                        }
                    }
                }
            }

            
            for(let i = 0; i < this.doors.i; i++){
                var id = this.doors.index[i]
                eval("this.doors.temp.velY = this.doors."+id+".velY")
                var velY = this.doors.temp.velY
                eval("this.doors.temp.index = this.doors."+id+".index")
                var index = this.doors.temp.index
                eval("this.doors.temp.y = this.doors."+id+".oY")
                var y = this.doors.temp.y
                eval("this.doors.temp.height = this.doors."+id+".height")
                var height = this.doors.temp.height
                if(this.map.ground.hitboxes[index].y > y - height){
                    this.map.ground.hitboxes[index].y += velY
                }
            }
        }

        for (let i = 0; i < this.map.enabler.hitboxes.length; i++) {
            if(this.#collisionCheck(100, i, this.map.enabler)) {
                this.check(this.map.enabler.hitboxes[i].extraInfoI, this.map.enabler.hitboxes[i].extraInfoII)
            }
        }

        for (let i = 0; i < this.map.checkpoint.hitboxes.length; i++) {
            if(this.#collisionCheck(100, i, this.map.checkpoint)) {
                this.respawnX = this.x
                this.respawnVelX = this.velX
                this.respawnY = this.y
                this.respawnVelY = this.velY
            }
        }

        for (let i = 0; i < this.map.teleport.hitboxes.length; i++) {
            if(this.#collisionCheck(100, i, this.map.teleport)) {
                this.x = this.map.teleport.hitboxes[i].extraInfoI
                this.y = this.map.teleport.hitboxes[i].extraInfoII 
                this.velX = this.map.teleport.hitboxes[i].extraInfoIII
            }
        }
    }

    
}