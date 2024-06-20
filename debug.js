export class Debug {

    bean = true
    noClip = false
    playerHitbox = false
    freeCam = false
    mapBuilder = false
    grappleHookTest = true
    backGrid = false
    shortsMap = false
    enum = false
    cursorCamera = false
    getPos = false
    lag = false
    extraEnum = false
    FPS = true
    mute = false

    fpsCount = 0
    keyManager;
    game;

    constructor(keyMan, root) {
        this.keyManager = keyMan
        this.game = root
    }

    update() {
        if (this.keyManager.isKeyPressed("Backslash")) {
            this.hideBean()
            this.flipNoClip()
            this.flipMapMaker()
            this.flipGrappleHookTest()
            this.flipBackGrid()
            //this.flipShortsMap()
            this.flipEnum()
            this.flipC()
            this.flipGP()
            this.flipL()
            this.teleportationRoom()
            if(this.keyManager.isKeyPressed("ShiftLeft")){
                this.flipMouse()
                this.flipFPS()
            } else{
                this.flipPlayerHitbox()
                this.flipFreeCam()

            }
        } else { 
            this.flipMute()
        }
    }

    flipMute(){
        if(this.keyManager.wasKeyJustPressed("KeyM")){
            console.log("mute")
            this.mute = !this.mute
        } 
    }

    flipFPS(){
        
        if(this.keyManager.wasKeyJustPressed("KeyF")){
            this.FPS = !this.FPS
        }
    }

    flipMouse(){
        
        if(this.keyManager.wasKeyJustPressed("KeyP")){
            document.getElementsByTagName("body")[0].style.cursor = "url('http://wiki-devel.sugarlabs.org/images/e/e2/Arrow.cur'), auto";

        }
    }

    flipL() {
        if (this.keyManager.wasKeyJustPressed("KeyL")) {
            this.lag = !this.lag
        }
    }

    flipGP() {
        if (this.keyManager.wasKeyJustPressed("KeyC")) {
            this.getPos = !this.getPos
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

    flipPlayerHitbox() {
        if (this.keyManager.wasKeyJustPressed("KeyP")) {
            console.log("playerHitbox")
            this.playerHitbox = !this.playerHitbox
        }
    }

    flipFreeCam() {
        if (this.keyManager.wasKeyJustPressed("KeyF")) {
            console.log("free Camera")
            this.freeCam = !this.freeCam
        }
    }

    flipMapMaker() {
        if (this.keyManager.wasKeyJustPressed("KeyM")) {
            console.log("map editor")
            this.mapBuilder = !this.mapBuilder
            if (this.keyManager.isKeyPressed("ShiftLeft")) {
                if (this.mapBuilder == true) {
                    this.grappleHookTest = false
                    this.noClip = true
                    this.bean = false
                    this.enum = true
                    document.getElementsByTagName("body")[0].style.cursor = "url('http://wiki-devel.sugarlabs.org/images/e/e2/Arrow.cur'), auto";
                } else {
                    this.grappleHookTest = true
                    this.noClip = false
                    this.bean = true
                    this.enum = false
                }
            }
        }
    }

    teleportationRoom(){
        if (this.keyManager.wasKeyJustPressed("KeyT")) {
            this.game.player.x = 15812
            this.game.player.y = -5161
        }

    }

    flipBackGrid() {
        if (this.keyManager.wasKeyJustPressed("KeyB")) {
            console.log("grid")
            this.backGrid = !this.backGrid
        }
    }

    flipGrappleHookTest() {
        if (this.keyManager.wasKeyJustPressed("KeyG")) {
            console.log("Grapple")
            this.grappleHookTest = !this.grappleHookTest
        }
    }

    flipShortsMap(){
        if (this.keyManager.wasKeyJustPressed("KeyS")) {
            this.shortsMap = !this.shortsMap
            if(this.shortsMap == true) {
                this.game.map.shorts()
                this.game.player.x = -438
                this.game.player.y = -459
            } else {
                this.game.map.Main()
                this.game.player.x = -438
                this.game.player.y = -509
            }
        }
    }

    flipEnum(){
        if (this.keyManager.wasKeyJustPressed("KeyE")) {
            if(this.keyManager.isKeyPressed("ShiftLeft")) { 
                this.extraEnum = !this.extraEnum
            } else {
                this.enum = !this.enum
            }
        }
    }

    flipC() {
        if (this.keyManager.wasKeyJustPressed("KeyY")) {
            this.cursorCamera = !this.cursorCamera
        }
    }
    

}