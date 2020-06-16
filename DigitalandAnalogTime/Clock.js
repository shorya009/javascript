class Clock {

    constructor() {
        if (this.constructor == Clock) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }
    
    getTime() {
        let time = new Date();
        return {
            hours: time.getHours() > 12 ? time.getHours() - 12 : time.getHours(),
            minutes: time.getMinutes(),
            seconds: time.getSeconds(),
            amPm: time.getHours() > 12 ? 'PM' : 'AM',
        };
    }
}

class DigitalClock extends Clock {

    getDigitalTime() {
        const {
            hours,
            minutes,
            seconds,
            amPm
        } = this.getTime();
        let currentTime = `${hours}:${minutes}:${seconds} ${amPm}`;
        alert(currentTime);
    }
}
class AnalogClock extends Clock {

    getDegree() {
        const {
            hours,
            minutes,
            seconds
        } = this.getTime();
        let formatedTime = {
            hourDegree: hours * 30,
            minuteDegree: minutes * 6,
            secondDegree: seconds * 6,
        };

        return formatedTime;
    }
    getAnalogTime() {

        let degree = this.getDegree();
        alert(` Hour Hand at ${degree.hourDegree}deg
 Minute Hand at ${degree.minuteDegree}deg
 Second Hand at ${degree.secondDegree}deg `);
    }
}

(function() {
    let displayClockButtons = document.querySelectorAll('[data-clock]');
    let digitalTime = new DigitalClock();
    let analogTime = new AnalogClock();

    displayClockButtons.forEach(function(element) {
        element.addEventListener('click', function(e) {
            if (element.dataset.clock == 'digital') {
                digitalTime.getDigitalTime();
            } else if (element.dataset.clock == 'analog') {
                analogTime.getAnalogTime();
            }
        });
    });
})();
