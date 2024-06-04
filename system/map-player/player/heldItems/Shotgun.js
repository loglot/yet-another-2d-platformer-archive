export class Shotgun{
    game
    cooldown = 700
    reload = 0
    charges = 3
    cooldownA = 0
    trajectory = new Object()
    constructor(game){
        this.game = game
    }
    async execute(){
        if(this.charges > 0){

            this.game.audio.shotgunFireSound()

            if(this.charges == 3) {
                this.reload = this.cooldown
            }
            this.charges--
            this.cooldownA = 1

            const diffX = (this.game.camera.keyMan.mousePos.x + this.game.camera.keyMan.mousePos.cx) + (this.game.player.x - this.game.camera.x);
            const diffY = (this.game.camera.keyMan.mousePos.y + this.game.camera.keyMan.mousePos.cy) + (this.game.player.y - this.game.camera.y); 
            const mouseDistance = (diffX ** 2 + diffY ** 2) ** 0.5;
    
            this.trajectory.x = mouseDistance < this.threshold ? 0 : diffX / mouseDistance;
            this.trajectory.y = mouseDistance < this.threshold ? 0 : diffY / mouseDistance;

            this.game.player.velX += this.trajectory.x * (100 * ((-this.charges * .5) + 2)) / 3
            this.game.player.velY += this.trajectory.y * (100 * ((-this.charges * .5) + 2)) / 3
            
            this.game.player.friction = .95; this.game.player.stopFriction = .92; this.game.player.airFriction = .97
            this.game.player.velChange = 1
            this.game.player.maxVelX = 1000; this.game.player.maxVelY = 500;
            await this.game.sleep(1000)    
            this.game.player.maxVelX = 100; this.game.player.maxVelY = 50;
            this.game.player.friction = .8; this.game.player.stopFriction = .5; this.game.player.airFriction = .85;
            this.game.player.velChange = 4
        }
    }
    update(){
        this.reload -= -this.charges + 3
        if(this.reload <= 0){
            this.charges = 3
            this.cooldownA -= .05
            this.game.audio.bazookaReloadSound()
        }
    }
}