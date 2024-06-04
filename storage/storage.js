export class Storage{

    game
    accessible
    Save
    Data

    saveAlpha = 0
    loadAlpha = 0

    constructor(game) {
        this.game = game
    }

    check() {
    }

    setData(){
        return{
            
            x : this.game.player.x, 
            y : this.game.player.y,
            hook : this.game.player.hookHeld,
            hookII : this.game.player.hookHeldII,
            bazooka : this.game.player.bazookaHeld,
            rC : this.game.gameDisplayer.targetR,
            gC : this.game.gameDisplayer.targetG,
            bC : this.game.gameDisplayer.targetB,
            rx : this.game.player.respawnX, 
            ry : this.game.player.respawnY,
            targetMinRad : this.game.gameDisplayer.gradMinTarget,
            targetMaxRad : this.game.gameDisplayer.gradMaxTarget,
            //respawnX
        
        }
    }

    async update() {
        if(this.game.keyManager.isKeyPressed("ControlLeft")){
            if(this.game.keyManager.wasKeyJustPressed("KeyC")){
                this.saveAlpha = 0
                this.loadAlpha = 0
                this.Data = this.setData()
                console.log(this.Data)
                this.save()

                this.saveAlpha = 2
                await this.game.sleep(2000)
            }
            if(this.game.keyManager.wasKeyJustPressed("KeyV")){
                this.saveAlpha = 0
                this.loadAlpha = 0
                this.load()
                this.loadAlpha = 2
            }
        }
        this.saveAlpha -= .05
        this.loadAlpha -= .05
    }

    async save() {
        this.Data = this.setData()
        await navigator.clipboard.writeText(
            Math.floor(this.Data.x)+ "\n"+
            Math.floor(this.Data.y)+ "\n"+
            this.Data.hook+ "\n"+
            this.Data.hookII+ "\n"+
            this.Data.rC+ "\n"+
            this.Data.gC+ "\n"+
            this.Data.bC+ "\n"+
            Math.floor(this.Data.rx)+ "\n"+
            Math.floor(this.Data.ry)+ "\n"+
            this.Data.targetMinRad+ "\n"+
            this.Data.targetMaxRad+ "\n"+
            this.Data.bazooka+ "\n"
        )
        console.log("save") 
    }

    async load() {
        var loadData = await navigator.clipboard.readText()
        console.log(loadData)
        var useData = loadData.split('\n')
        console.log(useData[1]) 

        console.log(useData, useData[2] == "true")

        this.game.player.x = Math.floor(Number(useData[0]))
        this.game.player.y = Math.floor(Number(useData[1]))
        this.game.player.hookHeld = (useData[2] === "true\r" || useData[2] === "true")
        this.game.player.hookHeldII = (useData[3] === "true\r" || useData[3] === "true")
        this.game.player.bazookaHeld = (useData[11] === "true\r" || useData[3] === "true")
        this.game.gameDisplayer.targetR = Number(useData[4])
        this.game.gameDisplayer.targetG = Number(useData[5])
        this.game.gameDisplayer.targetB = Number(useData[6])
        this.game.player.respawnX = Math.floor(Number(useData[7]))
        this.game.player.respawnY = Math.floor(Number(useData[8]))
        this.game.gameDisplayer.gradMinTarget  = Number(useData[9])
        this.game.gameDisplayer.gradMaxTarget  = Number(useData[10])

        console.log(this.Save)
    }
}


-10320.137153439802
1599.4288089210595
true
true
216
199
167
-11433.140395945758
2432
700
2000


-4832.970817753494
-512
true
true
216
199
167
-5224.941717325869
-350.5466810912339
700
2000

-4852
-512
true
true
167
199
216
-5311
-351
300
1500

undefined

false