export class Hook{
    game

    enabled = false ; visibility = false
    x1 ; x2
    y1 ; y2
    length ; targetLength = 0 ; maxLength = 2000
    trajectory = new Object() ; speed = 80 ; threshold = 5 ; motion
    slope
    hitNum
    fixed = false
    yTopCompare = 0 ; xLeftCompare = 0 ; yBottomCompare = 0 ; xRightCompare = 0

    constructor(game){
        this.game = game
        this.enabled = false
        this.visibility = false
    }
    update() {
        /*this.game.drawUtils.Text(this.yTopCompare, 100, 100)
        this.game.drawUtils.Text(this.yBottomCompare, 200, 200)
        this.game.drawUtils.Text(this.xLeftCompare, 300, 300)
        this.game.drawUtils.Text(this.xRightCompare, 400, 400)*/
        this.x1 = -this.game.player.x + this.game.camera.x
        this.y1 = -this.game.player.y + this.game.camera.y - 15

        this.length = Math.sqrt( Math.pow( ((this.x2 + this.game.camera.x) - this.x1), 2) + Math.pow( ((this.y2 + this.game.camera.y) - this.y1) , 2) )  //√((x2 – x1)² + (y2 – y1)²)
        
        // console.log((this.game.camera.keyMan.mousePos.x + this.game.camera.x) - (-this.game.player.x + this.game.camera.x))

        
        if(this.motion) {
            this.move(this.trajectory.x, this.trajectory.y)
        }


        
        

        if (!this.game.debug.grappleHookTest) {
            this.enabled = false
            this.visibility = false
        }

        if (this.length > this.targetLength && this.enabled) {
            this.game.player.velX = this.game.player.velX + ((this.x1 - (this.x2 + this.game.camera.x)) / 70)
            this.game.player.velY = this.game.player.velY + ((this.y1 - (this.y2 + this.game.camera.y)) / 130) + .1
        }

        if (this.length > this.maxLength && this.visibility) {
            this.enabled = false
            this.visibility = false
            this.game.audio.breakSound()
        }

    }

    mouseUpdate(){

        const diffX = (this.game.camera.keyMan.mousePos.x + this.game.camera.keyMan.mousePos.cx) + (this.game.player.x - this.game.camera.x);
        const diffY = (this.game.camera.keyMan.mousePos.y + this.game.camera.keyMan.mousePos.cy) + (this.game.player.y - this.game.camera.y); 
        const mouseDistance = (diffX ** 2 + diffY ** 2) ** 0.5;

        this.trajectory.x = mouseDistance < this.threshold ? 0 : diffX / mouseDistance;
        this.trajectory.y = mouseDistance < this.threshold ? 0 : diffY / mouseDistance;

        //this.trajectory.x = (this.game.camera.keyMan.mousePos.x) - (-this.game.player.x)
        //this.trajectory.y = (this.game.camera.keyMan.mousePos.y) - (-this.game.player.y)
        this.x2 = -this.game.player.x
        this.y2 = -this.game.player.y
        this.fixed = false
        

    }

    #collisionCheck(type, i) {
        if (
            ((   this.y2 >= type.hitboxes[i].y                              && 
                this.y2 <= type.hitboxes[i].y + type.hitboxes[i].height)   &&
            (   this.x2 >= type.hitboxes[i].x                              && 
                this.x2 <= type.hitboxes[i].x + type.hitboxes[i].width))
        ) {this.hitNum = i;

            if(!type.hitboxes[i].extraInfoI){
                return {A : true,
                        B : true}

            }
            if(type.hitboxes[i].extraInfoI){
                return {A : true,
                        B : false}

            }

        } else {return false}
    }

    fixPos(type, i) {
        this.yTopCompare     = Math.abs(this.y2 - type.hitboxes[i].y)
        this.xLeftCompare    = Math.abs(this.x2 - type.hitboxes[i].x)
        this.yBottomCompare  = Math.abs(this.y2 - (type.hitboxes[i].y + type.hitboxes[i].height))
        this.xRightCompare   = Math.abs(this.x2 - (type.hitboxes[i].x + type.hitboxes[i].width))


        if (
            this.yTopCompare < this.yBottomCompare       &&
            this.yTopCompare < this.xLeftCompare         &&
            this.yTopCompare < this.xRightCompare        
        ) {
            this.y2 = type.hitboxes[i].y  
        } else if (
            this.yBottomCompare < this.xLeftCompare      &&
            this.yBottomCompare < this.xRightCompare
        ) {
            this.y2 = type.hitboxes[i].y + type.hitboxes[i].height
        }else if (
            this.xLeftCompare < this.xRightCompare
        ) {
            this.x2 = type.hitboxes[i].x
        } else {
            this.x2 = type.hitboxes[i].x + type.hitboxes[i].width
        }
        
        
        this.fixed = true
        console.log(this.yTopCompare, this.yBottomCompare, this.xLeftCompare, this.xRightCompare)

    }

    colide(){
        if (this.visibility && !this.fixed){

            for (let i = 0; i < this.game.map.ground.hitboxes.length; i++){
                if(this.#collisionCheck(this.game.map.ground, i)){
                    this.enabled = true
                    this.motion = false
                    this.fixPos(this.game.map.ground, i)
                    this.game.audio.hookHitSound()    
                }
            }

            for (let i = 0; i < this.game.map.lava.hitboxes.length; i++){
                if(this.#collisionCheck(this.game.map.lava, i).A){
                    if(this.#collisionCheck(this.game.map.lava, i).B){
                        this.visibility = false
                        this.enabled = false
                        this.motion = false
                        this.game.audio.breakSound()
                    } else {
                        this.enabled = true
                        this.motion = false
                        this.fixPos(this.game.map.lava, i)
                        this.game.audio.hookHitSound()
                         
                         
                    }
                }
            }
        }
    }

    move(x, y){
        var Xstep = this.speed
        var Ystep = this.speed

        
        for (let i = 0; i < this.speed && !this.enabled; i++) {
            if (Xstep != 0) {
                this.x2 +=x
                this.Xstep--
            }
            if (Ystep != 0) {
                this.y2 +=y
                this.Ystep--
            }
            this.colide()
        }
    }
}