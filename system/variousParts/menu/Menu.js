const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

import { DrawUtils } from "../../../utils/DrawUtils.js"
import { Item } from "./menuItem.js";

export class Menu {

    draw = new DrawUtils()
    opacity = 1; bgOpacity = .5
    check = false; checkDos = false; pause = false
    game
    settings = []
    maskX = [-10000,-2000,-10000]
    maskY = [-700,1500,1500]
    maskWidth = [100000]
    maskHeight = [100000]

    constructor(game) {
        this.game = game
        this.makeSettings()
    }

    makeSettings(){
        this.settings[this.settings.length] = new Item("Graphics", "Standard", function fun(){ 
            this.var2 = ["Standard", "Low", "Chromebook"]
            
            this.state = this.var2[this.var1]
            this.game.menu.subSetId = 0
            this.game.gameState = "subSettings"
        }, this.game)
    }

    drawMenu() {

        this.menuScreen()

        // if(this.pause) {
        //     ctx.fillStyle = `rgba(0, 0, 0, ${this.bgOpacity})`
        //     ctx.rect(0, 0, 100000, 10000) 
        //     ctx.fill()
        //     this.draw.Text("P r e s s W t o C o n t i n u e", 600, 300, `rgba(70, 70, 70, ${this.opacity})`, `rgba(255, 255, 255, ${this.opacity})`)
        // } else {
        //     this.draw.Text("P r e s s W T o S t a r t", 600, 500, `rgba(70, 70, 70, ${this.opacity})`, `rgba(255, 255, 255, ${this.opacity})`)
        // }
        // this.draw.Text("Y e t A n o t h e r 2 d P l a t f o r m e r", 600, 300, `rgba(70, 70, 70, ${this.opacity})`, `rgba(255, 255, 255, ${this.opacity})`)

        
        //this.draw.Text("P r e s s S T o E n t e r S e t t i n g s", 600,600, `rgba(70, 70, 70, ${this.opacity})`, `rgba(255, 255, 255, ${this.opacity})`)
    }

    async fade(updown = "down") {
        if(updown=="up" && false) {
            this.check = false
            for (let i = 0; i < 20; i++) {
                this.opacity += .05
                this.bgOpacity += .025
                await this.sleep(16)
            }
            this.checkDos = false
        }
        if(updown=="down"){
            this.checkDos = true
            for (let i = 0; i < 20; i++) {
                this.opacity -= .05
                this.bgOpacity -= .025
                await this.sleep(16)
            }
            this.check = true
            this.pause = true
        }

    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    menuScreen(){
        ctx.save();
        this.menuSetup()
        this.draw.Text("Yet Another 2d Platformer", 200, 200, "black", "white", ctx, 80)
        this.draw.Text("Press W To Start", 200, 300, "black", "white", ctx, 80)
        ctx.restore();
    }

    menuSetup(){
        ctx.beginPath()
        ctx.translate(this.originalWidth/2, this.originalHeight/2)
        ctx.rotate(165 * Math.PI / 180)
        ctx.rect(this.maskX[0], this.maskY[0], this.maskWidth[0], this.maskHeight[0])
        ctx.rotate(-165 * Math.PI / 180)
        ctx.clip()
        this.draw.Rect(-10000,-10000,100000,100000,"#1f1f1f", ctx) 
        ctx.closePath()

    }
    
    optionsScreen(){
        ctx.save();
        this.optionsSetup()
        this.drawUtils.Text("=>", -1100, -10, "black", "white", ctx, 120)
        this.drawUtils.Text("ESC", -1200, -500, "black", "white", ctx, 120)
        this.settingsY = (this.settingsY*9 + (-100 * this.game.menu.settingSelect))/10
        for(let i = 0; i < this.game.menu.settings.length; i++){

            var ything = 450 + (100*i) + (this.settingsY)
            this.drawUtils.Text(this.game.menu.settings[i].title + " : " + this.game.menu.settings[i].state, ((310-i*200)-(this.settingsY*2 ))-1250,(ything + (((ything)-450)*((ything)-450))/40)-470,"black","white",ctx,80 + i*20 +(this.settingsY/5 )-4)
            
        }
        ctx.restore();
    }

    optionsSetup(){
        ctx.beginPath()
        ctx.translate(this.originalWidth/2, this.originalHeight/2)
        ctx.rotate(60 * Math.PI / 180)
        ctx.rect(this.maskX[1], this.maskY[1], this.maskWidth[0], this.maskHeight[0])
        ctx.rotate(-60 * Math.PI / 180)
        ctx.clip()
        this.draw.Rect(-10000,-10000,100000,100000,this.game.menu.settingsColor[this.game.menu.settings[1].var1], ctx) 
        ctx.closePath()

    }

    subOptionsScreen(){
        ctx.save();
        this.subOptionsSetup()
        this.drawUtils.Text("=>", +400, -10, "black", "white", ctx, 120)
        this.subSetY = (this.subSetY*9 + (-100 * this.game.menu.settings[this.game.menu.subSetId].var1))/10//this.settings[this.subSetId].var1
        for(let i = 0; i < this.game.menu.settings[this.game.menu.subSetId].var2.length; i++){

            var ything = 450 + (100*i) + (this.subSetY)
            this.drawUtils.Text(this.game.menu.settings[this.game.menu.subSetId].var2[i], ((310-i*-150)+(this.subSetY*1.5 ))+300,(ything + (((ything)-450)*((ything)-450))/40)-470,"black","white",ctx,80 + i*20 +(this.subSetY/5 )-4)
            
        }
        this.drawUtils.Text(this.game.menu.settings[this.game.menu.subSetId].title,700,-600)
        ctx.restore();
    }

    subOptionsSetup(){
        ctx.beginPath()
        ctx.translate(this.originalWidth/2, this.originalHeight/2)
        ctx.rotate(-60 * Math.PI / 180)
        ctx.rect(this.maskX[2], this.maskY[2], this.maskWidth[0], this.maskHeight[0])
        ctx.rotate(60 * Math.PI / 180)
        ctx.clip()
        this.drawUtils.Rect(-10000,-10000,100000,100000,this.game.menu.subSetColor[this.game.menu.settings[1].var1], ctx) 
        ctx.closePath()

    }
}