'use strict';

import { Hitbox } from "../../Hitbox.js";

export class Teleport {

    // fields
    hitboxes = new Array();

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {
        
        //this.hitboxes[0] = new Hitbox(
        //    0, 0, 0, 0, 
        //    false, 
        //    0, 0 
        //);

        this.hitboxes[this.hitboxes.length] = new Hitbox(-17439,4729,574,132,false, 15812, -5161)
        this.hitboxes[this.hitboxes.length] = new Hitbox(-17933,4729,494,122,false, 15812, -5161)

        this.hitboxes[this.hitboxes.length] = new Hitbox(-16865,4757,421,104,false, -2607, -7134)
        this.hitboxes[this.hitboxes.length] = new Hitbox(-16439,4729,445,146,false, -26327, 28442)
        this.hitboxes[this.hitboxes.length] = new Hitbox(-15996,4729,593,151,false, -7888, 20589)

        this.hitboxes[this.hitboxes.length] = new Hitbox(-15538,4875,141,490,false, 14991, -6661)
        this.hitboxes[this.hitboxes.length] = new Hitbox(-14837,6204,85,563,false, 15812, -5161)

        this.hitboxes[this.hitboxes.length] = new Hitbox(14105,-14842,270,326, false, -11143, 22107 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11357,-26575,270,326, false, -11143, 22107 )

        this.hitboxes[this.hitboxes.length] = new Hitbox(26428,-27213,226,213, false, -2607, -7134 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(1918,6470,217,726, false, -438, -511 )
 
        this.hitboxes[this.hitboxes.length] = new Hitbox(53,138,100,445, false, -2607, -7134 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-11813,-4103,200,231, false, 9812, -1765  )
 
 

    }

    draw(cameraX, cameraY, color = "#dbb000") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }
    nDraw(camera, color = "#dbb000") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].nDraw(camera, color);
        }

    }
}
