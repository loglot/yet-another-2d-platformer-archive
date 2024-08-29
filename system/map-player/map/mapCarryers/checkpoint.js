'use strict';

import { Hitbox } from "../../Hitbox.js";

export class Checkpoint {

    // fields
    hitboxes = new Array();

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {
        this.hitboxes[this.hitboxes.length] = new Hitbox(5246,395,393,438 )
 
        
 
 
        this.hitboxes[this.hitboxes.length] = new Hitbox(9850,-672,465,133 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(12090,-2353,289,41 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(16861,-4525,336,639 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11970,-7400,131,451 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7707,-8900,330,142 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(5626,-10890,296,78 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-4050,-12348,480,146 )
 
        this.hitboxes[this.hitboxes.length] = new Hitbox(-8494,-16236,273,56 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-590,-18623,445,99 )
 
        this.hitboxes[this.hitboxes.length] = new Hitbox(11029,-22340,228,338 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14477,-17248,276,91 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(16488,-21803,219,553 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(21088,-32178,238,285 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(23211,-25159,155,94 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(25419,-28440,1558,91 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(29147,-32868,151,294 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(28812,-30512,159,115 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(30097,-25700,311,157 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(29466,-25693,111,126 )
 
        this.hitboxes[this.hitboxes.length] = new Hitbox(30896,-31965,89,149 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(28935,-29364,108,166 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(29449,-33820,160,285 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(31947,-27974,238,138 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(32863,-31295,181,321 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(30814,-26494,143,145 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(31596,-26090,396,183 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-2228,-8174,253,473 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-4911,-9653,476,577 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-13971,-2732,294,41 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-16860,-4352,493,387 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-20069,-4052,359,83 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-22372,-4004,493,115 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-23341,-7125,91,170 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-8659,-2230,583,79 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-3633,-8464,115,104 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-2285,-5427,185,57 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(2947,-2900,581,117 )
        
        /*
        this.hitboxes[6] = new Hitbox(7824.600652535286,-594.7523150074721,370.9999875076246,473.92704492161954 )
        this.hitboxes[3] = new Hitbox(6554.600640036759,-3115.8253071301892,394.02956252528475,226.461460671424 )
        this.hitboxes[4] = new Hitbox(6075.685039221042,-4782.825799599384,394.91572690753037,358.78818618766945 )
        this.hitboxes[5] = new Hitbox(6923.599944741716,-4797.825306210291,124.00069428279312,320.0006331007362 )
        
        this.hitboxes[6] = new Hitbox(10275.695525955325,-4300.286376317476,557.842769887031,472.77008544527234 )
        this.hitboxes[7] = new Hitbox(13067.538295509174,-5566.379948488491,155.9999999744432,512.0000000008877 )
        this.hitboxes[8] = new Hitbox(16189.539096611536,-7859.379947940197,137.99919899070846,176.00472183250167 )
        this.hitboxes[9] = new Hitbox(14805.538295619685,-10088.379898503495,227.00012839220835,226.05810475716498 )
        /*/
    }

    draw(cameraX, cameraY, color = "rgba(0, 255, 50, .3)") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }

    nDraw(camera, color = "rgba(0, 255, 50, .3)") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].nDraw(camera, color);
        }

    }
}
