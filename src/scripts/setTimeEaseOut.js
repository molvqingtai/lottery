import setTimeLinear from './setTimeLinear.js'

/**
 * 缓冲定时器
 * @param  {function} func       [回调方法]
 * @param  {number}   timeout    [循环时长，默认 10000ms]
 * @param  {number}   startSpeed [开始速度，默认 100ms]
 * @param  {number}   endSpeed   [结束速度，默认 1000ms]
 * @return {promise<number>}     timestamp  [结束时间戳]
 */
const setTimeEaseOut = async (func, options = {}) => {
  let { timeout = 10000, startSpeed = 100, endSpeed = 1000 } = options
  const startTime = Date.now()
  let stageTime = Date.now()
  return await setTimeLinear(
    (endTime) => {
      if (endTime - stageTime >= startSpeed) {
        func(endTime)
        startSpeed = ((endTime - startTime) / timeout) * endSpeed
        stageTime = endTime
      }
    },
    {
      timeout,
      delay: 0
    }
  )
}

export default setTimeEaseOut
