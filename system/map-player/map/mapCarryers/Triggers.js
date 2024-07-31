

import { Hitbox } from "../../Hitbox.js";

export class Trigger {

    // fields
    hitboxes = new Array();

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {
        this.hitboxes[this.hitboxes.length] = new Hitbox(1398,-57,1023,760,false, "camera",-2338, -60 )
 
        this.hitboxes[this.hitboxes.length] = new Hitbox(714,126,176,189, false, "door", "A", true )
 
    }

    draw(cameraX, cameraY, color = "#fff") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, this.hitboxes[i].extraInfoIII);
        }

    }
    nDraw(camera, color = "rgba(0,255,255,.25)") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].nDraw(camera, color);
        }

    }
}
