'use strict';



import { Game } from "./imports/import.js"


document.getElementsByTagName("body")[0].style.cursor = "none";
    const game = new Game(this)
    const perfectFrameTime = 1000 / 60;
    var fps = 0
    let deltaTime = 0;
    let lastTimestamp = 0;
    let lastFrameMenu = true
    
    let msPrev = window.performance.now()
    const targetFPS = 60
    const msPerFrame = 1000 / targetFPS

    async function startGame() {
        if(localStorage) {game.storage.accessible = false} else {game.storage.accessible = true}
        game.storage.check()
        game.debug.flipMouse()
        requestAnimationFrame(tick);

        //game.autoDebug()
        //while (true) {
            //game.updateGame();

        //}
    } 

    async function tick() {
        
        requestAnimationFrame(tick);
        
        const msNow = window.performance.now()
        const msPassed = msNow - msPrev
      
        if (msPassed < msPerFrame) return
      
        const excessTime = msPassed % msPerFrame
        msPrev = msNow - excessTime
      
        FPSCalc()
        game.audio.songMuteBrains()
        
        //currentTime = Date.now();
        

        
        if(game.debug.lag){await sleep(Math.random() * 100)}
        

        //console.log("frame")


            var now = Date.now()
            deltaTime = (Date.now() - lastTimestamp) / perfectFrameTime;
            lastTimestamp = Date.now();
            
            game.gameDisplayer.drawGameFrame();
            if (game.debug.playerHitbox) {
                game.player.drawHitbox()
            }



            if (game.debug.mapBuilder) {
                game.mapEdit.drawHitbox()
            }
            var DrawTime = Date.now() - now
            var now = Date.now()
            if(game.menu.check) {
                updateGame();
                if(lastFrameMenu){
                    game.audio.menuSound()
                    game.audio.playSound()
                    game.audio.playSongLoop()
                    lastFrameMenu = false
                    game.gameDisplayer.targetR = 167
                    game.gameDisplayer.targetG = 167
                    game.gameDisplayer.targetB = 167
                }
            } else {
                game.menu.drawMenu()
                if(game.keyManager.wasKeyJustPressed("KeyW") && !game.menu.checkDos) {
                    game.menu.fade()
                }
            }/**/
            //game.audio.playSound()
            game.keyManager.update();
            //console.log("Drawing :", DrawTime , "|||  Updating :", Date.now() - now, "|||  Max : 16 :", DrawTime + Date.now() - now, "|||  Delta Time :", deltaTime)
            //lastTime = Date.now()
            //await sleep(1000/60);
        
    }

    async function updateGame() { 

        for(let i = 0; i < game.player.orb.length; i++){
            game.player.orb[i].update()
        }
        
        game.camera.update(deltaTime)
        game.map.sign.update(game.player, game.keyManager)
        game.player.update(deltaTime); 
        for(let i = 0; i < game.enemy.value.length; i++) {
            game.enemy.value[i].update();
        
        }

        game.debug.update();

        if(game.debug.mapBuilder){
            game.mapEdit.update();
        }


        game.hook.update(deltaTime);
        game.hookII.update(deltaTime);
        game.bazooka.update()
        game.shotgun.update()
        game.dash.update()
        game.portals.update()
        game.storage.update()
        DeltaTime()
        

        if (game.keyManager.wasKeyJustPressed("KeyP") && game.menu.checkDos) {
            game.menu.fade("up")
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function DeltaTime(){

    }

    async function FPSCalc(){
        fps++
        await sleep(1000)
        fps--
        game.debug.fpsCount = fps
    }

startGame();

