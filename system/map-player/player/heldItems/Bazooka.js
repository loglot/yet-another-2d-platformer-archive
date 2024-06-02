export class Bazooka{
    game
    x = 0
    y = 0
    velX = 0
    velY = 0
    cooldown = 100
    reload = 0
    enabled = false
    visibility = false
    speed = 50
    explodeState = false
    explodeR = 0
    explodeA = 0
    explodeX = 0
    explodeY = 0
    threshold = 0
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

            this.trajectory.x = mouseDistance < this.threshold ? 0 : diffX / mouseDistance;
            this.trajectory.y = mouseDistance < this.threshold ? 0 : diffY / mouseDistance;

            this.reload = this.cooldown
        
            this.velX = this.trajectory.x
            this.velY = this.trajectory.y

            this.game.audio.bazookaFireSound()
        }
    }

    update(){
        this.x += this.velX * this.speed
        this.y += this.velY * this.speed
        this.velY += .05
        this.colideAll(this.game.map.ground)
        this.reload--
        if(this.reload == 0) {
            this.game.audio.bazookaReloadSound()
            console.log("reload")
        }
        if(this.explodeState == true){
            this.explodeR += 30
            this.explodeA -= .05
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

    explode() {
        const diffX = (this.game.player.x) + (this.x);
        const diffY = (this.game.player.y) + (this.y); 
        const distance = (diffX ** 2 + diffY ** 2) ** 0.5;

        this.playerTraj.y = diffY / distance;
        this.playerTraj.x = diffX / distance;

        const closeness = (Math.max(1000 / (Math.max(distance, 150)/5)) * 2) < 9 ? 0 : (Math.max(1000 / (Math.max(distance, 150)/5)) * 2, 30)

        this.game.player.velX += this.playerTraj.x * closeness * 2
        if(closeness > 20){
            this.game.player.velY = this.playerTraj.y * closeness
        }
        this.game.player.velY += this.playerTraj.y * closeness
        
        this.game.audio.bazookaHitSound()
        console.log(closeness)

        this.explodeState = true
        this.explodeX = this.x
        this.explodeY = this.y
        this.explodeA = 1
        this.explodeR = 0

    }

}