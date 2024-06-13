'use strict';

import { Hitbox } from "../../Hitbox.js";
import { DrawUtils } from "../../../../utils/DrawUtils.js"

export class Map {

    // fields
    hitboxes = new Array();
    drawU = new DrawUtils()

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {

  //this.hitboxes[24] = new Hitbox(1451.1362846604356,-2156.2176276689797,208,262.00046251742333,false )

        this.hitboxes[this.hitboxes.length] = new Hitbox(-1010, 561, 3496, 1550);
        this.hitboxes[this.hitboxes.length] = new Hitbox(-2452,-3521,2564,5660 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-101,-1800,2239,1985 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(3244,562,2582,1485 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(2030,-1824,2437,1555 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(3617,-1733,1672,1917 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(5606,-89,2138,249 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(5169,-1733,1066,1321 )

        


        this.hitboxes[this.hitboxes.length] = new Hitbox(5512,1868,1388,163 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6038,1720,126,165 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6528,1722,133,161 ) // 10
        this.hitboxes[this.hitboxes.length] = new Hitbox(6789,1869,611,156 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6945,1727,133,211 )

        this.hitboxes[this.hitboxes.length] = new Hitbox(5653,905,2045,639 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6209,648,170,89 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6868,653,227,94 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6702,-2508,971,2490 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7366,560,1370,1444 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7598,-2395,753,2554 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8719,-591,953,2631 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8154,-2472,1534,1496 ) // 20
        this.hitboxes[this.hitboxes.length] = new Hitbox(9616,-590,2043,2439 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9596,-1129,220,153 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10436,-2094,822,1645 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10249,-1125,224,580 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10248,-1645,229,188 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9595,-2080,231,216 )
        
        this.hitboxes[this.hitboxes.length] = new Hitbox(10248,-1744,250,390 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10253,-2134,1005,146 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9536,-1586,311,273 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8150,-3204,1538,796 ) // 30
        this.hitboxes[this.hitboxes.length] = new Hitbox(9226,-4165,2042,1434 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7337,-4341,2020,1397 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8672,-591,69,1231 )

        this.hitboxes[this.hitboxes.length] = new Hitbox(11188,-1339,1789,1060 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11533,-1518,206,252 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11933,-1518,229,202 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(12347,-1520,281,195 )
        
        this.hitboxes[this.hitboxes.length] = new Hitbox(10991,-2134,2073,926 ) 
        this.hitboxes[this.hitboxes.length] = new Hitbox(13050,-2136,2041,1128 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11073,-4835,2869,1436 ) // 40
        this.hitboxes[this.hitboxes.length] = new Hitbox(13243,-4601,1383,1873 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(15019,-2909,737,1490 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14419,-4602,1358,1152 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(15091,-2909,1591,1819 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14468,-5355,3131,986 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(16429,-3947,1202,1144 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(16348,-3947,117,96 ) 
        this.hitboxes[this.hitboxes.length] = new Hitbox(14516,-3318,1383,96 )

        this.hitboxes[this.hitboxes.length] = new Hitbox(13244,-2867,1382,382 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14588,-3546,1190,318 ) // 50
        this.hitboxes[this.hitboxes.length] = new Hitbox(11150,-2756,119,124 )
        
        this.hitboxes[this.hitboxes.length] = new Hitbox(16571,-2920,1058,3786 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14647,-1214,1943,2224 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(17610,-3946,110,94 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(18444,-6141,1980,7010 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(18444,-9851,2195,10720 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(16334,-9838,1265,3962 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(17593,-5980,108,105 )
        
        this.hitboxes[this.hitboxes.length] = new Hitbox(14468,-6327,1274,1026 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(15687,-6327,142,105 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(16252,-5972,115,96 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14453,-8067,1937,1264 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11074,-5413,3604,915 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(13504,-6057,229,716 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(13436,-6108,368,128 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(13492,-8551,254,2004 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(13424,-6660,382,124 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(12731,-6171,320,112 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(12800,-8877,182,2737 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11926,-5959,215,570 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11876,-6014,341,110 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11876,-6517,339,119 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11867,-7000,348,126 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11952,-6938,190,499 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11874,-7488,344,108 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11959,-8930,194,1479 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(12003,-8871,889,860 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(12944,-8886,799,1706 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14383,-6328,107,103 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14385,-6908,188,105 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14454,-8710,1936,701 )
        
        this.hitboxes[this.hitboxes.length] = new Hitbox(7337,-5413,4206,2080 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(4966,-3088,3343,942 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11026,-7362,154,355 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9537,-7296,1521,215 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9448,-7360,160,348 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10205,-7202,189,635 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10153,-6646,312,130 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10447,-9050,201,1809 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10581,-9050,1430,1240 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9855,-8588,664,202 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9855,-8581,183,607 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9788,-8013,323,147 )
        
        this.hitboxes[this.hitboxes.length] = new Hitbox(10449,-12262,3290,3494 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9211,-9929,1320,151 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9211,-9862,151,632 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9153,-9323,257,146 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8086,-11087,2482,1348 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7391,-8806,945,227 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(5278,-8640,2806,6079 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(5277,-8807,2179,313 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(5278,-9491,2133,770 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8087,-9776,124,135 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6421,-11597,1739,1563 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7662,-12639,3026,1694 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11125,-3551,2358,241 )
 
        this.hitboxes[this.hitboxes.length] = new Hitbox(7378,-9489,89,64 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7378,-9489,142,108 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(4054,-11594,1651,3434 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(5605,-10839,488,144 )

        this.hitboxes[this.hitboxes.length] = new Hitbox(6419,-12552,668,1011 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(4116,-12552,2971,482 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(4117,-13385,2975,1090 )
        
        
        this.hitboxes[this.hitboxes.length] = new Hitbox(2770,-11594,1292,307, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(2774,-12361,1360,291, false, true )

 
        this.hitboxes[this.hitboxes.length] = new Hitbox(18346,-9851,112,94 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(16346,-9851,1345,87 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(16116,-10643,1325,894 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(16979,-11477,3013,979 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(16102,-11476,936,960 )

 
        this.hitboxes[this.hitboxes.length] = new Hitbox(2602,-11421,1561,1293 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(1932,-11594,905,1710 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(2678,-13399,1479,1209 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(1946,-13246,916,1178 )
        
        this.hitboxes[this.hitboxes.length] = new Hitbox(-602,-11595,2543,739, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-619,-13192,2579,532, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-1679,-12261,1472,1413, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(1933,-13252,635,1191, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-411,-11600,2975,882, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-236,-12263,875,154, false, true )

        this.hitboxes[this.hitboxes.length] = new Hitbox(-618,-13949,1164,849, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-2848,-13878,2275,647, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-4131,-12249,1526,1417, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-3533,-13885,931,1254, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(418,-13957,3015,956, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(1081,-12272,266,144, false, true )
 
 
        
        this.hitboxes[this.hitboxes.length] = new Hitbox(-5581,-13188,1618,3136 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-3542,-15056,284,2434 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-3312,-15049,6810,1199 )
        
        this.hitboxes[this.hitboxes.length] = new Hitbox(-4760,-15072,1232,1525 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-7407,-13190,1997,1510 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-6756,-15278,2044,1204 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-8457,-13797,1178,2550 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-9728,-16007,3155,1330 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-10327,-15162,741,1561 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-11557,-12662,3186,1120 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-4006,-12250,757,2150 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-13547,-14646,2065,3316 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-12278,-16099,1438,1110 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-11284,-16443,1119,806 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-11530,-17829,2296,1395 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-11858,-16615,768,716 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-9287,-17903,1878,746 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-7444,-17792,709,1334 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-6673,-16005,10242,1961 )
        
        this.hitboxes[this.hitboxes.length] = new Hitbox(-12291,-18555,1507,2561 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-15564,-18557,2460,5656 )
        

        this.hitboxes[this.hitboxes.length] = new Hitbox(-12434,-18559,165,3572, false, true ) 
        this.hitboxes[this.hitboxes.length] = new Hitbox(-13137,-18555,165,3927, false, true )

        this.stairs(11865,-2135,746,4, 200, 1)
        this.stairs(-9728+1000,-16007,746,4,200, 1)

        768,716


        this.hitboxes[this.hitboxes.length] = new Hitbox(7164,-11676,178,130 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7417,-11678,174,114 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7585,-12083,135,218 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7882,-12712,270,106 )
 
        
    }

    stairs(x, y, width, height, step, stepH){
        for(let i = 0; i < step; i++){
            this.hitboxes[this.hitboxes.length] = new Hitbox(x + stepH * (i),y - stepH * (i),width - stepH * (i * (2)),height)
        }
    }

    draw(cameraX, cameraY, color = "#0f0f0f") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }
    nDraw(camera, color = "#0f0f0f") {
        for (let i = 0; i < this.hitboxes.length; i++) {
            if(this.hitboxes[i].extraInfoI) {
                color = "#1f1f1f"
            }
            this.hitboxes[i].nDraw(camera, color);
            color = "#0f0f0f"
        }
    }
}
