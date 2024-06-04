

import { Hitbox } from "../../Hitbox.js";

export class Enabler {

    // fields
    hitboxes = new Array();

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {


        //this.hitboxes[this.hitboxes.length] = new Hitbox(0,0,0,0, true, "hook", true)
        //this.hitboxes[this.hitboxes.length] = new Hitbox(0,0,0,0, true, "hookII", true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6060,1688,64,53, true, "hook", true)
        this.hitboxes[this.hitboxes.length] = new Hitbox(6557,1692,67,62, true, "hookII", true)
        this.hitboxes[this.hitboxes.length] = new Hitbox(6966,1702,91,53, true, "bazooka", true)

        this.hitboxes[this.hitboxes.length] = new Hitbox(12093,-2354,282,44, true, "hook", true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7188,-11699,121,51, true, "hookII", true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7437,-11702,114,50, true, "bazooka", true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7549,-12054,73,149, true, "shotgun", true )
 
        
        
        
        
 
         
    }

    draw(cameraX, cameraY, color = "#fff") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, this.hitboxes[i].extraInfoIII);
        }

    }
    nDraw(camera, color = "#fff") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].nDraw(camera, color);
        }

    }
}
