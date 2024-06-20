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
        this.hitboxes[this.hitboxes.length] = new Hitbox(6528,1722,133,161 ) 
        this.hitboxes[this.hitboxes.length] = new Hitbox(6789,1869,611,156 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6945,1727,133,211 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(5653,905,2045,639 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6209,648,170,89 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6868,653,227,94 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6702,-2508,971,2490 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7366,560,1370,1444 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7598,-2395,753,2554 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8719,-591,953,2631 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8154,-2472,1534,1496 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9616,-590,2043,2439 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9596,-1129,220,153 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10436,-2094,822,1645 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10249,-1125,224,580 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10248,-1645,229,188 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9595,-2080,231,216 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10248,-1744,250,390 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10253,-2134,1005,146 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9536,-1586,311,273 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8150,-3204,1538,796 ) 
        this.hitboxes[this.hitboxes.length] = new Hitbox(9226,-4165,2042,1434 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7337,-4341,2020,1397 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8672,-591,69,1231 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11188,-1339,1789,1060 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11533,-1518,206,252 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11933,-1518,229,202 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(12347,-1520,281,195 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10991,-2134,2073,926 ) 
        this.hitboxes[this.hitboxes.length] = new Hitbox(13050,-2136,2041,1128 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11073,-4835,2869,1436 )
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
        this.hitboxes[this.hitboxes.length] = new Hitbox(5278,-8640,2806,6079 ) // 100
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
        this.hitboxes[this.hitboxes.length] = new Hitbox(-11284,-16443,1119,806 ) // 150
        this.hitboxes[this.hitboxes.length] = new Hitbox(-11530,-17829,2296,1395 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-11858,-16615,768,716 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-9287,-17903,1878,746 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-7444,-17792,709,1334 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-6673,-16005,10242,1861 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-12291,-18555,1507,2561 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-15564,-18557,2460,5656 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-6819,-18676,1140,2217 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-10918,-18676,5239,992 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-4954,-18053,181,137 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-4360,-21895,1667,3545 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-8346,-22363,2672,3777 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-5925,-21762,1957,1615 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-2392,-17989,233,179 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-4782,-22206,3707,2058 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-1137,-21710,1449,2695 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-1133,-18563,1413,2000 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(172,-16067,1008,184 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(229,-18564,1264,1365 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(205,-20584,1400,945 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-1944,-18713,217,131 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(2272,-18926,344,146 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(1429,-18565,511,127 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6938,-21146,374,861, false, true, "A", 0,-1 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(5595,-22461,2425,1358 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(2879,-18566,435,127 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(128,-22180,1479,1626 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(1575,-22561,2373,1563 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(3244,-21050,2317,1407 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(3876,-22478,1937,1524 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-1190,-22854,2956,1264 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(5347,-20974,467,1333 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6393,-20335,1603,3011 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(3960,-19768,318,207 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(4045,-18586,452,129 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(5955,-18594,443,129 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(5213,-19242,268,127 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-12434,-18559,165,3572, false, true ) 
        this.hitboxes[this.hitboxes.length] = new Hitbox(-13137,-18555,165,3927, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6988,-13351,1525,1888 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7770,-20333,2195,1258 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8584,-21893,1758,2466 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6396,-23290,3929,935 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11800,-22456,219,661, false, true, "B", 0,-1 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(12099,-22451,210,652, false, true, "C", 0,-1 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10234,-21421,1092,534 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11692,-21898,745,1994 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11676,-23375,763,1028 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10227,-23400,1095,394 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6528,-24266,3730,1398 ) // 200
        this.hitboxes[this.hitboxes.length] = new Hitbox(15093,-17714,1779,2675, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9504,-17718,4657,2679, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8690,-21019,2636,3425 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11692,-20254,2468,996, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11032,-18331,3285,763 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(13291,-18580,275,278 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14933,-18320,1023,755 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(15461,-19260,494,1694 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(15910,-19326,1082,1735 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(13875,-20242,3229,986, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14416,-17200,393,228 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14415,-15569,185,126 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10972,-22057,340,221 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(15385,-17945,2533,4394 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10766,-17686,3121,4138 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(12462,-14266,4591,1414 )
        
        
        
        

        this.stairs(11865,-2135,746,4, 200, 1)
        this.stairs(-9728+1000,-16007,746,4,200, 1)

        this.hitboxes[this.hitboxes.length] = new Hitbox(5103,-2214,285,515 ) // blocking secret paths 
        this.hitboxes[this.hitboxes.length] = new Hitbox(19224,-10601,322,753 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(13388,-8371,1441,365 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-13480,-18584,1620,353 )


        //this.hitboxes[this.hitboxes.length] = new Hitbox(7918,-21610,716,160 ) // blocking main path

        this.hitboxes[this.hitboxes.length] = new Hitbox(-17581,5295,2843,950 ) // debug room
        this.hitboxes[this.hitboxes.length] = new Hitbox(-15486,4078,750,2167 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-19101,3322,4658,881 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-14970,3411,2142,2475 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-14797,5687,2359,1258 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-19134,3966,3711,840 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-16017,4776,85,184 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-16478,4691,97,268 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-16963,4573,129,395 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-17487,4623,122,351 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-17978,4660,122,318 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-15566,4774,172,174 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-17876,6826,3166,3101 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-14794,6892,2603,2860 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-19238,5301,1700,948 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-14874,6199,118,113 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-14870,6729,115,118 )
        
        
        
 
        
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
