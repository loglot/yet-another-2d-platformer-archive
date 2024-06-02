'use strict';

import { Hitbox } from "../../Hitbox.js";

export class Death {

    // fields
    hitboxes = new Array();

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {
        //this.hitboxes[ 0 ] = new Hitbox( 0 , 0 , 0 , 0 , false )
        this.hitboxes[0] = new Hitbox(5561,-59,64,183 )
        this.hitboxes[1] = new Hitbox(5200,-57,132,181 )
        this.hitboxes[2] = new Hitbox(2284,916,1098,1080 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(5741,697,1905,403 )

        this.hitboxes[this.hitboxes.length] = new Hitbox(10316,-2057,238,957 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9641,-3182,147,2128 )
        
        
        
        
    }

    draw(cameraX, cameraY) {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            if(this.hitboxes[i].extraInfoI){
                this.hitboxes[i].draw(cameraX, cameraY, "#500000");
            } else {
                this.hitboxes[i].draw(cameraX, cameraY, "#900000");

            }
        }

    }
    nDraw(camera) {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            if(this.hitboxes[i].extraInfoI){
                this.hitboxes[i].nDraw(camera, "#300000");
            } else {
                this.hitboxes[i].nDraw(camera, "#700000");

            }
        }

    }
}
