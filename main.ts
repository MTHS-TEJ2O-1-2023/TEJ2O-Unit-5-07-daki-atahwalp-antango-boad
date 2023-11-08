/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Daki A.B
 * Created on: Nov 2023
 * This program controls a servo through Robotbit
*/

// variables
const servo1 = robotbit.Servos.S1

// setup
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  robotbit.Servo(servo1, 0)
  basic.clearScreen()
  basic.showString('0')
  basic.showIcon(IconNames.SmallSquare)
  basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
  robotbit.Servo(servo1, 180)
  basic.clearScreen()
  basic.showString('180')
  basic.showIcon(IconNames.SmallSquare)
  basic.showIcon(IconNames.Happy)
})
