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
        this.hitboxes[0] = new Hitbox(-1010, 561, 3096, 450, false);
        this.hitboxes[1] = new Hitbox(-610, -2200, 2296, 2400, false); 
        this.hitboxes[ 3 ] = new Hitbox( 2008.9999999999964 , 193.97764669075622 , 609 , 815.9998532503878 , false )
        this.hitboxes[ 4 ] = new Hitbox( 2993.0024418611138 , 233.47749999999962 , 181 , 57 , false )
        this.hitboxes[ 2 ] = new Hitbox( 3756.0024418375065 , 194.47749999999968 , 932.0000000236037 , 823.9999037479197 , false )
        this.hitboxes[ 5 ] = new Hitbox( -1283.9984924064765 , -1289.76921819892675 , 713 , 1603.2692181279472 , false )
        this.hitboxes[ 6 ] = new Hitbox( -2833.9984859654035 , 569.5 , 1458.9999935589274 , 666 , false )
        this.hitboxes[ 7 ] = new Hitbox( -2112.0019770190243 , 27.62182852528383 , 371 , 151 , false )
        this.hitboxes[ 8 ] = new Hitbox( -2107.000722480996 , 45.99999992902045 , 202 , 593.0000000709794 , false )
        this.hitboxes[ 9 ] = new Hitbox( -3844.8261458799025 , -80.53039193224606 , 1783.5923011955647 , 810.5298417330971 , false )
        this.hitboxes[ 10 ] = new Hitbox( -3857.231947889016 , -583.0303919322581 , 1374.6660344761053 , 742.0000000000115 , false )
        this.hitboxes[ 11 ] = new Hitbox( -3490.1934929277077 , -972.7555040524678 , 2258.8671014008346 , 594.8641219037341 , false )
        this.hitboxes[ 12 ] = new Hitbox( 4507.0000000000055 , -647.2477418670517 , 992.7804512288185 , 1209.2252418669236 , false )
        this.hitboxes[ 13 ] = new Hitbox( 3939.9988582128817 , -647.2477418670517 , 404.9999999641177 , 654.9999999965565 , false )
        this.hitboxes[ 14 ] = new Hitbox( 3331.1666885503982 , -2242.538088432644 , 1015.9999943759194 , 2019.9932351233977 , false )
        this.hitboxes[ 15 ] = new Hitbox( 1520.5000000000005 , -2259.7198814440403 , 1859.9704594669333 , 1263.9771937064004 , false )
        this.hitboxes[ 16 ] = new Hitbox( 6444.817169640544 , -666.2720864757089 , 1397.3845936409762 , 1394.0223460228847 , false )
        this.hitboxes[ 17 ] = new Hitbox( 5515.817169641903 , -2614.631419694039 , 1013.9999999986449 , 1460.35933310354 , false )
        this.hitboxes[ 18 ] = new Hitbox( 3996.834554250865 , -2558.1247610308674 , 1714.9621693654199 , 1200.830458308027 , false )
        this.hitboxes[ 19 ] = new Hitbox( 6192.439842589885 , -2668.5699173073654 , 1538.3647378404403 , 1337.2978307168637 , false )
        this.hitboxes[ 20 ] = new Hitbox( 5653.576544694153 , -1364.3620143678445 , 711.2406249463911 , 355.0899303340682 , false )
        
        /**/   
    }

    draw(cameraX, cameraY, color = "#0f0f0f") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }


}
