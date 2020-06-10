function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg
}

function validateForm() {
  // Retrieving the values of form elements
  let loginid = document.regestrationform.loginid.value
  let email = document.regestrationform.email.value
  let name = document.regestrationform.name.value
  let timezone = document.regestrationform.timezone.value
  let aboutme = document.regestrationform.aboutme.value
  let checkbox = document.regestrationform.check.checked
  let submit = document.getElementById('submit')

  // Defining error variables with a default value
  let loginidErr = (emailErr = nameErr = aboutmeErr = checkboxErr = true)

  // Validate login id
  if (loginid == '') {
    printError('loginidErr', 'Please enter your loginid')
  } else {
    let regex = /^[0-9a-zA-Z]+$/
    if (regex.test(loginid) === false) {
      printError('loginidErr', 'Please enter a valid login id')
    } else {
      printError('loginidErr', '')
      loginidErr = false
    }
  }

  // Validate email
  if (email == '') {
    printError('emailErr', 'Please enter your email address')
  } else {
    // Regular expression for basic email validation
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (regex.test(email) === false) {
      printError('emailErr', 'Please enter a valid email address')
    } else {
      printError('emailErr', '')
      emailErr = false
    }
  }

  // Validate name
  if (name == '') {
    printError('nameErr', 'Please enter your name')
  } else {
    let regex = /^[a-zA-Z]+$/
    if (regex.test(name) === false) {
      printError('nameErr', 'Please enter a valid name')
    } else {
      printError('nameErr', '')
      nameErr = false
    }
  }
  // Validate about me
  if (aboutme == '') {
    printError('aboutmeErr', 'Please enter something about yourself')
  } else {
    let regex = /^.{50,}$/
    if (regex.test(aboutme) === false) {
      printError('aboutmeErr', 'Min 50 characters are required')
    } else {
      printError('aboutmeErr', '')
      aboutmeErr = false
    }
  }

  if (!checkbox) {
    printError('checkboxErr', 'Please check the notification box')
  } else {
    printError('checkboxErr', '')
    checkboxErr = false
  }

  // Prevent the form from being submitted if there are any errors
  if (
    (loginidErr || emailErr || nameErr || aboutmeErr || checkboxErr) == true
  ) {
    return false
  } else {
    // Creating a string from input data for preview
    console.log('aaya submit')
    submit.disabled = true
    var dataPreview =
      "You've entered the following details: \n" +
      'Login Id: ' +
      loginid +
      '\n' +
      'Email Address: ' +
      email +
      '\n' +
      'Name: ' +
      name +
      '\n' +
      'Timezone: ' +
      timezone +
      '\n' +
      'About Me: ' +
      aboutme +
      '\n'

    // Display input data in a dialog box before submitting the form
    alert(dataPreview)
  }
}
