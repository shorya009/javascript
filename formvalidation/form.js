const minLength = 50;

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
        that.formElements.forEach(function(e) {
            if (e.dataset.field == 'aboutme') {
                that.validateLength(e);
            } else if (e.dataset.field == 'checkbox') {
                if (!e.checked) {
                    alert(`${e.name} ${error['emptyField']}`);
                }
            } else {
                that.validateEmpty(e);
            }
        });
    }
    //to check empty or null values
    validateEmpty(field) {
        return field.value.trim().length === 0 ? alert(`${field.name} ${error['emptyField']}`) : true;
    }
    //to check string length is greater than 50 or not
    validateLength(field) {
        return field.value.trim().length < minLength ? alert(`${field.name} ${error['minCharacters']}`) : true;
    }

    init() {
        this.addEventListner();
    }
}

(function() {
    let validate = new Form();
    validate.init();
})();
