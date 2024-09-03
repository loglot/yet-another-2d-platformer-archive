export class Held {
    game
    heldItems = []
    selected = -1
    image = new Image()
    imageX = 0
    imageY = 0
    imageA = 0
    constructor(game){
        this.game = game
    }

    grounded(){
        this.game.dash.reset()
    }

    up(){
        this.check()
        this.selected++
        var i=0
        while(!this.heldItems[this.selected] && i < 30){
            this.selected++
            i++
            if(this.selected > 5){
                this.selected = 0
            }
        }
        if(!this.heldItems[this.selected]){
            this.cancel()
        } else {this.makeImg()}
    }

    down(){
        this.check()
        this.selected--
        var i=0
        while(!this.heldItems[this.selected] && i < 30){
            this.selected--
            i++
            if(this.selected < 0){
                this.selected = 5
            }
        }
        if(!this.heldItems[this.selected]){
            this.cancel()
        } else {this.makeImg()}
    }

    cancel(){
        this.selected = -1
    }

    makeImg(){
        switch(this.selected) {
            case 0: 
            this.image = this.game.keys.Enabled.get("hook");
            break;
            case 1: 
            this.image = this.game.keys.Enabled.get("pickaxe");
            break;
            case 2: 
            this.image = this.game.keys.Enabled.get("bazooka");
            break;
            case 3: 
            this.image = this.game.keys.Enabled.get("shotgun");
            break;
            case 4: 
            this.image = this.game.keys.Enabled.get("dash");
            break;
            case 5: 
            this.image = this.game.keys.Enabled.get("portal");
            break;
        }
        this.imageA = 5
        this.game.audio.cycleSound(.3)
    }

    check(){
        this.heldItems[0] = false
        this.heldItems[1] = false
        this.heldItems[2] = false
        this.heldItems[3] = false
        this.heldItems[4] = false
        this.heldItems[5] = false
        
        if(this.game.player.Held.get("hook")){
            this.heldItems[0] = true
        }
        if(this.game.player.Held.get("pickaxe")){
            this.heldItems[1] = true
        }
        if(this.game.player.Held.get("bazooka")){
            this.heldItems[2] = true
        }
        if(this.game.player.Held.get("shotgun")){
            this.heldItems[3] = true
        }
        if(this.game.player.Held.get("dash")){
            this.heldItems[4] = true
        }
        if(this.game.player.Held.get("portal")){
            this.heldItems[5] = true
        }
    }

    execute(){
        switch(this.selected) {
            case 0:
                this.hook()
                break
            case 1:
                this.pickaxe()
                break
            case 2:
                this.bazooka()
                break
            case 3:
                this.shotgun()
                break
            case 4:
                this.dash()
                break
            case 5:
                this.portal()
                break
            case 6:
        }
    }

    unExecute(){
        this.hookUp()
        this.pickaxeUp()
    }

    dash(){
        this.game.dash.execute()
    }

    shotgun(){
        this.game.shotgun.execute()
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
        this.game.bazooka.summon()
    }

    portal(){
        this.game.portals.summon()
    }

    hookUp(){
        if(this.game.hook.visibility){
            this.game.hook.visibility = false
            this.game.hook.enabled = false
            this.game.hook.motion = true
            this.game.hook.mouseUpdate()
            if (this.game.hook.visibility) {
              this.game.audio.hookSound()
            } else {
              this.game.audio.breakSound()
            }
        }
    }

    pickaxeUp(){
        if(this.game.hookII.visibility){
            this.game.hookII.visibility = false
            this.game.hookII.enabled = false
            this.game.hookII.motion = true
            if (this.game.hookII.visibility) {
              this.game.audio.hookSound()
            } else {
              this.game.audio.breakSound()
            }
          }
    }


}