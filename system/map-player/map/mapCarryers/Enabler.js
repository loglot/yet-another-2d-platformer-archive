

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

        this.hitboxes[this.hitboxes.length] = new Hitbox(12093,-2354,282,44, true, "hook", true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-8494,-16236,273,56, true, "hookII", true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-13971,-2732,294,41, true, "dash", true  )
 
        this.hitboxes[this.hitboxes.length] = new Hitbox(-15575,6131,224,833, false, "hook", true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-15947,6101,205,840, false, "hookII", true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-16390,6058,188,894, false, "bazooka", true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-16851,6084,214,866, false, "shotgun", true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-17277,6079,191,807, false, "dash", true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-17750,6134,193,744, false, "portal", true )
        
        
        
        
 
         
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
