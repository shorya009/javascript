class Formvalidation {
  constructor(loginid, email, name, timezone, aboutme, checkbox, submit) {
    this.loginid = loginid
    this.email = email
    this.name = name
    this.timezone = timezone
    this.aboutme = aboutme
    this.checkbox = checkbox
    this.submit = submit

// Defining error variables with a default value
    this.loginidErr = this.emailErr = this.nameErr = this.aboutmeErr = this.checkboxErr = true
  }

  printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg
  }

  validateForm() {
    
    let that = this

    // Validate login id
    if (this.loginid == '') {
      that.printError('loginidErr', 'Please enter your loginid')
      loginid.focus()
      return false
    } else {
      let regex = /^[0-9a-zA-Z{2,20}]+$/
      if (regex.test(this.loginid) === false) {
        that.printError('loginidErr', 'Please enter a valid login id')
        loginid.focus()
        return false
      } else {
        that.printError('loginidErr', '')
        this.loginidErr = false
      }
    }

    // Validate email
    if (this.email == '') {
      that.printError('emailErr', 'Please enter your email address')
      email.focus()
      return false
    } else {
      // Regular expression for basic email validation
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      if (regex.test(this.email) === false) {
        that.printError('emailErr', 'Please enter a valid email address')
        email.focus()
        return false
      } else {
        that.printError('emailErr', '')
        this.emailErr = false
      }
    }

    // Validate name
    if (this.name == '') {
      that.printError('nameErr', 'Please enter your name')
      name.focus()
      return false
    } else {
      let regex = /^[a-zA-Z]+$/
      if (regex.test(this.name) === false) {
        that.printError('nameErr', 'Please enter a valid name')
        name.focus()
        return false
      } else {
        that.printError('nameErr', '')
        this.nameErr = false
      }
    }
    // Validate about me
    if (this.aboutme == '') {
      that.printError('aboutmeErr', 'Please enter something about yourself')
      aboutme.focus()
      return false
    } else {
      let regex = /^.{5,}$/
      if (regex.test(this.aboutme) === false) {
        that.printError('aboutmeErr', 'Min 50 characters are required')
        aboutme.focus()
        return false
      } else {
        that.printError('aboutmeErr', '')
        this.aboutmeErr = false
      }
    }

    if (!this.checkbox) {
      that.printError('checkboxErr', 'Please check the notification box')
      return false
    } else {
      that.printError('checkboxErr', '')
      this.checkboxErr = false
    }

    // Prevent the form from being submitted if there are any errors
    if (
      (this.loginidErr ||
        this.emailErr ||
        this.nameErr ||
        this.aboutmeErr ||
        this.checkboxErr) == true
    ) {
      return false
    } else {
      // Creating a string from input data for preview
      this.submit.disabled = true
      console.log(this.submit.disabled)
      let dataPreview =
        "You've entered the following details: \n" +
        'Login Id: ' +
        this.loginid +
        '\n' +
        'Email Address: ' +
        this.email +
        '\n' +
        'Name: ' +
        this.name +
        '\n' +
        'Timezone: ' +
        this.timezone +
        '\n' +
        'About Me: ' +
        this.aboutme +
        '\n'

      // Display input data in a dialog box before submitting the form
      alert(dataPreview)

      return 1
    }
  }
}

regestrationform.addEventListener('submit', function (e) {
  e.preventDefault()
  let loginid = document.regestrationform.loginid.value
  let email = document.regestrationform.email.value
  let name = document.regestrationform.name.value
  let timezone = document.regestrationform.timezone.value
  let aboutme = document.regestrationform.aboutme.value
  let checkbox = document.regestrationform.check.checked
  let submit = document.getElementById('submit')

  let validate = new Formvalidation(
    loginid,
    email,
    name,
    timezone,
    aboutme,
    checkbox,
    submit
  )
  let submitForm = validate.validateForm()

  if (submitForm) {
    alert('successful submission')
  }
})
