class WelcomeUser {
  constructor(display) {
    this.display = display
  }
  isBlank(str) {
    return !str || /^\s*$/.test(str)
  }
  askName() {
    let that = this
    let firstName = prompt('Please enter your first name')
    let lastName = prompt('Please enter your last name')
    if (that.isBlank(firstName) || that.isBlank(lastName)) {
      alert('can not enter empty values kindly refresh the page to try again')
    } else {
      this.display.innerHTML = 'Hello' + ' ' + firstName + ' ' + lastName
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  let display = document.getElementById('demo')
  let alert = new WelcomeUser(display)
  alert.askName()
})
