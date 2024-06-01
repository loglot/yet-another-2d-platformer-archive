export class Bazooka{
    game
    x = 0
    y = 0
    velX = 0
    velY = 0
    cooldown = 500
    enabled = false
    visibility = false
    speed = 50
    trajectory = new Object()
    constructor(game){
        this.game = game
    }
    summon(){
        this.x = -this.game.player.x
        this.y = -this.game.player.y
        this.velX = 0
        this.velY = .5
        this.visibility = true
        console.log(this.x, this.y)

        const diffX = (this.game.camera.keyMan.mousePos.x + this.game.camera.keyMan.mousePos.cx) + (this.game.player.x - this.game.camera.x);
        const diffY = (this.game.camera.keyMan.mousePos.y + this.game.camera.keyMan.mousePos.cy) + (this.game.player.y - this.game.camera.y); 
        const mouseDistance = (diffX ** 2 + diffY ** 2) ** 0.5;

        this.trajectory.x = mouseDistance < this.threshold ? 0 : diffX / mouseDistance;
        this.trajectory.y = mouseDistance < this.threshold ? 0 : diffY / mouseDistance;

        
        this.velX = this.trajectory.x
        this.velY = this.trajectory.y
    }

    update(){
        this.x += this.velX * this.speed
        this.y += this.velY * this.speed
        this.velY += .05
        this.colideAll(this.game.map.ground)
    }

    colideAll(type){
        for(let i = 0; i < type.hitboxes.length; i++){
            this.colide(type, i)
        }
    }

    colide(type, i){
        if(   this.x > type.hitboxes[i].x && this.x < type.hitboxes[i].x + type.hitboxes[i].width    &&
              this.y > type.hitboxes[i].y && this.y < type.hitboxes[i].y + type.hitboxes[i].height   ){

            this.visibility = false
        }
    }

}