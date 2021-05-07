/**
 * 缓冲定时器
 * @param  {function} func       [回调方法]
 * @param  {number}   delay      [循环时长]
 * @param  {number}   startSpeed [开始速度]
 * @param  {number}   endSpeed   [结束速度]
 * @return {promise}  timestamp  [结束时间戳]
 */

import setTimeLinear from './setTimeLinear.js'
const setTimeEaseOut = (func, options = { delay: 10000, startSpeed: 100, endSpeed: 500 }) => {
  const startTime = +new Date()

  return setTimeLinear(
    () => {
      const progress = (+new Date() - startTime) / options.delay
      if (progress < 1) {
        func(+new Date())
      } else {
        return +new Date()
      }
    },
    {
      direction: options.delay,
      delay: options.startSpeed
    }
  )
  // const render = () => {
  //   clearTimeout(timer);
  //   const progress = (+new Date() - startTime) / options.delay;
  //   if (progress < 1) {
  //     func(+new Date());
  //     timer = setTimeout(render, progress * options.endSpeed);
  //   } else {
  //     resolve(+new Date());
  //   }
  // };
  // let timer = setTimeout(render, options.startSpeed);
}

export default setTimeEaseOut
