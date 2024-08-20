const canvas = document.getElementById("UI")
const ctx = canvas.getContext("2d")

import { DrawUtils } from "../../utils/DrawUtils.js"

export class UiUtills {
    tText = ""
    tTime = 0 
    tY = 500
    draw = new DrawUtils()

    draw(){
        //this.draw.Rect(500, 500, 500, 100, "#000000")
    }

    toast(text, time){

    }
}
