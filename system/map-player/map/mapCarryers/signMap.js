import { sign } from "../../sign.js"
export class signMaker {
    signs = new Array()
    constructor() {
        this.constructSigns()
    }
    constructSigns(){ 

        //this.signs[0] = new sign(3821,411,["", "", "", "", "", ""])
        this.signs[0] = new sign(5518,-1734 - 150,["hmm... i see why you came here", "sorry to say that this isn't the main path anymore", "", "", "", "this path is not complete yet"])
        this.signs[1] = new sign(18690,-9840 - 150,["how did you get here in this demo?", "you should need at least the bazooka lmao", "", "", "", "this path is not complete yet"])
        this.signs[2] = new sign(-12831,-17997 - 150,["i see you have gotten lost from the main path", "i wonder, how hard was it for you to get here?", "", "", "", "this path is not complete yet"])
        //this.signs[3] = new sign(8064,-20334 - 150,["this demo has ended prematurly, there will be more, including", "at least 3 new items", "at least 5 side paths", "and more!", "", "this game is not complete yet"])
        this.signs[3] = new sign(500,-16058 -150,["i just... how???", "well, if you got here, i might aswell tell you", "if you hold Backslash and press N", "you go into noclip", "", "this path is not complete yet"])
        this.signs[4] = new sign(2524,7137 -150,["We have reached the final chalange", "Though, there is a high chance that you haven't gotten everything", "The paths are branching", "And there is a lot to get", "You don't need too much here, but more helps", "Go left to go back to the start"])

        //this.hitboxes[this.hitboxes.length] = new Hitbox(,102,126 )
        // this.hitboxes[this.hitboxes.length] = new Hitbox(2524,7137,85,28 )
 
        //////this.hitboxes[this.hitboxes.length] = new Hitbox(5518,-1734,80,80 )
        //////this.hitboxes[this.hitboxes.length] = new Hitbox(18690,-9840,137,40 )
        //this.hitboxes[this.hitboxes.length] = new Hitbox(-12831,-17997,73,33 )
        // this.hitboxes[this.hitboxes.length] = new Hitbox(8064,-20334,94,80 )
        // this.hitboxes[this.hitboxes.length] = new Hitbox(500,-16058,106,113 )
 
 
        
    }
    update(player, keyman) {
        for(let i = 0; i < this.signs.length; i++) {
            this.signs[i].update(player, keyman)
        }
    }
}