

import { Hitbox } from "../../Hitbox.js";

export class Enabler {

    // fields
    hitboxes = new Array();

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {

        this.hitboxes[this.hitboxes.length] = new Hitbox(92,366,189,251, false, "hook", true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(92,366,189,251, false, "hookII", true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(92,366,189,251, false, "bazooka", true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(92,366,189,251, false, "shotgun", true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(92,366,189,251, false, "dash", true )
        

 
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
