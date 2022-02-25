import countRandom from './countRandom.js'
import setTimeEaseOut from './setTimeEaseOut.js'

const numberRef = document.querySelector('.lottery-render__number')
const inputRef = document.querySelector('.lottery-setup__input')
const startButtonRef = document.querySelector('.lottery-action__start-button')

const handleStart = async () => {
  if (!inputRef.valueAsNumber || inputRef.valueAsNumber <= 1) return

  startButtonRef.disabled = inputRef.disabled = true

  startButtonRef.innerText = '抽奖中...'

  await setTimeEaseOut(
    (time) => {
      numberRef.innerHTML = countRandom(inputRef.valueAsNumber)
    },
    { timeout: 5000, startSpeed: 100, endSpeed: 500 }
  ).then((time) => console.log(time))
  startButtonRef.disabled = inputRef.disabled = false
  startButtonRef.innerText = '开始抽奖'
}

startButtonRef.addEventListener('click', handleStart)
