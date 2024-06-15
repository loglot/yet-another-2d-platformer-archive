

import { Hitbox } from "../../Hitbox.js";

export class Trigger {

    // fields
    hitboxes = new Array();

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {


        //this.hitboxes[this.hitboxes.length] = new Hitbox(0,0,0,0, true, "hook", true)
        //this.hitboxes[this.hitboxes.length] = new Hitbox(0,0,0,0, true, "hookII", true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-201,-12780,2192,1274,true, "camera",-938,12139)
        this.hitboxes[this.hitboxes.length] = new Hitbox(11070,-3330,2271,1257, true, "camera", -12288, 2689)
        this.hitboxes[this.hitboxes.length] = new Hitbox(-2842,-13422,2303,1223, true, "camera", 1528, 12711)

        this.hitboxes[this.hitboxes.length] = new Hitbox(-9438,-17193,2095,1222,true, "camera",8362, 16539)

        this.hitboxes[this.hitboxes.length] = new Hitbox(6499,-21181,473,897, true, "door", "A", true )
 
 





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
