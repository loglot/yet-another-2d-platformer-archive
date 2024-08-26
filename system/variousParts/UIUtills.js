const canvas = document.getElementById("UI")
const ctx = canvas.getContext("2d")

import { DrawUtils } from "../../utils/DrawUtils.js"

export class UiUtills {
    tText = ["Yet Another Placeholder","placeholder for","the toast system","Yet Another Placeholder"]
    tTime = 0 
    tY = 1577
    tTargetY = 1577
    Draw = new DrawUtils()

    draw(){
        this.toastDraw()
    }

    toastDraw(){
        this.Draw.Rect(1700, this.tY -103, 814, 500, "#33363f", ctx)
        this.Draw.Rect(1720, this.tY -83, 814, 500, "#d8d8d8", ctx)
        for(let i = 0; i < 4; i++){
            this.Draw.Text(this.tText[i], 1750, this.tY+(100*i), "#73767f", "#33363f", ctx)
        }
        this.tTime--

        if(this.tTime == 0){
            this.tTargetY = 1577
        }

        this.tY -= (this.tY-this.tTargetY)/10
    }
    toast(text = ["","","",""], time = 100){
        this.tText = text
        this.tTime = time
        this.tTargetY = 980
    }
}

// width="2514" height="1377"