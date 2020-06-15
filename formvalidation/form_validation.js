class FormValidation {
    
    constructor() {
        // Defining error variable
        this.checkError = 0;
        this.formElements = {
            loginid: document.regestrationform.loginid.value,
            email: document.regestrationform.email.value,
            fullname: document.regestrationform.fullname.value,
            timezone: document.regestrationform.timezone.value,
            aboutme: document.regestrationform.aboutme.value,
            checkbox: document.regestrationform.check.checked,
        };
    }
    //to check empty or null values
    isBlank(str) {
        return !str || /^\s*$/.test(str);
    }
    //to check string length is greater than 50 or not
    validateLength(str) {
        return str.length < 50 ? 1 : 0;
    }
    //to alert message
    alertMessage(value) {
        alert(`${value} cannot be empty`);
        this.checkError = this.checkError + 1;
    }
    // to validate form
    validateForm() {
        for (let key in this.formElements) {
            if (this.isBlank(this.formElements[key])) {
                this.alertMessage(key);
            } else {
                if (key == 'aboutme') {
                    let checkLength = this.validateLength(this.formElements[key]);
                    if (checkLength == 1) {
                        alert(`Length of ${key} should be more than 5`);
                        this.checkError = this.checkError + 1;
                    }
                }
            }
        }
        // Prevent the form from being submitted if there are any errors
        if (this.checkError > 0) {
            return false;
        } else {
            // to prevent double form submission
            document.regestrationform.submit.disabled = true;
            // Creating a string from input data for preview
            let dataPreview = `You've entered the following details:
         Login Id: ${this.formElements['loginid']},
         Email Address: ${this.formElements['email']}, 
         Name: ${this.formElements['fullname']},
         Timezone: ${this.formElements['timezone']},
        About Me: ${this.formElements['aboutme']}`;
            // Display input data in a dialog box before submitting the form
            alert(dataPreview);
            return 1;
        }
    }
}
regestrationform.addEventListener('submit', function (e) {
    e.preventDefault();
    let validate = new FormValidation();
    let submitForm = validate.validateForm();
    if (submitForm) {
        alert('successful submission');
        document.regestrationform.reset();
        document.regestrationform.submit.disabled = false;
    }
});
