// tests go here; this will not be compiled when this package is used as a library

//Run motor A in forward direction
MotorDriver.MotorRun(Motor.A, Dir.Forward, 10)

//Stop motor A
MotorDriver.MotorStop(Motor.A)

//Rotate Servo 0 at 90 deg
MotorDriver.ServoTurnAngle(Servo.S0, 180)

//Stop Servo 0
MotorDriver.ServoStop(Servo.S0)