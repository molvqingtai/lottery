const setTimeLinear = (func, options = {}) =>
  new Promise((resolve, reject) => {
    try {
      const { direction = 10000, delay = 300 } = options
      const startTime = performance.now()
      let endDelay = performance.now()
      const setup = (endTime) => {
        cancelAnimationFrame(requestID)
        if (endTime - startTime <= direction) {
          if (endTime - endDelay >= delay) {
            func(+new Date())
            endDelay = endTime
          }
          requestID = requestAnimationFrame(setup)
        } else {
          resolve(+new Date())
        }
      }
      let requestID = requestAnimationFrame(setup)
    } catch (error) {
      reject(error)
    }
  })

export default setTimeLinear
