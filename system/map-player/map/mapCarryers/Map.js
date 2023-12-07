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

        this.hitboxes[0] = new Hitbox(-810, 561, 3296, 1550, false);
        this.hitboxes[ 3 ] = new Hitbox( -1024.7860391771198 , -65.27843357064609 , 1078.9999169405419 , 926.7784335706135 , false )
        this.hitboxes[ 1 ] = new Hitbox( -1020.3557599703686 , -757.0166034383657 , 2310.7671079087622 , 933.9944019380071 , false )
        this.hitboxes[ 2 ] = new Hitbox( 1520.6442400475894 , -756.0224994350601 , 700.0000000001269 , 952.9999899576599 , false )
        this.hitboxes[ 4 ] = new Hitbox( 996.1738945747691 , -1167.0391034409804 , 105 , 218.0000000026132 , false )
        this.hitboxes[ 5 ] = new Hitbox( 1681.173894574768 , -1393.0391034383647 , 60 , 169 , false )
        this.hitboxes[ 6 ] = new Hitbox( 0,0,0,0, false )
        this.hitboxes[ 7 ] = new Hitbox( 0,0,0,0, false )
        this.hitboxes[ 10 ] = new Hitbox( 1798.4962310160906 , -2078.696439163481 , 1878 , 1895.001228150091 , false )
        this.hitboxes[ 8 ] = new Hitbox( 3058.4962307755827 , 581.3035608364256 , 861.0000002404895 , 905.000000000077 , false )
        this.hitboxes[ 9 ] = new Hitbox( 3167.610285366167 , -1051.6706698869948 , 913.7298171868465 , 1260.9742307245172 , false )
        this.hitboxes[ 11 ] = new Hitbox( 191.2324388841189 , -2558.757099941173 , 2568.6330433808441 , 612.0237275325303 , false )
        this.hitboxes[ 14 ] = new Hitbox( -1870.8983563362772 , -1699.3320322716108 , 2100.225406037356 , 1141.982234339685 , false )
        this.hitboxes[ 13 ] = new Hitbox( -2105.631879977191 , -2773.561230225233 , 1643.653863881141 , 1281.4502726516807 , false )
        this.hitboxes[ 12 ] = new Hitbox( -2105.631879977191 , -2773.561230225233 , 3765.95889105883 , 495.2210267864475 , false )
        
        this.hitboxes[ 15 ] = new Hitbox( 0,0,0,0, false )
        this.hitboxes[16] = new Hitbox(3851.340102553015,583.219692866808,1755.817818740457,1219.9958177544272 )
        this.hitboxes[17] = new Hitbox(4436.340103879944,-242.78030713316832,1540.9987705211997,866.9999892455901 )
        this.hitboxes[18] = new Hitbox(3972.3401025540848,-1561.0579773613297,1866.946600881693,1012.2776642992159 )
        this.hitboxes[19] = new Hitbox(5827.1789035139,-1592.8001638042379,1136.9999942334844,931.9964876769224 )
        this.hitboxes[20] = new Hitbox(6777.178903432223,-216.80280713316677,1137.8707834873076,1716.9958303105805 )
        this.hitboxes[21] = new Hitbox(5461.179185151041,-243.80260586217184,516.9997182811694,1823.5269399179128 )
        this.hitboxes[22] = new Hitbox(6920.17886981648,-1621.870036142584,920.4405295700999,1054.9880723326844 )

        this.hitboxes[23] = new Hitbox(6301.093387062019,-719.6759717106839,143.9382395501616,248.85296116875134 )
        this.hitboxes[24] = new Hitbox(7877.196439752851,-217.8253071333403,1699.9464382741107,1413.443379702473 )
        this.hitboxes[25] = new Hitbox(8102.1964397506,-1617.8253066969382,1528.608356580231,1421.9999995639923 )
        this.hitboxes[26] = new Hitbox(7782.209614185747,-1668.82530713317,57.98682556719814,80.99774332616926 )
        this.hitboxes[27] = new Hitbox(8103.196439752923,-1670.8253071331674,71,71 )
        this.hitboxes[28] = new Hitbox(7880.196439752923,-2154.825264763885,170,113.99995764341702 )
        this.hitboxes[29] = new Hitbox(3082.254691568597,-1621.8253071331637,4044.9417481843166,601.4816499526287 )

        this.hitboxes[30] = new Hitbox(8171.484269057653,-2504.7262332854343,159.51573259681572,99.70373348243675 )
        this.hitboxes[31] = new Hitbox(7509.4981496721875,-2752.9199218508475,174.50250301802316,146.89755623398378 )
        this.hitboxes[32] = new Hitbox(6657.002874381109,-2936.022499939694,434.99712573889246,1399.422760467041 )
        this.hitboxes[33] = new Hitbox(6887.000000000009,-4205.832906832001,204.99998686190884,962.8104098816175 )
        this.hitboxes[34] = new Hitbox(6410.00000000045,-3425.0231544486905,284.0031634975885,172.00065444860002 )
        this.hitboxes[35] = new Hitbox(5939.18963954203,-4240.199318697485,491.81036050766306,987.1739154365159 )
        this.hitboxes[36] = new Hitbox(6632.0000000000255,-3699.0224999999973,81,62 )
        this.hitboxes[37] = new Hitbox(6631.0000000000255,-4064.9964795578835,80,75.97398116344903 )
        this.hitboxes[38] = new Hitbox(5941.000003779638,-4527.0224999994025,747.9999962203929,316.99999999941065 )
        this.hitboxes[39] = new Hitbox(6889.00000000002,-4517.022499999992,202,315 )
        this.hitboxes[40] = new Hitbox(5086.000015056833,-2937.022499999989,1718.9999849431815,1183.6021034689197 )
        this.hitboxes[41] = new Hitbox(5418.000000000007,-3340.0224999999746,95,51.000000075768185 )
        this.hitboxes[42] = new Hitbox(5417.000000000007,-3455.0224999999855,95,47 )
        this.hitboxes[43] = new Hitbox(3986.000000003907,-5388.350326416094,1133.9999999961046,3585.3278139786553 )
        this.hitboxes[44] = new Hitbox(5392.998666387001,-3822.0210593041684,85.00133361278495,37.99855930442391 )
        this.hitboxes[45] = new Hitbox(5391.999999147283,-4245.022482734796,579.998639929503,159.99998274562677 )
        this.hitboxes[46] = new Hitbox(5941.000000001817,-4798.022499999794,195.1208525109223,330.01264678392 )
        this.hitboxes[47] = new Hitbox(4293.447191361412,-6227.782525991459,2213.512173910821,1075.738649877645 )
        this.hitboxes[48] = new Hitbox(5598.003184987808,-4716.023395322594,69.99681509679431,77.00089529881825 )
        this.hitboxes[49] = new Hitbox(6410.000644123958,-6198.813147541356,678.9993558760543,1436.7906474506945 )
        this.hitboxes[50] = new Hitbox(5312.00493277002,-1877.0931268390468,1534.268265715751,451.0583734779502 )
        this.hitboxes[51] = new Hitbox(7262.239470444719,-4522.28095005924,122.74928024426299,71.25462968242573 )
        this.hitboxes[52] = new Hitbox(7656.000000000018,-4316.110728298629,122,101.08822853356924 )
        this.hitboxes[53] = new Hitbox(8195.878571525434,-4082.12006230094,137.12129962206745,77.09745877389105 )
        this.hitboxes[54] = new Hitbox(5692.869941777493,-3435.0449999999882,273,152 )
        this.hitboxes[55] = new Hitbox(5042.869941777493,-3829.0449999999882,173,107 )
        
        
        
        
        /**/   
    }

    draw(cameraX, cameraY, color = "#0f0f0f") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }


}
