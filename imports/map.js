import { Map as MainGround } from "../system/map-player/map/mapCarryers/Map.js"
import { Death as MainLava } from "../system/map-player/map/mapCarryers/DeathMap.js"
import { Teleport as MainTeleport } from "../system/map-player/map/mapCarryers/Teleport.js"
import { Checkpoint as MainCheckpoint } from "../system/map-player/map/mapCarryers/checkpoint.js"

import { Map as ShortsGround } from "../system/map-player/map/mapCarryers/otherMaps/shorts/Map.js"

export class Map{
    ground
    lava
    teleport
    game
    checkpoint


    constructor(root){
        this.Main()
        this.game = root
    }

    shorts() {
        this.ground = new ShortsGround()
    
    }

    Main() {
        this.ground = new MainGround();
        this.lava = new MainLava()
        this.teleport = new MainTeleport()
        this.checkpoint = new MainCheckpoint() //-438, -509


    }
}

