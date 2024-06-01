const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

import { Hitbox } from "../../Hitbox.js";

export class Edit {
    keyMan;
    camera;
    x;
    y;
    camXSet
    camYSet
    camXSetII
    camYSetII
    drawUtlils
    tempHitboxes = new Array()
    currentX = 0
    currentY = 0
    hitNum = 0
    layer = 0
    layerOffset
    canvasShape  = this.canvasShapeSet()
    game
    total// = this.game.map.hitboxes.length
    text
    first = true
    rect
    

    constructor(c, k, d, g) {
        this.camera = c
        this.keyMan = k
        this.drawUtlils = d
        this.game = g
        //this.canvasShape = canvas.getBoundingClientRect()
        document.addEventListener("click", (event) => {
            
            //this.x = event.clientX;
            //this.y = event.clientY;
            this.x = ((((event.clientX - this.rect.left)/ this.camera.zoom )  / (this.rect.width ) * this.canvasShape.width ) - (this.camera.x / this.layerOffset)) 
            this.y = ((((event.clientY - this.rect.top) / (this.camera.zoom)) / (this.rect.height) * this.canvasShape.height) - (this.camera.y / this.layerOffset))
            //this.mousePos.x = (((this.mousePos.x) / (this.rect.width)) * this.canvasShape.width) - this.camX
            //this.mousePos.y = (((this.mousePos.y) / (this.rect.height)) * this.canvasShape.height) - this.camY
            this.camXSet = this.camera.x
            this.camYSet = this.camera.y
          }, false);

        onmousemove = (event) => {
            this.rect = canvas.getBoundingClientRect()
            this.currentX = ((((event.clientX - this.rect.left)/ this.camera.zoom )  / (this.rect.width ) * this.canvasShape.width ) - (this.camera.x / this.layerOffset))
            this.currentY = ((((event.clientY - this.rect.top) / (this.camera.zoom)) / (this.rect.height) * this.canvasShape.height) - (this.camera.y / this.layerOffset)) 
            this.camXSetII = this.camera.x
            this.camYSetII = this.camera.y
        }
    }

    canvasShapeSet(){
        return{
            width:2514,
            height:1377
        }
    }



    async update() {

        this.total = this.game.map.ground.hitboxes.length
        if (this.keyMan.wasKeyJustPressed("KeyS") && (this.keyMan.isKeyPressed("AltLeft") || this.keyMan.isKeyPressed("ShiftRight"))) {
            this.fix(this.hitNum)
            this.hitNum++
        }
        if (this.keyMan.wasKeyJustPressed("KeyS") && this.keyMan.isKeyPressed("ShiftLeft")) {
            if(this.first == true) {
                this.first = false
                navigator.clipboard.writeText(" ")
            }
            for (let i = 0; i < this.hitNum; i++) {
                console.log(
                    "this.hitboxes[", "this.hitboxes.length" ,"] = new Hitbox(",
                Math.round(this.tempHitboxes[i].x),",",
                Math.round(this.tempHitboxes[i].y),",",
                Math.round(this.tempHitboxes[i].width), ",",
                Math.round(this.tempHitboxes[i].height),
                " )"
                )
                //navigator.clipboard.writeText()
                
                  

                await navigator.clipboard.readText().then(text =>this.text = text)
                if(this.layer == 0) {
                    await navigator.clipboard.writeText(this.text+
                        "this.hitboxes[" + "this.hitboxes.length" + "] = new Hitbox("+
                        Math.round(this.tempHitboxes[i].x)+ ","+
                        Math.round(this.tempHitboxes[i].y)+ ","+
                        Math.round(this.tempHitboxes[i].width)+ ","+
                        Math.round(this.tempHitboxes[i].height)+
                        " )\n "
                    )
                } else if (this.layer == 1) {
                    await navigator.clipboard.writeText(this.text+
                        "this.layer1[" + (this.game.Background.layer1.length) + "] = new Hitbox("+
                        Math.round(this.tempHitboxes[i].x)+ ","+
                        Math.round(this.tempHitboxes[i].y)+ ","+
                        Math.round(this.tempHitboxes[i].width)+ ","+
                        Math.round(this.tempHitboxes[i].height)+
                        " )\n "
                    )
                } else if (this.layer == 2) {
                    await navigator.clipboard.writeText(this.text+
                        "this.layer2[" + (this.game.Background.layer2.length) + "] = new Hitbox("+
                        Math.round(this.tempHitboxes[i].x)+ ","+
                        Math.round(this.tempHitboxes[i].y)+ ","+
                        Math.round(this.tempHitboxes[i].width)+ ","+
                        Math.round(this.tempHitboxes[i].height)+
                        " )\n "
                    )
                } else if (this.layer == 3) {
                    await navigator.clipboard.writeText(this.text+
                        "this.layer3[" + (this.game.Background.layer3.length) + "] = new Hitbox("+
                        Math.round(this.tempHitboxes[i].x)+ ","+
                        Math.round(this.tempHitboxes[i].y)+ ","+
                        Math.round(this.tempHitboxes[i].width)+ ","+
                        Math.round(this.tempHitboxes[i].height)+
                        " )\n "
                    )
                } else if (this.layer == 4) {
                    await navigator.clipboard.writeText(this.text+
                        "this.layer4[" + (this.game.Background.layer4.length) + "] = new Hitbox("+
                        Math.round(this.tempHitboxes[i].x)+ ","+
                        Math.round(this.tempHitboxes[i].y)+ ","+
                        Math.round(this.tempHitboxes[i].width)+ ","+
                        Math.round(this.tempHitboxes[i].height)+
                        " )\n "
                    )
                } else if (this.layer == 5) {
                    await navigator.clipboard.writeText(this.text+
                        "this.layer5[" + (this.game.Background.layer5.length) + "] = new Hitbox("+
                        Math.round(this.tempHitboxes[i].x)+ ","+
                        Math.round(this.tempHitboxes[i].y)+ ","+
                        Math.round(this.tempHitboxes[i].width)+ ","+
                        Math.round(this.tempHitboxes[i].height)+
                        " )\n "
                    )
                } else if (this.layer == 6) {
                    await navigator.clipboard.writeText(this.text+
                        "this.layer6[" + (this.game.Background.layer6.length) + "] = new Hitbox("+
                        Math.round(this.tempHitboxes[i].x)+ ","+
                        Math.round(this.tempHitboxes[i].y)+ ","+
                        Math.round(this.tempHitboxes[i].width)+ ","+
                        Math.round(this.tempHitboxes[i].height)+
                        " )\n "
                    )
                }

                this.total++

                this.addToMap(i)
                    //navigator.clipboard.writeText("TEXT_TO_BE_COPIED")
                    //    .then(() => alert("Copied"))
                }
            this.delete("all")

        }
        if (this.keyMan.wasKeyJustPressed("KeyM") && (this.keyMan.isKeyPressed("AltLeft") || this.keyMan.isKeyPressed("ShiftRight"))) {
            this.layer++
            if (this.layer == 7) {
                this.layer = 0
            }
        }
        if (this.keyMan.isKeyPressed("AltLeft") && this.keyMan.wasKeyJustPressed("KeyR")){
            this.delete("last")
        }        
        if (this.keyMan.isKeyPressed("ShiftLeft") && this.keyMan.wasKeyJustPressed("KeyR")){
            this.game.map.ground.hitboxes.splice(this.total - 1, 1)
            this.total -= 1 
        }

        this.tempHitboxes[this.hitNum] = new Hitbox( 
            (this.x),
            (this.y),
            ((this.currentX)) - this.x,
            ((this.currentY)) - this.y
        )


        this.layerOffsetSet()
    }

