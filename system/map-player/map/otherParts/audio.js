export class Sound{
    
    game = 0
    song = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/assets/audio/break.wav')

    constructor(gmae){
        this.game = gmae
    }
    
    songLength = [
        178000,
        145000,
        80000,
        135000,
        101000,
        143000,
        97000,
        179000,
        199000,
        187000
    ]

    breakSound(v=.1) {
        var hbreak = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/assets/audio/break.wav')
        hbreak.volume = v
        hbreak.play()
    }

    cycleSound(v=.1) {
        var hbreak = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/assets/audio/break.wav')
        hbreak.volume = v
        hbreak.play()
    }

    jumpSound(v=.1) {
        var jump = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/assets/audio/jump.wav')
        jump.volume = v
        jump.play()
    }

    hookSound(v=.1) {
        var hook = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/assets/audio/hook.wav')
        hook.volume = v
        hook.play()
    }

    hookHitSound(v=.15) {
        var hookHit = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/assets/audio/hookHit.wav')
        hookHit.volume = v
        hookHit.play()
    }

    hurtSound(v=.2) {
        var hurt = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/assets/audio/hurt.wav')
        hurt.volume = v
        hurt.play();
    }

    menuSound(v=.15) {
        var menu = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/assets/audio/menu.wav')
        menu.volume = v
        menu.play();
    }

    wallJumpSound(v=.2) {
        var wallJump = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/assets/audio/wallJump.wav')
        wallJump.volume = v
        wallJump.play();
    }

    powerUpSound(v=.05) {
        var wallJump = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/assets/audio/powerup.wav')
        wallJump.volume = v
        wallJump.play();
    }
    key = false

    playSound(){
        this.breakSound(.01)
        this.jumpSound(.01)
        this.hookSound(.01)
        this.hookHitSound(.01)
        this.hurtSound(.01)
        this.menuSound(.01)
        this.wallJumpSound(.01) 
    }
        
    async playSongLoop(v = .2){


        while(true){
                var songNum = Math.floor(Math.random() * 10) + 1
                this.song = new Audio(`https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/assets/audio/music/song${songNum}.WAV`)
                this.song.volume = v
                await this.sleep(2000)
                this.song.play()
            
                await this.sleep(this.songLength[songNum - 1])
            
            
        }
    }

    songMuteBrains(){
        if(this.game.debug.mute){
            this.song.volume = 0
            console.log("the game is muted")
        } else{
            this.song.volume = .2
        }
    }

        
    sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
}