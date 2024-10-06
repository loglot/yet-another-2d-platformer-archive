export class Item{
    func
    title
    state
    game
    var1 = 0
    var2 = []
    constructor(title = "null", state = false, fn = function fun(){}, game){
        this.func = fn
        this.title = title
        this.state = state
        this.game = game
    }


    interact(){
        this.func()
    }
}