import countRandom from './countRandom.js'
import setTimeLinear from './setTimeLinear.js'
import setTimeEaseOut from './setTimeEaseOut.js'

const numberRef = document.querySelector('.lottery-render__number')
const inputRef = document.querySelector('.lottery-setup__input')
const startButtonRef = document.querySelector('.lottery-action__start-button')
const restButtonRef = document.querySelector('.lottery-action__rest-button')

const handleStart = () => {
  if (!inputRef.valueAsNumber || inputRef.valueAsNumber <= 1) return

  restButtonRef.disabled = startButtonRef.disabled = inputRef.disabled = true

  console.time('time1')
  setTimeLinear((time) => {}, {
    direction: 5000,
    delay: 60
  }).then((res) => console.timeEnd('time1'))

  console.time('time2')
  setTimeEaseOut(
    (time) => {
      numberRef.innerText = countRandom(inputRef.valueAsNumber)
    },
    { delay: 5000, startSpeed: 100, endSpeed: 500 }
  ).then((res) => console.timeEnd('time2'))

  restButtonRef.disabled = startButtonRef.disabled = inputRef.disabled = false
}

const handleRest = () => {
  numberRef.innerText = 0
  startButtonRef.innerText = '开始抽奖'
}

startButtonRef.addEventListener('click', handleStart)
restButtonRef.addEventListener('click', handleRest)

let test
