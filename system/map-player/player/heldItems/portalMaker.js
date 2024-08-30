export class Portals{
    game
    x = 0
    y = 0
    velX = []
    velY = []
    cooldown = 100
    reload = 0
    enabled = false
    visibility = false
    speed = 10
    trajectory = new Object()
    playerTraj = new Object()
    
    constructor(game){
        this.game = game
    }
    summon(){
        if(this.reload < 1){
            this.x = -this.game.player.x
            this.y = -this.game.player.y
            this.visibility = true

            const diffX = (this.game.camera.keyMan.mousePos.x + this.game.camera.keyMan.mousePos.cx) + (this.game.player.x - this.game.camera.x);
            const diffY = (this.game.camera.keyMan.mousePos.y + this.game.camera.keyMan.mousePos.cy) + (this.game.player.y - this.game.camera.y); 
            const mouseDistance = (diffX ** 2 + diffY ** 2) ** 0.5;

            this.trajectory.x = diffX / mouseDistance;
            this.trajectory.y = diffY / mouseDistance;

            this.reload = this.cooldown

            
        
            this.velX = this.trajectory.x
            this.velY = this.trajectory.y

        }
    }

    update(){
        this.x += this.velX * this.speed
        this.y += this.velY * this.speed
        this.colideAll(this.game.map.ground)
        this.reload--
        if(this.reload == 0) {
            console.log("reload")
        }
    }

    colideAll(type){
        console.log(this.x)
        for(let i = 0; i < type.hitboxes.length; i++){
            this.colide(type, i)
        }
    }

    colide(type, i){
        if(   this.x + 25 > type.hitboxes[i].x && this.x - 25 < type.hitboxes[i].x + type.hitboxes[i].width    &&
              this.y+50 > type.hitboxes[i].y && this.y-75 < type.hitboxes[i].y + type.hitboxes[i].height   && 
              this.visibility                                                                        ){
                var yTopOffset = this.y - type.hitboxes[i].y
                var yBottomOffset = this.y - (type.hitboxes[i].y + type.hitboxes[i].height)
                var xLeftOffset = this.x - type.hitboxes[i].x
                var xRightOffset = this.x - (type.hitboxes[i].x + type.hitboxes[i].width)
                if(Math.abs(yTopOffset) < Math.abs(yBottomOffset)){
                    if(Math.abs(xLeftOffset) < Math.abs(xRightOffset)){
                        if(Math.abs(xLeftOffset) < Math.abs(yTopOffset)){
                            this.velX = -this.velX
                        } else {
                            this.velY = -this.velY
                        }
                    } else {
                        if(Math.abs(xRightOffset) < Math.abs(yTopOffset)){
                            this.velX = -this.velX
                        } else {
                            this.velY = -this.velY
                        }
                    }
                }else{
                    if(Math.abs(xLeftOffset) < Math.abs(xRightOffset)){
                        if(Math.abs(xLeftOffset) < Math.abs(yBottomOffset)){
                            this.velX = -this.velX
                        } else {
                            this.velY = -this.velY
                        }
                    } else {
                        if(Math.abs(xRightOffset) < Math.abs(yBottomOffset)){
                            this.velX = -this.velX
                        } else {
                            this.velY = -this.velY
                        }
                    }
                }
        }
    }
}