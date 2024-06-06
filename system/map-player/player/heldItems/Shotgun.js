export class Shotgun{
    game
    cooldown = 700
    reload = -1
    charges = 3
    cooldownA = 0
    velMultiplyer = 10
    trajectory = new Object()
    particles = []
    steps = 50
    length = 0
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
            this.reloading = true

            for(let i = 0; i < 10; i++){
                this.particles[this.length] = new Object()
                this.particles[this.length].x = this.game.player.x
                this.particles[this.length].y = this.game.player.y
                this.particles[this.length].velX = (this.trajectory.x*30 + (Math.random() - .5) * 5)
                this.particles[this.length].velY = (this.trajectory.y*30 + (Math.random() - .5) * 5)
                this.length++
                if(this.length > 50){
                    this.length = 0
                }
            }
            this.velMultiplyer = 5



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

        const diffX = (this.game.camera.keyMan.mousePos.x + this.game.camera.keyMan.mousePos.cx) + (this.game.player.x - this.game.camera.x);
        const diffY = (this.game.camera.keyMan.mousePos.y + this.game.camera.keyMan.mousePos.cy) + (this.game.player.y - this.game.camera.y); 
        const mouseDistance = (diffX ** 2 + diffY ** 2) ** 0.5;

        this.trajectory.x = mouseDistance < this.threshold ? 0 : diffX / mouseDistance;
        this.trajectory.y = mouseDistance < this.threshold ? 0 : diffY / mouseDistance;

        this.reload -= -this.charges + 3
        if(this.reload <= 0){
            this.charges = 3
            this.cooldownA -= .05
            if(this.reloading){
                this.game.audio.bazookaReloadSound()
                this.reloading = false
            }
        }
        for(let i = 0; i < this.particles.length; i++){
            for(let h = 0; h < this.steps; h++){
                this.particles[i].x -= (this.particles[i].velX * this.velMultiplyer) / this.steps
                this.particles[i].y -= (this.particles[i].velY * this.velMultiplyer) / this.steps
                this.colideAll(this.game.map.ground, i)
            }
        }
        if(this.velMultiplyer > 0){
            this.velMultiplyer /= 1 + (this.velMultiplyer/15)
        }
    }

    colideAll(type, h){
        for(let i = 0; i < type.hitboxes.length; i++){
            this.colide(type, i, h)
        }
    }

    colide(type, i, h){
        if(   -this.particles[h].x > type.hitboxes[i].x && -this.particles[h].x < type.hitboxes[i].x + type.hitboxes[i].width    &&
              -this.particles[h].y > type.hitboxes[i].y && -this.particles[h].y < type.hitboxes[i].y + type.hitboxes[i].height   ){
                var left = Math.abs(-this.particles[h].x - type.hitboxes[i].x)
                var right = Math.abs(-this.particles[h].x - (type.hitboxes[i].x + type.hitboxes[i].width))
                var up = Math.abs(-this.particles[h].y - type.hitboxes[i].y)
                var down = Math.abs(-this.particles[h].y - (type.hitboxes[i].y + type.hitboxes[i].height))

                if(this.particles[h].velY > 0){
                    if(up < left && up < right){
                        this.particles[h].velY = -this.particles[h].velY
                    } else {
                        this.particles[h].velX = -this.particles[h].velX
                    }
                } else {
                    if(down < left && down < right){
                        this.particles[h].velY = -this.particles[h].velY
                    } else {
                        this.particles[h].velX = -this.particles[h].velX
                    }

                }


            //if(Math.abs(this.particles[h].velY) > Math.abs(this.particles[h].velX)){
            //    this.particles[h].velY = -this.particles[h].velY
            //} else {
            //    this.particles[h].velX = -this.particles[h].velX
            //}

            this.particles[h].stuck++
        } else {
            this.particles[h].stuck = 0
        }
    }
}