    drawHitbox() {
        ctx.fillStyle = "#000000"
        for (let i = 0; i < this.hitNum + 1; i++) {
            this.tempHitboxes[i].draw(this.camera.x / this.layerOffset, this.camera.y / this.layerOffset) 

        }
        this.drawUtlils.Text(this.layer, 20, 100)

    }

    layerOffsetSet() {
        if (this.layer == 0) {
            this.layerOffset = 1
        } else if (this.layer == 1) {
            this.layerOffset = 2
        } else if (this.layer == 2) {
            this.layerOffset = 3
        } else if (this.layer == 3) {
            this.layerOffset = 4
        } else if (this.layer == 4) {
            this.layerOffset = 5
        } else if (this.layer == 5) {
            this.layerOffset = 6
        } else if (this.layer == 6) {
            this.layerOffset = 7
        }
    }

    addToMap(Q){ //this.game.map.hitboxes.length
        if (this.layer == 0) {
            this.game.map.ground.hitboxes[this.game.map.ground.hitboxes.length] = new Hitbox(
                this.tempHitboxes[Q].x,
                this.tempHitboxes[Q].y,
                this.tempHitboxes[Q].width,
                this.tempHitboxes[Q].height
                )
        } else if (this.layer == 1) {
            this.game.Background.layer1[this.game.Background.layer1.length] = new Hitbox(
                this.tempHitboxes[Q].x,
                this.tempHitboxes[Q].y,
                this.tempHitboxes[Q].width,
                this.tempHitboxes[Q].height
                )
        } else if (this.layer == 2) {
            this.game.Background.layer2[this.game.Background.layer2.length] = new Hitbox(
                this.tempHitboxes[Q].x,
                this.tempHitboxes[Q].y,
                this.tempHitboxes[Q].width,
                this.tempHitboxes[Q].height
                )
        }

    }

    fix(hitnum) {
        if (this.tempHitboxes[hitnum].width < 0) {
            this.tempHitboxes[hitnum].x += this.tempHitboxes[hitnum].width
            this.tempHitboxes[hitnum].width = -this.tempHitboxes[hitnum].width 
        }
        if (this.tempHitboxes[hitnum].height < 0) {
            this.tempHitboxes[hitnum].y += this.tempHitboxes[hitnum].height
            this.tempHitboxes[hitnum].height = -this.tempHitboxes[hitnum].height
        }
    }

    delete(peram, num = 1) {
        if(peram == "all"){
            this.tempHitboxes.splice(0, this.hitNum)
            this.hitNum = 0
        }
        if (peram == "last") {
            this.tempHitboxes.splice(this.hitNum - num, num)
            this.hitNum = this.hitNum - num
        }
        if (peram == "first") {
            this.tempHitboxes.splice(0, num)
            this.hitNum = this.hitNum - num
        }

    }
}

