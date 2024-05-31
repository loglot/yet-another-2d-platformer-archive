export class Held {
    game
    heldItems = [false,false,false]
    selected = -1
    constructor(game){
        this.game = game
    }

    up(){
        //if(this.game.keyManager.wasKeyJustPressed("KeyE")){}
        this.check()
        this.selected++
        i=0
        while(!this.heldItems[this.selected] || i > 2){
            this.selected++
            i++
            if(this.selected < 2){
                this.selected = 0
            }
        }
        if(!this.heldItems[this.selected]){
            this.cancel()
        }
    }

    down(){
        //if(this.game.keyManager.wasKeyJustPressed("KeyQ")){}
        this.check()
        this.selected--
        i=0
        while(!this.heldItems[this.selected] || i > 2){
            this.selected--
            i++
            if(this.selected < 0){
                this.selected = 2
            }
        }
        if(!this.heldItems[this.selected]){
            this.cancel()
        }

    }

    cancel(){
        this.selected = -1
    }

    check(){
        if(this.game.player.hookHeld){
            this.heldItems[0] = true
        }
        if(this.game.player.hookHeldII){
            this.heldItems[1] = true
        }
    }

    execute(){
        if(this.selected == 0){
            this.hook()
        }else if(this.selected == 1){
            this.pickaxe()
        }else if(this.selected == 2){
            this.bazooka()
        }
    }

    hook(){
        this.game.hook.visibility = true
        this.game.hook.enabled = false
        this.game.hook.motion = true
        this.game.hook.mouseUpdate()
        if (this.game.hook.visibility) {
          this.game.audio.hookSound()
        } else {
          this.game.audio.breakSound()
        }
    }

    pickaxe(){
        this.game.hookII.visibility = true
        this.game.hookII.enabled = false
        this.game.hookII.motion = true
        this.game.hookII.setup()
        if (this.game.hookII.visibility) {
          this.game.audio.hookSound()
        } else {
          this.game.audio.breakSound()
        }
    }
    
    bazooka(){

    }


}