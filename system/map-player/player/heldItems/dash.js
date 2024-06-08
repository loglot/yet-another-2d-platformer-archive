export class Dash {
    game
    trajectory = new Object()
    animation = new Array()
    index = 0
    speed = 50
    enabled = true
    cooldown = 0
    constructor(game){
        this.game = game
    }
    async execute(){
        if(this.enabled){
            this.enabled = false
            this.index++
            var id = this.index
            this.game.player.velX = -this.trajectory.x * this.speed
            this.game.player.velY = -this.trajectory.y * this.speed
            this.cooldown = 7

            for(let i=0; i < 5; i++) {
                this.animation[i] = new Object()        
            }
            this.game.audio.dash()


            this.animate()
    
            this.game.player.friction = .95; this.game.player.stopFriction = .92; this.game.player.airFriction = .97
            this.game.player.velChange = 4 / 3
            this.game.player.maxVelX = 1000; this.game.player.maxVelY = 500;
            this.game.player.wallJumpVelX = 60 / 2
            await this.game.sleep(500)    
            if(id != this.index){return}else{
                this.game.player.maxVelX = 100; this.game.player.maxVelY = 50;
                this.game.player.friction = .8; this.game.player.stopFriction = .5; this.game.player.airFriction = .85;
                this.game.player.velChange = 4
                this.game.player.wallJumpVelX = 60
            }
        }
    }

    async animate(){
        for(let i=0; i < this.animation.length; i++){
            this.animation[i].x = this.game.player.x
            this.animation[i].y = this.game.player.y
            this.animation[i].alpha = 1.5
            await this.game.sleep(50)
        }

    }

    update(){
        const diffX = (this.game.camera.keyMan.mousePos.x + this.game.camera.keyMan.mousePos.cx) + (this.game.player.x - this.game.camera.x);
        const diffY = (this.game.camera.keyMan.mousePos.y + this.game.camera.keyMan.mousePos.cy) + (this.game.player.y - this.game.camera.y); 
        const mouseDistance = (diffX ** 2 + diffY ** 2) ** 0.5;
        this.trajectory.x = mouseDistance < this.threshold ? 0 : diffX / mouseDistance;
        this.trajectory.y = mouseDistance < this.threshold ? 0 : diffY / mouseDistance;
        this.cooldown--
        for(let i=0; i < this.animation.length; i++){
            this.animation[i].alpha -= .1
        }

    }
    reset(){
        if(this.cooldown <= 0){
            this.enabled = true
            this.game.audio.dashReload()
        }
    }
}