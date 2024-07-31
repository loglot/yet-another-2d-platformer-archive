'use strict';

import { Hitbox } from "../../Hitbox.js";
import { DrawUtils } from "../../../../utils/DrawUtils.js"

export class Map {

    // fields
    hitboxes = new Array();
    drawU = new DrawUtils()

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {

        this.hitboxes[this.hitboxes.length] = new Hitbox(320,560,223,200 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(46,658,281,102 )
 
        this.hitboxes[this.hitboxes.length] = new Hitbox(1123,271,94,377, false, true, "A", 0,-1 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(1027,614,283,443 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(1029,-142,289,470 )

        this.stairs(11865,-2135,746,4, 200, 1)

    }

    stairs(x, y, width, height, step, stepH){
        for(let i = 0; i < step; i++){
            this.hitboxes[this.hitboxes.length] = new Hitbox(x + stepH * (i),y - stepH * (i),width - stepH * (i * (2)),height)
        }
    }

    draw(cameraX, cameraY, color = "#0f0f0f") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }
    nDraw(camera, color = "#0f0f0f") {
        for (let i = 0; i < this.hitboxes.length; i++) {
            if(this.hitboxes[i].extraInfoI) {
                color = "#1f1f1f"
            }
            this.hitboxes[i].nDraw(camera, color);
            color = "#0f0f0f"
        }
    }
}
