class Formvalidation {
  constructor() {
   
  this.loginid = document.regestrationform.loginid.value
  this.email = document.regestrationform.email.value
  this.fullname = document.regestrationform.fullname.value
  this.timezone = document.regestrationform.timezone.value
  this.aboutme = document.regestrationform.aboutme.value
  this.checkbox = document.regestrationform.check.checked
  this.submit = document.getElementById('submit')

// Defining error variables with a default value
    this.loginidErr = this.emailErr = this.nameErr = this.aboutmeErr = this.checkboxErr = true
  }

  printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg
  }

  validateForm() {
    
    // Validate login id
    if (this.loginid == '') {
      this.printError('loginidErr', 'Please enter your loginid')
      loginid.focus()
      return false
    } else {
      let regex = /^[0-9a-zA-Z{2,20}]+$/
      if (regex.test(this.loginid) === false) {
        this.printError('loginidErr', 'Please enter a valid login id')
        loginid.focus()
        return false
      } else {
        this.printError('loginidErr', '')
        this.loginidErr = false
      }
    }

    // Validate email
    if (this.email == '') {
      this.printError('emailErr', 'Please enter your email address')
      email.focus()
      return false
    } else {
      // Regular expression for basic email validation
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      if (regex.test(this.email) === false) {
        this.printError('emailErr', 'Please enter a valid email address')
        email.focus()
        return false
      } else {
        this.printError('emailErr', '')
        this.emailErr = false
      }
    }

    // Validate name
    if (this.fullname == '') {
      this.printError('nameErr', 'Please enter your name')
      fullname.focus()
      return false
    } else {
      let regex = /^[a-zA-Z{2,20}]+$/
      if (regex.test(this.fullname) === false) {
        this.printError('nameErr', 'Please enter a valid name')
        fullname.focus()
        return false
      } else {
        this.printError('nameErr', '')
        this.nameErr = false
      }
    }
    // Validate about me
    if (this.aboutme == '') {
      this.printError('aboutmeErr', 'Please enter something about yourself')
      aboutme.focus()
      return false
    } else {
      let regex = /^.{5,}$/
      if (regex.test(this.aboutme) === false) {
        this.printError('aboutmeErr', 'Min 50 characters are required')
        aboutme.focus()
        return false
      } else {
        this.printError('aboutmeErr', '')
        this.aboutmeErr = false
      }
    }

    if (!this.checkbox) {
      this.printError('checkboxErr', 'Please check the notification box')
      return false
    } else {
      this.printError('checkboxErr', '')
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

      let dataPreview =
        "You've entered the following details: \n" +
        'Login Id: ' +
        this.loginid +
        '\n' +
        'Email Address: ' +
        this.email +
        '\n' +
        'Name: ' +
        this.fullname +
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
  
  let validate = new Formvalidation()
  let submitForm = validate.validateForm()

  if (submitForm) {
    alert('successful submission')
  }
})
