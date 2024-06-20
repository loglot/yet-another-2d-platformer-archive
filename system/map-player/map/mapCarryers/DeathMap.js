'use strict';

import { Hitbox } from "../../Hitbox.js";

export class Death {

    // fields
    hitboxes = new Array();

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {
        //this.hitboxes[ 0 ] = new Hitbox( 0 , 0 , 0 , 0 , false )




        this.hitboxes[0] = new Hitbox(5561,-59,64,183 )
        this.hitboxes[1] = new Hitbox(5200,-57,132,181 )
        this.hitboxes[2] = new Hitbox(2284,916,1098,1080 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(5741,697,1905,403 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10316,-2057,238,957 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9641,-3182,147,2128 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8950,-637,172,66 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9472,-648,135,78 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6186,-1708,59,1270 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9474,-2805,1700,140 ) 
        this.hitboxes[this.hitboxes.length] = new Hitbox(14566,-2828,114,220 ) // 10
        this.hitboxes[this.hitboxes.length] = new Hitbox(14946,-2826,140,222 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(15744,-4451,99,1142 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(16373,-3873,334,1066 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(17518,-3891,156,4716 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(18411,-9790,63,10657 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(17556,-9799,92,3884 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14414,-6238,94,889 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11047,-5442,3408,101 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(13460,-7377,75,772 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(12954,-7255,540,112 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(13696,-8865,78,2257 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14413,-8680,73,1836 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(12037,-5941,138,673 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11890,-5964,82,635 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11990,-6425,108,451 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(12110,-6949,64,458 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11915,-6950,82,490 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11922,-8958,101,1531 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(15683,-6259,107,987 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(16291,-6890,59,964 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10596,-7334,453,105 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10615,-7856,87,619 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10651,-7847,1310,76 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10370,-7110,678,67 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10355,-7093,73,474 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10183,-7126,67,523 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9588,-7126,613,76 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9540,-7324,934,107 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9883,-7913,91,621 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10403,-8448,76,1185 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10013,-8450,430,92 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10009,-8387,66,397 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7378,-5443,3879,126 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8142,-9851,2544,151 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9181,-9760,55,509 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9299,-9787,91,516 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8026,-8670,92,3240 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8007,-8781,357,227 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7321,-9427,138,733 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6966,-9727,96,296 ) // 50
        this.hitboxes[this.hitboxes.length] = new Hitbox(6652,-9524,410,94 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(17428,-2002,1268,455, true)
        this.hitboxes[this.hitboxes.length] = new Hitbox(-1726,-11649,97,776 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-2681,-11656,114,783 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-2741,-11503,1125,832 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-1388,-12818,181,599 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(615,-12252,57,131 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(1322,-11655,525,94 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-6666,-13226,1295,115 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-5849,-14166,122,545 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-4805,-14103,131,523 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-6665,-13617,137,471 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-7356,-13200,720,124 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-7393,-13735,159,645 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-6797,-14762,74,632 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-9674,-14762,2967,113 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-9666,-14694,124,1043 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-7976,-14211,157,479 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-11532,-12706,3105,69 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-7365,-13232,728,126 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-9727,-14865,3075,233 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-10735,-14233,476,161 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-11674,-14594,244,1967 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-10382,-14454,131,298 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-5701,-18630,75,2022 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-13065,-17229,129,1449 ) 
        this.hitboxes[this.hitboxes.length] = new Hitbox(-12486,-17238,80,1463 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-4983,-17999,242,118 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-5038,-16045,8352,64 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-4874,-17895,45,400 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-4841,-17532,2167,38 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-5787,-20362,167,1797 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-5675,-20325,1443,238 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-4413,-20142,87,1669 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-2702,-17530,435,40 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-2318,-17792,54,285 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-2422,-17905,293,132 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-2744,-20173,90,1700 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-2727,-20188,1868,81 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-1175,-20111,77,998 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-1165,-18521,1405,1998 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-1964,-18668,257,104 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(972,-19206,131,661 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(1467,-18523,2602,1213 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(2364,-19465,162,958 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(268,-19662,1280,52 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(225,-21892,1415,2287 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(1515,-22115,2380,1144 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(3213,-22094,2243,2483 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(4044,-18521,2442,1210 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(5407,-19831,358,224 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(3846,-19100,247,604 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(4481,-19681,238,607 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11989,-18793,224,492 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(12529,-19320,233,604 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(13340,-18942,169,652 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14273,-18280,94,657 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14874,-18285,97,659 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(1060,-12255,305,109 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14112,-16606,706,124 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14456,-15887,783,134 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14073,-15224,779,151 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14452,-15818,109,345 )
        
    }

    draw(cameraX, cameraY) {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            if(this.hitboxes[i].extraInfoI){
                this.hitboxes[i].draw(cameraX, cameraY, "#500000");
            } else {
                this.hitboxes[i].draw(cameraX, cameraY, "#900000");

            }
        }

    }
    nDraw(camera) {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            if(this.hitboxes[i].extraInfoI){
                this.hitboxes[i].nDraw(camera, "#300000");
            } else {
                this.hitboxes[i].nDraw(camera, "#700000");

            }
        }

    }
}
