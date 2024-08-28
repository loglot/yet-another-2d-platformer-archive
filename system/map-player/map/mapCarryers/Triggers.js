

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
        this.hitboxes[this.hitboxes.length] = new Hitbox(-14575,-3471,1684,981, true, "camera",13812, 2889 )
 

        this.hitboxes[this.hitboxes.length] = new Hitbox(-9438,-17193,2095,1222,true, "camera",8362, 16539)

        this.hitboxes[this.hitboxes.length] = new Hitbox(6499,-21181,473,897, true, "door", "A", true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14105,-14842,270,326, true, "door", "B", true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11357,-26575,270,326, false, "door", "C", true )

        this.hitboxes[this.hitboxes.length] = new Hitbox(21088,-32178,238,285, false, "door", "D", true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(29147,-32868,151,294, false, "door", "E", true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(30097,-25700,311,157, false, "door", "F", true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(29449,-33820,160,285, false, "door", "G", true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(32863,-31295,181,321, false, "door", "H", true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(31596,-26090,396,183, false, "door", "I", true )

        this.hitboxes[this.hitboxes.length] = new Hitbox(2309,6577,517,572, false, "door", "fastpass", true)
        this.hitboxes[this.hitboxes.length] = new Hitbox(-13971,-2732,294,41, false, "door", "backtracksecret", true)
 
 
        this.hitboxes[this.hitboxes.length] = new Hitbox(13777,-2611,349,526, false, "toast", ["     you can save ","     and load with","","CTRL C and CTRL V"], 300, "save" )
        this.hitboxes[this.hitboxes.length] = new Hitbox(0,0,0,0, false, "toast", ["","","",""], 100 )


        
        this.hitboxes[this.hitboxes.length] = new Hitbox(26428,-27213,226,213, false, "door", "FINAL", true )
 
 
 
 
       // this.hitboxes[this.hitboxes.length] = new Hitbox(11046,-22454,758,636, true, "door", "B", true )
       // this.hitboxes[this.hitboxes.length] = new Hitbox(11046,-22454,758,636, true, "door", "C", true )
 




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
