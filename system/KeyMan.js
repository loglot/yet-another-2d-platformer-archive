'use strict';

export class KeyManager {
    /*
      KeyW = 0;
      KeyA = 1;
      KeyS = 2;
      KeyD = 3;
     */

    keyBuffer;
    keysCurrentlyPressed;
    keysPressedLastFrame;

    constructor() {
      this.keyBuffer = new Array(6);
      this.keysCurrentlyPressed = new Array(6);
      this.keysPressedLastFrame = new Array(6);

      document.addEventListener('keydown', (event) => {
        var code = event.code;
        this.setKeyPressed(code, true)
      }, false);
    
      document.addEventListener('keyup', (event) => {
        var code = event.code;
        this.setKeyPressed(code, false)
      }, false);
    }

    wasKeyJustPressed(code) {
      switch (code) {
        case "KeyW": return !this.keysPressedLastFrame[0] && this.keysCurrentlyPressed[0];
        case "KeyA": return !this.keysPressedLastFrame[1] && this.keysCurrentlyPressed[1];
        case "KeyS": return !this.keysPressedLastFrame[2] && this.keysCurrentlyPressed[2];
        case "KeyD": return !this.keysPressedLastFrame[3] && this.keysCurrentlyPressed[3];
        case "Backslash": return !this.keysPressedLastFrame[4] && this.keysCurrentlyPressed[4];
        case "KeyH": return !this.keysPressedLastFrame[5] && this.keysCurrentlyPressed[5];
        case "KeyN": return !this.keysPressedLastFrame[6] && this.keysCurrentlyPressed[6];
      }
    }

    isKeyPressed(code) {
      switch (code) {
        case "KeyW": return this.keysCurrentlyPressed[0];
        case "KeyA": return this.keysCurrentlyPressed[1];
        case "KeyS": return this.keysCurrentlyPressed[2];
        case "KeyD": return this.keysCurrentlyPressed[3];
        case "Backslash": return this.keysCurrentlyPressed[4];
        case "KeyH": return this.keysCurrentlyPressed[5];
        case "KeyN": return this.keysCurrentlyPressed[6];
      }
    }

    setKeyPressed(code, pressed) {
      switch (code) {
        case "KeyW":
          this.keyBuffer[0] = pressed;
          break;
        case "KeyA":
          this.keyBuffer[1] = pressed;
          break;
        case "KeyS":
          this.keyBuffer[2] = pressed;
          break;
        case "KeyD":
          this.keyBuffer[3] = pressed;
          break;
        case "Backslash":
          this.keyBuffer[4] = pressed;
          break;
        case "KeyH":
          this.keyBuffer[5] = pressed;
          break;
        case "KeyN":
          this.keyBuffer[6] = pressed;
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
