class Clock {
  constructor() {
    if (this.constructor == Clock) {
      throw new Error("Abstract classes can't be instantiated.")
    }
    let time = new Date();
    this.object = {
      hours: time.getHours() > 12 ? time.getHours() - 12 : time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds(),
      amPm: time.getHours() > 12 ? 'PM' : 'AM',
    };
  }
}

class DigitalClock extends Clock {
  getDigitalTime() {
    let currentTime = this.object.hours + ':' + this.object.minutes + ':' + this.object.seconds + ' ' + this.object.amPm;
    alert(currentTime);
  }
}
class AnalogClock extends Clock {
  getdegree() {
    let object = {
      hourDegree: this.object.hours * 30,
      minuteDegree: this.object.minutes * 6,
      secondDegree: this.object.seconds * 6,
    }

    return object;
  }
  getAnalogTime() {
    let degree = this.getdegree();

    alert(` Hour Hand at ${degree.hourDegree}deg
 Minute Hand at ${degree.minuteDegree}deg
 Second Hand at ${degree.secondDegree}deg `);
  }
}

(function() {
  let analogTime = new AnalogClock();
  let digitalTime = new DigitalClock();
  let getAttribute = document.querySelectorAll('button');
  let getAttributeArray = Array.from(getAttribute);

  getAttributeArray.forEach(function(element) {
    element.addEventListener('click', function(e) {
      if (element.dataset.show == 'true' && element.dataset.id == 'digital') {
        digitalTime.getDigitalTime();
      } else if (
        element.dataset.show == 'true' && element.dataset.id == 'analog') {
        analogTime.getAnalogTime();
      }
    })
  })
})()


