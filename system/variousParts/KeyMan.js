'use strict';
const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

export class KeyManager {

    keyBuffer;
    keysCurrentlyPressed;
    keysPressedLastFrame;
    canvasShape = this.canvasShapeSet()
    percentX;
    percentY;
    mousePos
    camY
    camX
    game
    


    constructor(game) {//
      
      this.mousePos = this.mouseSetup()

      this.keyBuffer = new Array();
      this.keysCurrentlyPressed = new Array();
      this.keysPressedLastFrame = new Array();
      this.game = game


      document.addEventListener('keydown', (event) => {
        var code = event.code;
        this.setKeyPressed(code, true)
      }, false);
    
      document.addEventListener('keyup', (event) => {
        var code = event.code;
        this.setKeyPressed(code, false)
      }, false);

      document.addEventListener("mousedown", (event) => {
        if (event.button == 0) {
          this.game.held.execute()
        }
      }, false);

      document.addEventListener('contextmenu', event => {
        event.preventDefault();
      }, false);    

      document.addEventListener("mouseup", (event) => {
        if (event.button == 0) {
          this.game.held.unExecute()
        }

      })
      document.addEventListener("mousemove", (event) => {
        var rect = canvas.getBoundingClientRect()
        this.mousePos = this.getMousePos(canvas, event);
        this.mousePos.x = ((((this.mousePos.x) / (rect.width)) * this.canvasShape.width) - this.camX)
        this.mousePos.y = (((this.mousePos.y) / (rect.height)) * this.canvasShape.height) - this.camY
        this.mousePos.cx = this.camX
        this.mousePos.cy = this.camY
      })
    }


    mouseSetup() {
      return {
        x: 0,
        y: 0,
        cx: 0,
        cy: 0
    };
    }

