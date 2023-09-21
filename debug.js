export class Debug {

    debugMode = false
    bean = true
    noClip = false
    keyManager;

    constructor(keyMan) {
        this.keyManager = keyMan
    }

    update() {

        if(!this.debugMode) {
            this.debugCheck()
        }else{
            this.hideBean();
            this.flipNoClip();
        }

    }

    debugCheck() {
        
        if (this.keyManager.isKeyPressed("Backslash")) {
            this.debugMode = true
            console.log("debug mode enabled");
        }

    }

    hideBean() {
        if (this.keyManager.wasKeyJustPressed("KeyH")) {
            console.log("hide")
            this.bean = !this.bean
        }
    }

    flipNoClip() {
        if (this.keyManager.wasKeyJustPressed("KeyN")) {
            console.log("noClip")
            this.noClip = !this.noClip
        }
    }

}