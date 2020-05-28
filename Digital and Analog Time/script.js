class Clock {
  constructor() {
    if (this.constructor == Clock) {
      throw new Error("Abstract classes can't be instantiated.")
    }
  }

  time() {
    throw new Error("Method 'time()' must be implemented.")
  }
}
//After that, we can create our concrete Classes. These classes will inherit all functions and behaviour from abstract class.

/**
 * DigitalClock.
 *
 * @class DigitalClock
 * @extends {Clock}
 */
class DigitalClock extends Clock {
  time() {
    let time = new Date()
    let hours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    let am_pm = time.getHours() >= 12 ? 'PM' : 'AM'
    let currenttime = hours + ':' + minutes + ':' + seconds + ' ' + am_pm
    alert(currenttime)
  }
}
/**
 * AnalogClock.
 *
 * @class AnalogClock
 * @extends {AnimaClock}
 */
class AnalogClock extends Clock {
  getdegree(date) {
    var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
    var Hours = hours * 30
    var minutes = date.getMinutes()
    var Minutes = minutes * 6
    var seconds = date.getSeconds()
    var Seconds = seconds * 6
    var ob = {
      hourdegree: Hours,
      minutedegree: Minutes,
      seconddegree: Seconds,
    }
    return ob
  }
  time() {
    var degree = this.getdegree(new Date())
    alert(` Hour Hand at ${degree['hourdegree']}deg
 Minute Hand at ${degree['minutedegree']}deg
 Second Hand at ${degree['seconddegree']}deg `)
  }
}

var analogtime = new AnalogClock()
var digitaltime = new DigitalClock()
//x.time()
//c.time()

document
  .getElementById('digital')
  .addEventListener('click', digitaltime.time.bind(digitaltime));

  document
  .getElementById('analog')
  .addEventListener('click', analogtime.time.bind(analogtime));
