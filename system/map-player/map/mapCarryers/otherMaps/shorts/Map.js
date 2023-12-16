'use strict';

import { Hitbox } from "../../../../Hitbox.js";
import { DrawUtils } from "../../../../../../utils/DrawUtils.js"

export class Map {

    // fields
    hitboxes = new Array();
    drawU = new DrawUtils()

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {

        this.hitboxes[0] = new Hitbox(181.99999999999977,463.95499719175035,468,58.00000000000006 )
        this.hitboxes[1] = new Hitbox(181.1488155997033,507.93249719175014,469,5411.252701099249 )
        this.hitboxes[2] = new Hitbox(-9323.851184400286,-29630.61216966461,9514.999999999989,31719.228961452074 )
        this.hitboxes[3] = new Hitbox(642.1488155997022,-47367.90823715892,9209.159265649305,49709.84079556712 )
        this.hitboxes[4] = new Hitbox(140.148815599689,-485.0627801193358,371,145.99527888373012 )
        this.hitboxes[5] = new Hitbox(322.148815599689,171.85128522949617,357,95.08121196228319 )
        this.hitboxes[6] = new Hitbox(125.14881559968899,-220.06750280821927,353,104 )
        this.hitboxes[7] = new Hitbox(356.99999999999983,-1410.0674691433267,307.99999999999994,126.99996633507817 )
        this.hitboxes[8] = new Hitbox(344.99999999999983,-789.0675028082499,347.99999999999994,100 )
        this.hitboxes[9] = new Hitbox(147.7857448512259,-2335.0899608981304,325,134.99999176355414 )
        this.hitboxes[10] = new Hitbox(354.81026884677357,-3223.129993788549,289.00000000000006,131.99998716560276 )
        this.hitboxes[11] = new Hitbox(302.810268846773,-2813.1300066229433,191.99999999999994,216 )
        this.hitboxes[12] = new Hitbox(97.66145324707031,-4075.130006622951,402,121 )
        this.hitboxes[13] = new Hitbox(138.6614532470703,-3486.130006622951,376,59 )
        this.hitboxes[14] = new Hitbox(466.6614532470703,-3533.130006622951,48,106 )
        this.hitboxes[15] = new Hitbox(317.6614532470703,-3777.130006622951,384,51 )
        this.hitboxes[16] = new Hitbox(317.6614532470703,-3777.130006622951,39,102 )
        this.hitboxes[17] = new Hitbox(349.6614532470703,-3518.130006622951,66,37 )
        this.hitboxes[18] = new Hitbox(235.6614532470703,-3513.130006622951,56,52 )
        this.hitboxes[19] = new Hitbox(154.66145324707043,-2983.9310631064795,261,95 )
        this.hitboxes[20] = new Hitbox(135.66145324707043,-3114.9310631064795,109,185 )
        this.hitboxes[21] = new Hitbox(334.62131325151796,-4924.130006622955,354.99999999999994,126 )
 
        
 
        
        
 
        
 

    }

    draw(cameraX, cameraY, color = "#0f0f0f") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }


}
