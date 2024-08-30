

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
        this.hitboxes[this.hitboxes.length] = new Hitbox(7925,-12744,178,64, true, "dash", true )
 
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
