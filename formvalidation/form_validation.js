const minLength = 5;

const error = {
    emptyField: 'is empty',
    minCharacters: `requires minimum ${minLength} characters `
};

class Form {

    constructor() {
        this.formElements = document.querySelectorAll('[data-field]');
    }

    addEventListner() {
        let that = this;
        regestrationform.addEventListener('submit', function(e) {
            e.preventDefault();
            that.addSubmitListner();
        });
    }

    addSubmitListner() {
        let that = this;
        that.formElements.forEach(function(field) {
            if (field.dataset.field == 'aboutme') {
                that.validateLength(field);
            } else if (field.dataset.field == 'checkbox') {
                if (!field.checked) {
                    alert(`${field.name} ${error['emptyField']}`);
                }
            } else {
                that.validateEmpty(field);
            }
        });
    }
    //to check empty or null values
    validateEmpty(field) {
        return field.value.trim().length === 0 ? alert(`${field.name} ${error['emptyField']}`) : true;
    }
    //to check string length is greater than 50 or not
    validateLength(field) {
        return field.value.trim().length < 5 ? alert(`${field.name} ${error['minCharacters']}`) : true;
    }

    init() {
        this.addEventListner();
    }
}

(function() {
    let validate = new Form();
    validate.init();
})();
