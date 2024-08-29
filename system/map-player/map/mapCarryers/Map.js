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

  
        this.hitboxes[this.hitboxes.length] = new Hitbox(60,94,140,492, false, true, "fastpass", 0,-1  )

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
        this.hitboxes[this.hitboxes.length] = new Hitbox(8824,-24591,2496,1239 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(12407,-23374,1552,774 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11289,-24605,2641,381 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(12948,-24237,87,91 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(12887,-24264,200,128 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(13947,-23371,2147,771 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14704,-26124,1390,3524 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10943,-26111,2989,1629 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14209,-26016,223,121 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14890,-27222,1249,1233 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11668,-27222,4471,457 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(12020,-26773,1508,166 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10477,-27410,1215,645 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10477,-27410,516,2872 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8827,-27434,1738,3029 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8778,-28991,7903,1948 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(15862,-27471,1659,4711 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(12423,-21814,1092,1641 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(13417,-20378,3693,196 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14712,-21845,1087,1611 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(15806,-22890,1714,290 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(15762,-21276,1348,918 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(13942,-21241,349,240 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14958,-22732,2575,336 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(16329,-22518,2024,753 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(17493,-25043,1633,2535 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(18296,-24338,1966,2571 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(17992,-21849,225,1097 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(16745,-19284,3616,367 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(15887,-20283,1224,1220 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(17933,-20865,340,175 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(19168,-21090,225,106 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(16843,-19040,3512,6090 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(21112,-23015,255,155 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(22555,-24138,308,168 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(22045,-23346,255,138 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(23194,-25090,183,157 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(22290,-27446,279,918 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(22889,-28021,442,1181 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(22153,-27446,183,919 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(22166,-28468,187,200 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(26206,-27021,677,349 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(26206,-27021,677,349 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(23189,-28887,200,153 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(23428,-31640,154,109 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(22387,-32142,157,111 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(20948,-31911,479,177 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(20950,-32253,147,517 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(21086,-32253,347,102 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(20709,-32253,377,519 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(27548,-28411,345,121 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(27780,-28550,113,260 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(27999,-29951,117,355, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(27654,-29955,126,353, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(27656,-30373,464,132, false, true )
        
        this.hitboxes[this.hitboxes.length] = new Hitbox(28735,-30414,330,57, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(28808,-30975,247,58 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(27503,-31428,389,57 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(28437,-32315,279,75 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(27399,-31650,119,279 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(29059,-32591,253,64 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(29274,-32906,253,381 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(29065,-32906,462,62 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(28895,-29212,187,149 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(29077,-26221,170,55 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(28247,-25120,245,58 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(28876,-25518,119,117 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(29367,-25579,259,68 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(29023,-26142,228,55, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(29331,-24302,328,60 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(29175,-25058,274,79 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(29930,-25063,172,64 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(30053,-25830,81,366 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(30053,-25913,406,257 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(30374,-25913,85,445 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(29852,-24685,130,91 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(29801,-29872,200,72 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(30854,-29196,370,74 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(31631,-29588,113,119 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(29658,-31023,198,98 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(30969,-31506,164,70 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(30865,-31840,153,66 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(30706,-32124,81,228 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(30521,-32788,168,94 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(30026,-33112,83,292 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(29327,-33554,342,55 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(29327,-33848,187,349 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(29508,-33848,168,57 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(32314,-28866,204,136 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(31691,-28344,157,117 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(32911,-29636,98,596 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(33570,-30307,170,109 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(33320,-30868,185,94 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(32641,-30993,455,60 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(32641,-31329,247,396 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(32881,-31329,219,53 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(31890,-27859,347,70 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(31582,-27735,236,106 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(31585,-26799,289,81 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(30757,-26366,258,200 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(31562,-26251,77,402 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(31628,-26251,419,204 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(31971,-26066,75,219 )
        
        this.hitboxes[this.hitboxes.length] = new Hitbox(-567,-2816,5148,1106 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(4965,-8306,368,5276 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(3855,-4318,1228,923 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(1074,-4289,1512,1503 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(3171,-4351,149,121 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(1035,-5708,1564,423 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(2493,-6676,2728,1086 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(1126,-6652,1396,970 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(4045,-5787,1025,1518 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-1689,-4291,2882,969 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(1033,-6654,230,1119 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(2529,-3410,276,106 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-422,-5195,491,253 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(42,-6478,200,441 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-1272,-6342,242,279 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(1036,-7865,1520,1269 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-2321,-5391,271,189 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-1395,-5570,251,285 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-940,-8252,1979,1041 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-3219,-7507,1641,296 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-3219,-7511,362,4932 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-2992,-4287,1835,1708 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-4911,-7516,1813,4573 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-2514,-9650,3394,1513 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-4788,-7750,3210,292 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-5066,-8313,2167,639 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-5073,-9123,776,901 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-5069,-10155,779,592 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-4264,-10867,2745,816 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-4264,-10861,6633,810 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-4264,-10859,6963,808 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-2515,-10095,2034,472 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-2975,-9327,191,91 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-3694,-8386,236,128 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-4332,-9044,115,200 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-4340,-8394,285,121 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(2568,-14225,2577,1242 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-970,-10451,5492,1698 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(408,-9225,4681,1584 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(2333,-8168,3133,1547 )

        this.hitboxes[this.hitboxes.length] = new Hitbox(-6958,-9678,170,575, false, true, "backtracksecret", 0,-1   )
 
        this.hitboxes[this.hitboxes.length] = new Hitbox(-7339,-10284,2686,568 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-5786,-9125,1072,6182 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-8113,-9127,1712,6182 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-6993,-9163,249,49 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-6998,-9760,254,93 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-6134,-7127,276,62 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-6204,-6580,121,94 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-5903,-3680,83,460, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-10176,-2185,2820,117 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-9283,-2185,1544,1715 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-3859,-3108,1661,2521 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-10177,-2099,932,143 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-10839,-2740,153,119 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-11952,-2967,143,111 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-14635,-2505,1799,6219 )

        this.hitboxes[this.hitboxes.length] = new Hitbox(-16142,-2533,881,185, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-16034,-2440,665,3714, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-16454,-3175,561,132, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-16378,-4627,424,1495, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-17287,-4021,926,320, false, true  )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-19026,-4952,1162,1063, false, true  )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-16381,-5752,432,1169, false, true  )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-20301,-4950,1383,136, false, true  )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-20313,-3999,1439,107, false, true  )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-22506,-3933,797,1264, false, true  )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-24335,-5436,502,521, false, true  )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-24333,-5019,501,932, false, true  )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-22311,-6503,132,778 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-23381,-6974,160,140 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-25106,-7285,687,187, false, true  )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-25106,-7676,480,579, false, true  )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-25695,-8511,262,590, false, true  )
 
        
        
        
 
        

        this.hitboxes[this.hitboxes.length] = new Hitbox(23969,-30060,926,219, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(23972,-30743,932,168, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(23971,-31167,159,497, false, true  )
 
        this.hitboxes[this.hitboxes.length] = new Hitbox(26721,-27989,406,441, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(25354,-28392,1773,421, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(25357,-27559,561,1320, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(25356,-27605,1006,68, false, true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(26133,-27979,128,381, false, true, "D", 0,-1  )
        this.hitboxes[this.hitboxes.length] = new Hitbox(25985,-27979,104,381, false, true, "E", 0,-1  )
        this.hitboxes[this.hitboxes.length] = new Hitbox(25819,-27979,89,381, false, true, "F", 0,-1  )
        this.hitboxes[this.hitboxes.length] = new Hitbox(25665,-27979,98,381, false, true, "G", 0,-1  )
        this.hitboxes[this.hitboxes.length] = new Hitbox(25533,-27979,75,381, false, true, "H", 0,-1  )
        this.hitboxes[this.hitboxes.length] = new Hitbox(25383,-27979,91,381, false, true, "I", 0,-1  )
        
 
        

        this.stairs(11865,-2135,746,4, 200, 1)
        this.stairs(-9728+1000,-16007,746,4,200, 1)
        this.stairs(-14185,-2505,730,77 ,200, 1)
 

        //this.hitboxes[this.hitboxes.length] = new Hitbox(5103,-2214,285,515 ) // blocking secret paths 
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
 
        this.hitboxes[this.hitboxes.length] = new Hitbox(1899,7138,1400,1816 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6,5625,2000,2722 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(1764,5114,1550,1478 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(268,5114,3044,585 )
        
        
 
        
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
