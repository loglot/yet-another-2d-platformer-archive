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

  //this.hitboxes[24] = new Hitbox(1451.1362846604356,-2156.2176276689797,208,262.00046251742333,false )

        this.hitboxes[0] = new Hitbox(-1010, 561, 3496, 1550, false);
        this.hitboxes[1] = new Hitbox(-2452,-3521,2564,5660 )
        this.hitboxes[2] = new Hitbox(-101,-1800,2239,1985 )
        this.hitboxes[3] = new Hitbox(3244,562,2582,1485 )
        this.hitboxes[4] = new Hitbox(2030,-1824,2437,1555 )
        this.hitboxes[5] = new Hitbox(3617,-1733,1672,1917 )
        this.hitboxes[6] = new Hitbox(5606,-89,2138,249 )
        this.hitboxes[7] = new Hitbox(5169,-1733,1066,1321 )

        


        this.hitboxes[this.hitboxes.length] = new Hitbox(5512,1868,1388,163 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6038,1720,126,165 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6528,1722,133,161 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6789,1869,611,156 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6945,1727,133,211 )

        this.hitboxes[this.hitboxes.length] = new Hitbox(5653,905,2045,639 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6209,648,170,89 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6868,653,227,94 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6702,-2508,971,2490 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7366,560,1370,1444 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7598,-2395,753,2554 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8719,-591,953,2631 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8154,-2472,1534,1496 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9616,-590,2043,2439 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9596,-1129,220,153 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10436,-2094,822,1645 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10249,-1125,224,580 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10248,-1645,229,188 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9595,-2080,231,216 )
        
        this.hitboxes[this.hitboxes.length] = new Hitbox(10248,-1744,250,390 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10253,-2134,1005,146 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9536,-1586,311,273 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8150,-3204,1538,796 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9226,-4165,2042,1434 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7337,-4341,2020,1397 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8672,-591,69,1231 )
 
        
        
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
            this.hitboxes[i].nDraw(camera, color);
        }

    }


}
