export class Bazooka{
    game
    x = 0
    y = 0
    cooldown = 500
    enabled = false
    visibility = false
    constructor(game){
        this.game = game
    }
    summon(){
        this.x = this.game.player.x
        this.y = this.game.player.y
        this.visibility = true

    }

}