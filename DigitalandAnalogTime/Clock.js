class Clock {
  constructor() {
    if (this.constructor == Clock) {
      throw new Error("Abstract classes can't be instantiated.")
    }
    let time = new Date()
    this.timeObject = {
      hours: time.getHours() > 12 ? time.getHours() - 12 : time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds(),
      amPm: time.getHours() > 12 ? 'PM' : 'AM',
    }
  }
}

class DigitalClock extends Clock {
  getDigitalTime() {
    let currentTime =
      this.timeObject.hours +
      ':' +
      this.timeObject.minutes +
      ':' +
      this.timeObject.seconds +
      ' ' +
      this.timeObject.amPm
    alert(currentTime)
  }
}
class AnalogClock extends Clock {
  getdegree() {
    let formatedTime = {
      hourDegree: this.timeObject.hours * 30,
      minuteDegree: this.timeObject.minutes * 6,
      secondDegree: this.timeObject.seconds * 6,
    }

    return formatedTime
  }
  getAnalogTime() {
    let degree = this.getdegree()

    alert(` Hour Hand at ${degree.hourDegree}deg
 Minute Hand at ${degree.minuteDegree}deg
 Second Hand at ${degree.secondDegree}deg `)
  }
}

;(function () {
  let getTimeFormat = document.querySelectorAll('[data-clock]')

  getTimeFormat.forEach(function (element) {
    element.addEventListener('click', function (e) {
      if (element.dataset.clock == 'digital') {
        let digitalTime = new DigitalClock()
        digitalTime.getDigitalTime()
      } else if (element.dataset.clock == 'analog') {
        let analogTime = new AnalogClock()
        analogTime.getAnalogTime()
      }
    })
  })
})()