     getMousePos(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
      };
    }

    canvasShapeSet(){
      return{
          width:2514,
          height:1377
      }
    }

    wasKeyJustPressed(code) {
      switch (code) {
        case "Backslash": return !this.keysPressedLastFrame[26] && this.keysCurrentlyPressed[26];
        case "ArrowUp": return !this.keysPressedLastFrame[27] && this.keysCurrentlyPressed[27];
        case "ArrowDown": return !this.keysPressedLastFrame[28] && this.keysCurrentlyPressed[28];
        case "ArrowLeft": return !this.keysPressedLastFrame[29] && this.keysCurrentlyPressed[29];
        case "ArrowRight": return !this.keysPressedLastFrame[30] && this.keysCurrentlyPressed[30];
        case "AltLeft": return !this.keysPressedLastFrame[31] && this.keysCurrentlyPressed[31];
        case "ShiftLeft": return !this.keysPressedLastFrame[32] && this.keysCurrentlyPressed[32];
        case "Space": return !this.keysPressedLastFrame[33] && this.keysCurrentlyPressed[33];//Escape
        case "Escape": return !this.keysPressedLastFrame[34] && this.keysCurrentlyPressed[34];
        case "Enter": return !this.keysPressedLastFrame[35] && this.keysCurrentlyPressed[35];
        case "Equal": return !this.keysPressedLastFrame[36] && this.keysCurrentlyPressed[36];
        case "Minus": return !this.keysPressedLastFrame[37] && this.keysCurrentlyPressed[37];
        case "ControlLeft": return !this.keysPressedLastFrame[38] && this.keysCurrentlyPressed[38];
        case "ShiftRight": return !this.keysPressedLastFrame[39] && this.keysCurrentlyPressed[39];

        case "KeyA": return !this.keysPressedLastFrame[0] && this.keysCurrentlyPressed[0];
        case "KeyB": return !this.keysPressedLastFrame[1] && this.keysCurrentlyPressed[1];
        case "KeyC": return !this.keysPressedLastFrame[2] && this.keysCurrentlyPressed[2];
        case "KeyD": return !this.keysPressedLastFrame[3] && this.keysCurrentlyPressed[3];
        case "KeyE": return !this.keysPressedLastFrame[4] && this.keysCurrentlyPressed[4];
        case "KeyF": return !this.keysPressedLastFrame[5] && this.keysCurrentlyPressed[5];
        case "KeyG": return !this.keysPressedLastFrame[6] && this.keysCurrentlyPressed[6];
        case "KeyH": return !this.keysPressedLastFrame[7] && this.keysCurrentlyPressed[7];
        case "KeyI": return !this.keysPressedLastFrame[8] && this.keysCurrentlyPressed[8];
        case "KeyJ": return !this.keysPressedLastFrame[9] && this.keysCurrentlyPressed[9];
        case "KeyK": return !this.keysPressedLastFrame[10] && this.keysCurrentlyPressed[10];
        case "KeyL": return !this.keysPressedLastFrame[11] && this.keysCurrentlyPressed[11];
        case "KeyM": return !this.keysPressedLastFrame[12] && this.keysCurrentlyPressed[12];
        case "KeyN": return !this.keysPressedLastFrame[13] && this.keysCurrentlyPressed[13];
        case "KeyO": return !this.keysPressedLastFrame[14] && this.keysCurrentlyPressed[14];
        case "KeyP": return !this.keysPressedLastFrame[15] && this.keysCurrentlyPressed[15];
        case "KeyQ": return !this.keysPressedLastFrame[16] && this.keysCurrentlyPressed[16];
        case "KeyR": return !this.keysPressedLastFrame[17] && this.keysCurrentlyPressed[17];
        case "KeyS": return !this.keysPressedLastFrame[18] && this.keysCurrentlyPressed[18];
        case "KeyT": return !this.keysPressedLastFrame[19] && this.keysCurrentlyPressed[19];
        case "KeyU": return !this.keysPressedLastFrame[20] && this.keysCurrentlyPressed[20];
        case "KeyV": return !this.keysPressedLastFrame[21] && this.keysCurrentlyPressed[21];
        case "KeyW": return !this.keysPressedLastFrame[22] && this.keysCurrentlyPressed[22];
        case "KeyX": return !this.keysPressedLastFrame[23] && this.keysCurrentlyPressed[23];
        case "KeyY": return !this.keysPressedLastFrame[24] && this.keysCurrentlyPressed[24];
        case "KeyZ": return !this.keysPressedLastFrame[25] && this.keysCurrentlyPressed[25];
        default:
        console.log("Unexpected key code: " + code)
      }
    }

    isKeyPressed(code) {
      switch (code) {
        case "Backslash": return this.keysCurrentlyPressed[26];
        case "ArrowUp": return this.keysCurrentlyPressed[27];
        case "ArrowDown": return this.keysCurrentlyPressed[28];
        case "ArrowLeft": return this.keysCurrentlyPressed[29];
        case "ArrowRight": return this.keysCurrentlyPressed[30];
        case "AltLeft": return this.keysCurrentlyPressed[31];
        case "ShiftLeft": return this.keysCurrentlyPressed[32];
        case "Space": return this.keysCurrentlyPressed[33];//Escape
        case "Escape": return this.keysCurrentlyPressed[34];
        case "Enter": return this.keysCurrentlyPressed[35];
        case "Equal": return this.keysCurrentlyPressed[36];
        case "Minus": return this.keysCurrentlyPressed[37];
        case "ControlLeft": return this.keysCurrentlyPressed[38];
        case "ShiftRight": return this.keysCurrentlyPressed[39];

        case "KeyA": return this.keysCurrentlyPressed[0];
        case "KeyB": return this.keysCurrentlyPressed[1];
        case "KeyC": return this.keysCurrentlyPressed[2];
        case "KeyD": return this.keysCurrentlyPressed[3];
        case "KeyE": return this.keysCurrentlyPressed[4];
        case "KeyF": return this.keysCurrentlyPressed[5];
        case "KeyG": return this.keysCurrentlyPressed[6];
        case "KeyH": return this.keysCurrentlyPressed[7];
        case "KeyI": return this.keysCurrentlyPressed[8];
        case "KeyJ": return this.keysCurrentlyPressed[9];
        case "KeyK": return this.keysCurrentlyPressed[10];
        case "KeyL": return this.keysCurrentlyPressed[11];
        case "KeyM": return this.keysCurrentlyPressed[12];
        case "KeyN": return this.keysCurrentlyPressed[13];
        case "KeyO": return this.keysCurrentlyPressed[14];
        case "KeyP": return this.keysCurrentlyPressed[15];
        case "KeyQ": return this.keysCurrentlyPressed[16];
        case "KeyR": return this.keysCurrentlyPressed[17];
        case "KeyS": return this.keysCurrentlyPressed[18];
        case "KeyT": return this.keysCurrentlyPressed[19];
        case "KeyU": return this.keysCurrentlyPressed[20];
        case "KeyV": return this.keysCurrentlyPressed[21];
        case "KeyW": return this.keysCurrentlyPressed[22];
        case "KeyX": return this.keysCurrentlyPressed[23];
        case "KeyY": return this.keysCurrentlyPressed[24];
        case "KeyZ": return this.keysCurrentlyPressed[25];
        default:
          console.log("Unexpected key code: " + code);
      }
    }

    setKeyPressed(code, pressed) {
      switch (code) {
        case "Backslash":
          this.keyBuffer[26] = pressed;
        break;
        case "ArrowUp":
          this.keyBuffer[27] = pressed;
        break;
        case "ArrowDown":
          this.keyBuffer[28] = pressed;
        break;
        case "ArrowLeft":
          this.keyBuffer[29] = pressed;
        break;
        case "ArrowRight":
          this.keyBuffer[30] = pressed;
        break;
        case "AltLeft":
          this.keyBuffer[31] = pressed;
        break;
        case "ShiftLeft":
          this.keyBuffer[32] = pressed;
        break;
        case "Space":
          this.keyBuffer[33] = pressed;
        break;
        case "Escape":
          this.keyBuffer[34] = pressed;
        break;
        case "Enter":
          this.keyBuffer[35] = pressed;
        break;       
        case "Equal":
          this.keyBuffer[36] = pressed;
        break;        
        case "Minus":
          this.keyBuffer[37] = pressed;
        break;
        case "ControlLeft":
          this.keyBuffer[38] = pressed;
        break;
        case "ShiftRight":
          this.keyBuffer[39] = pressed;
        break;



        
        case "KeyA":
          this.keyBuffer[0] = pressed;
        break;
        case "KeyB":
          this.keyBuffer[1] = pressed;
        break;
        case "KeyC":
          this.keyBuffer[2] = pressed;
        break;
        case "KeyD":
          this.keyBuffer[3] = pressed;
        break;
        case "KeyE":
          this.keyBuffer[4] = pressed;
        break;
        case "KeyF":
          this.keyBuffer[5] = pressed;
        break;
        case "KeyG":
          this.keyBuffer[6] = pressed;
        break;
        case "KeyH":
          this.keyBuffer[7] = pressed;
        break;
        case "KeyI":
          this.keyBuffer[8] = pressed;
        break;
        case "KeyJ":
          this.keyBuffer[9] = pressed;
        break;
        case "KeyK":
          this.keyBuffer[10] = pressed;
        break;
        case "KeyL":
          this.keyBuffer[11] = pressed;
        break;
        case "KeyM":
          this.keyBuffer[12] = pressed;
        break;
        case "KeyN":
          this.keyBuffer[13] = pressed;
        break;
        case "KeyO":
          this.keyBuffer[14] = pressed;
        break;
        case "KeyP":
          this.keyBuffer[15] = pressed;
        break;
        case "KeyQ":
          this.keyBuffer[16] = pressed;
        break;
        case "KeyR":
          this.keyBuffer[17] = pressed;
        break;
        case "KeyS":
          this.keyBuffer[18] = pressed;
        break;
        case "KeyT":
          this.keyBuffer[19] = pressed;
        break;
        case "KeyU":
          this.keyBuffer[20] = pressed;
        break;
        case "KeyV":
          this.keyBuffer[21] = pressed;
        break;
        case "KeyW":
          this.keyBuffer[22] = pressed;
        break;
        case "KeyX":
          this.keyBuffer[23] = pressed;
        break;
        case "KeyY":
          this.keyBuffer[24] = pressed;
        break;
        case "KeyZ":
          this.keyBuffer[25] = pressed;
        break;
        

        default:
          console.log("Unexpected key code: " + code);
      }
    }

    update() {
      for (let i = 0; i < this.keyBuffer.length; i++) {
        this.keysPressedLastFrame[i] = this.keysCurrentlyPressed[i];
        this.keysCurrentlyPressed[i] = this.keyBuffer[i];
        // this.keyBuffer[i] = false;
      }
    }

}
