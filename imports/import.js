import { Map } from "./map.js"

import { GameDisplayer } from "../system/variousParts/GameDisplayer.js"
import { Player } from "../system/map-player/player/Player.js"
import { KeyManager } from "../system/variousParts/KeyMan.js"
import { Debug } from "../debug.js"
import { Camera } from "../system/map-player/player/Camera.js"
import { Edit } from "../system/map-player/map/otherParts/MapEditor.js"
import { Menu } from "../system/variousParts/menu/Menu.js"
import { Keys } from "../system/map-player/map/otherParts/Keys.js"
import { DrawUtils } from "../utils/DrawUtils.js"
import { Background } from "../system/map-player/map/mapCarryers/Background.js"
import { Trigger } from "../system/map-player/map/mapCarryers/Triggers.js"
import { Hook } from "../system/map-player/player/heldItems/hookI.js"
import { Hook as HookII } from "../system/map-player/player/heldItems/hookII.js"
import { Storage } from "../storage/storage.js"
import { Sound as Audio } from "../system/map-player/map/otherParts/audio.js"
import { Spawn } from "../system/map-player/map/mapCarryers/enemySpawn.js"
import { Held } from "../system/map-player/player/heldItems/holdManager.js"
import { Bazooka } from "../system/map-player/player/heldItems/Bazooka.js"
import { Shotgun } from "../system/map-player/player/heldItems/Shotgun.js"
import { Dash } from "../system/map-player/player/heldItems/dash.js"

export class Game{
    // System
    gameDisplayer;
    player;
    enemy;

    // fields
    
    shotgun = new Shotgun(this)
    dash = new Dash(this)
    keyManager = new KeyManager(this);
    debug = new Debug(this.keyManager, this);
    menu = new Menu(this)
    drawUtils = new DrawUtils()
    storage = new Storage(this)
    camera = new Camera(850, 600, this.debug, this.keyManager, this)
    mapEdit= new Edit(this.camera, this.keyManager, this.drawUtils, this)
    keys = new Keys(this.camera, this)
    Background = new Background(this.camera)
    audio = new Audio(this)
    held = new Held(this)
    bazooka = new Bazooka(this)
    trigger = new Trigger(this)
    main 
    enemy
    
    constructor(tld) {
        this.player = new Player(-438, -509, 
            this.keyManager, 
            this.debug, 
            this.map, 
            this.camera, 
            this.deathMap, 
            this.checkpoint, 
            this.teleport,
            this
        );

        this.main = tld

        this.gameDisplayer = new GameDisplayer(
            this, 
            this.map, 
            this.camera, 
            this.player,
            this.debug, 
            this.deathMap, 
            this.Background, 
            this.checkpoint, 
            this.teleport,
        );

        this.enemy = new Spawn(this, false)

        
    }
    map = new Map(this);
    hook = new Hook(this)
    hookII = new HookII(this)
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
}