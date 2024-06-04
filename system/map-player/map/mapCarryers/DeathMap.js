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

        this.hitboxes[this.hitboxes.length] = new Hitbox(8950,-637,172,66 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9472,-648,135,78 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6186,-1708,59,1270 )
 
        this.hitboxes[this.hitboxes.length] = new Hitbox(9474,-2805,1700,140 ) 
        this.hitboxes[this.hitboxes.length] = new Hitbox(14566,-2828,114,220 ) // 10
        this.hitboxes[this.hitboxes.length] = new Hitbox(14946,-2826,140,222 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(15744,-4451,99,1142 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(16373,-3873,334,1066 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(17518,-3891,156,4716 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(18411,-9790,63,10657 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(17556,-9799,92,3884 )
        
        
        
        
        this.hitboxes[this.hitboxes.length] = new Hitbox(17498,-2560,1142,254, true )
 
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
