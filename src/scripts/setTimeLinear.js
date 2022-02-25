/**
 * 定时器
 * @param {*} func
 * @param {number}   delay     [间隔时间，默认 300ms]
 * @param {number}   timeout   [循环时长，默认 1000ms]
 * @returns {promise<number>}     timestamp  [结束时间戳]
 */
const setTimeLinear = (func, options = {}) =>
  new Promise((resolve, reject) => {
    try {
      const { delay = 300, timeout = 10000 } = options
      const startTime = performance.now()
      let endDelay = performance.now()
      const setup = (endTime) => {
        cancelAnimationFrame(requestID)
        if (endTime - startTime <= timeout) {
          if (endTime - endDelay >= delay) {
            func(Date.now())
            endDelay = endTime
          }
          requestID = requestAnimationFrame(setup)
        } else {
          resolve(Date.now())
        }
      }
      let requestID = requestAnimationFrame(setup)
    } catch (error) {
      reject(error)
    }
  })

export default setTimeLinear
