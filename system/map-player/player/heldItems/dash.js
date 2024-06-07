export class Dash {
    game
    trajectory = new Object()
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
    
            this.game.player.friction = .95; this.game.player.stopFriction = .92; this.game.player.airFriction = .97
            this.game.player.velChange = 1
            this.game.player.maxVelX = 1000; this.game.player.maxVelY = 500;
            this.game.player.wallJumpVelX = 60 / 4
            await this.game.sleep(500)    
            if(id != this.index){return}else{
                this.game.player.maxVelX = 100; this.game.player.maxVelY = 50;
                this.game.player.friction = .8; this.game.player.stopFriction = .5; this.game.player.airFriction = .85;
                this.game.player.velChange = 4
                this.game.player.wallJumpVelX = 60
            }
        }
    }
    update(){
        const diffX = (this.game.camera.keyMan.mousePos.x + this.game.camera.keyMan.mousePos.cx) + (this.game.player.x - this.game.camera.x);
        const diffY = (this.game.camera.keyMan.mousePos.y + this.game.camera.keyMan.mousePos.cy) + (this.game.player.y - this.game.camera.y); 
        const mouseDistance = (diffX ** 2 + diffY ** 2) ** 0.5;
        this.trajectory.x = mouseDistance < this.threshold ? 0 : diffX / mouseDistance;
        this.trajectory.y = mouseDistance < this.threshold ? 0 : diffY / mouseDistance;
        this.cooldown--

    }
    reset(){
        if(this.cooldown <= 0){
            this.enabled = true
        }
    }
}