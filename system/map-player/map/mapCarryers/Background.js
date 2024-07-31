'use strict';

import { Hitbox } from "../../Hitbox.js";

const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

export class Background {

    layer1 = new Array
    layer2 = new Array
    layer3 = new Array
    layer4 = new Array
    layer5 = new Array
    layer6 = new Array
    layer0 = new Array
    camera

    constructor(cam) {
        this.createLayer1()
        this.createLayer2()
        this.createLayer3()
        this.createLayer4()
        this.createLayer5()
        this.createLayer6()
        this.createlayer0()
        this.camera = cam
    }

    createLayer1() {
    }

    createLayer2() {
    }

    createlayer0() {
    }

    createLayer3() {
    }

    createLayer4() {
    }

    createLayer5() {
    }

    createLayer6() {
    }

    Draw() {
        
        for (let i = 0; i < this.layer6.length; i++) {
            this.layer6[i].draw(this.camera.x / 7, this.camera.y / 7, "#5f5f5f")
        }
        ctx.fillStyle = `rgba(${this.camera.game.gameDisplayer.r}, ${this.camera.game.gameDisplayer.g}, ${this.camera.game.gameDisplayer.b}, .3)`;
        ctx.rect(0, 0, 100000, 10000) 
        ctx.fill()
        for (let i = 0; i < this.layer5.length; i++) {
            this.layer5[i].draw(this.camera.x / 6, this.camera.y / 6, "#5f5f5f")
        }
        ctx.fillStyle = `rgba(${this.camera.game.gameDisplayer.r}, ${this.camera.game.gameDisplayer.g}, ${this.camera.game.gameDisplayer.b}, .3)`;
        ctx.rect(0, 0, 100000, 10000) 
        ctx.fill()
        for (let i = 0; i < this.layer4.length; i++) {
            this.layer4[i].draw(this.camera.x / 5, this.camera.y / 5, "#5f5f5f")
        }
        ctx.fillStyle = `rgba(${this.camera.game.gameDisplayer.r}, ${this.camera.game.gameDisplayer.g}, ${this.camera.game.gameDisplayer.b}, .3)`;
        ctx.rect(0, 0, 100000, 10000) 
        ctx.fill()
        for (let i = 0; i < this.layer3.length; i++) {
            this.layer3[i].draw(this.camera.x / 4, this.camera.y / 4, "#5f5f5f")
        }
        ctx.fillStyle = `rgba(${this.camera.game.gameDisplayer.r}, ${this.camera.game.gameDisplayer.g}, ${this.camera.game.gameDisplayer.b}, .3)`;
        ctx.rect(0, 0, 100000, 10000) 
        ctx.fill()
        for (let i = 0; i < this.layer2.length; i++) {
            this.layer2[i].draw(this.camera.x / 3, this.camera.y / 3, "#5f5f5f")
        }
        ctx.fillStyle = `rgba(${this.camera.game.gameDisplayer.r}, ${this.camera.game.gameDisplayer.g}, ${this.camera.game.gameDisplayer.b}, .3)`;
        ctx.rect(0, 0, 100000, 10000) 
        ctx.fill()
        for (let i = 0; i < this.layer1.length; i++) {
            this.layer1[i].draw(this.camera.x / 2, this.camera.y / 2, "#5f5f5f")  
        }
        ctx.fillStyle = `rgba(${this.camera.game.gameDisplayer.r}, ${this.camera.game.gameDisplayer.g}, ${this.camera.game.gameDisplayer.b}, .3)`;
        ctx.rect(0, 0, 100000, 10000) 
        ctx.fill()

        for (let i = 0; i < this.layer0.length; i++) {
            this.layer0[i].draw(this.camera.x / 1, this.camera.y / 1, "#3f3f3f")  
        }

    }

}