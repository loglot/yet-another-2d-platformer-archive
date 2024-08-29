export class Portals{
    game
    x = []
    y = []
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
        this.x[0] = 0
        this.x[1] = 0
        this.y[0] = 0
        this.y[1] = 0 
        this.velX[0] = 0
        this.velX[1] = 0
        this.velY[0] = 0
        this.velY[1] = 0 
    }
    summon(){
        if(this.reload < 1){
            this.x = -this.game.player.x
            this.y = -this.game.player.y
            this.visibility = true

            const diffX = (this.game.camera.keyMan.mousePos.x + this.game.camera.keyMan.mousePos.cx) + (this.game.player.x - this.game.camera.x);
            const diffY = (this.game.camera.keyMan.mousePos.y + this.game.camera.keyMan.mousePos.cy) + (this.game.player.y - this.game.camera.y); 
            const mouseDistance = (diffX ** 2 + diffY ** 2) ** 0.5;

            this.trajectory.x = mouseDistance ? 0 : diffX / mouseDistance;
            this.trajectory.y = mouseDistance ? 0 : diffY / mouseDistance;

            this.reload = this.cooldown
        
            this.velX = this.trajectory.x
            this.velY = this.trajectory.y

            this.game.audio.bazookaFireSound()
        }
    }

    update(){
        this.x += this.velX * this.speed
        this.y += this.velY * this.speed
        this.colideAll(this.game.map.ground)
        this.reload--
        if(this.reload == 0) {
            this.game.audio.bazookaReloadSound()
            console.log("reload")
        }
    }

    colideAll(type){
        for(let i = 0; i < type.hitboxes.length; i++){
            this.colide(type, i)
        }
    }

    colide(type, i){
        if(   this.x > type.hitboxes[i].x && this.x < type.hitboxes[i].x + type.hitboxes[i].width    &&
              this.y > type.hitboxes[i].y && this.y < type.hitboxes[i].y + type.hitboxes[i].height   && 
              this.visibility                                                                        ){
            this.visibility = false
            this.explode()
        }
    }
}