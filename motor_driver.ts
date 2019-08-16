enum Motor {
    A = 1,
    B = 2,
}

enum Servo {
    S0 = 0,
    S1 = 1,
    S2 = 2,
}

enum Dir {
    Forward = 1,
    Backward = 0,
}

//% weight=20 color=#3333FF icon="\uf1b9"
namespace MotorDriver {
    
    let PWMA = AnalogPin.P8
    let AIN1 = DigitalPin.P13
    let AIN2 = DigitalPin.P12
    let PWMB = AnalogPin.P16
    let BIN1 = DigitalPin.P14
    let BIN2 = DigitalPin.P15
    // let S0_PIN = AnalogPin.P0
    // let S1_PIN = AnalogPin.P1
    // let S2_PIN = AnalogPin.P2
    let SPINs = [AnalogPin.P0, AnalogPin.P1, AnalogPin.P2];
    
    
    /**
	 * Motor Run
	 * @param speed [0-16] speed of Motor; eg: 10, 0, 16
	*/
    //% blockId=MotorDriver_MotorRun block="Motor %m|Direction %Direction|speed %speed"
    //% weight=100
    //% speed.min=0 speed.max=16
    export function MotorRun(motor: Motor, Direction: Dir, speed: number): void {
        speed = speed * 64 - 1; // map 0 to 1023

        if (motor == 1) {
            pins.analogWritePin(PWMA, speed)
            if (Direction == 1) {
                pins.digitalWritePin(AIN1, 0)
                pins.digitalWritePin(AIN2, 1)
            } else {
                pins.digitalWritePin(AIN1, 1)
                pins.digitalWritePin(AIN2, 0)
            }
        } else {
            pins.analogWritePin(PWMB, speed)
            if (Direction == 1) {
                pins.digitalWritePin(BIN1, 0)
                pins.digitalWritePin(BIN2, 1)
            } else {
                pins.digitalWritePin(BIN1, 1)
                pins.digitalWritePin(BIN2, 0)
            }
        }
    }

    //% blockId=MotorStop
    //% block="Motor %Motor| Stop"
    //% weight=90
    export function MotorStop(motor: Motor): void {
        if (motor == 1)
            pins.analogWritePin(PWMA, 0)
        else
            pins.analogWritePin(PWMB, 0)
    }

    //% blockId=ServoStop
    //% block="Servos %s| Stop"
    //% weight=69 
    export function ServoStop(s: Servo): void {
        pins.servoSetPulse(SPINs[s], 0)
        // if (s == Servo.S0)
        //     pins.servoSetPulse(S0_PIN, 0)
        // else if (s == Servo.S1)
        //     pins.servoSetPulse(S1_PIN, 0)
        // else
        //     pins.servoSetPulse(S2_PIN, 0)
    }

    /**
	 * Servo TurnAngle
	 * @param angle [0-180] speed of Motor; eg: 180, 0, 180
	*/
    //% blockId=ServoTurnAngle
    //% block="Servos %s| Turn Angle %angle"
    //% weight=60 
    //% angle.min=0 angle.max=180
    export function ServoTurnAngle(s: Servo, angle: number): void {
        let temp = 0
        temp = angle * 10 + 500 //0.5ms - 2.5ms
        pins.servoSetPulse(SPINs[s], temp)
        // if (s == Servo.S0)
        //     pins.servoSetPulse(S0_PIN, temp)
        // else if (s == Servo.S1)
        //     pins.servoSetPulse(S1_PIN, temp)
        // else
        //     pins.servoSetPulse(S2_PIN, temp)
    }

}