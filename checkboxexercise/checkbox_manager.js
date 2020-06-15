const MaxCheckCount = 3;

class checkboxManager {
    
    constructor(checkboxGroup, noneCheckbox, MaxCheckCount) {
        this.checkboxGroup = checkboxGroup;
        this.noneCheckbox = noneCheckbox;
        this.selectedCheckboxes = []; //array to store checked boxes value
        this.MaxCheckCount = MaxCheckCount; //max check count variable
    }
    
    noneCheckboxFalse() {
      
        this.noneCheckbox.checked = false;
    }
    
    //function to check if max count violation is happening or not for each checkbox click
    checkMaxCountViolation(currentCheckbox) {
      
        this.noneCheckboxFalse();
        if (currentCheckbox.checked) {
            if (this.selectedCheckboxes.length < this.MaxCheckCount) {
                this.selectedCheckboxes.push(currentCheckbox.id);
            } else {
                currentCheckbox.checked = false;
                this.alertMaxCountViolation();
            }
        } else {
            this.selectedCheckboxes.splice(
                this.selectedCheckboxes.indexOf(currentCheckbox.id),
                1
            );
        }
    }
    
    //function to uncheck boxes when none is clicked
    uncheckBoxes() {
      
        let checkedItems = this.checkboxGroup.querySelectorAll(':checked');
        for (let i = checkedItems.length; i--;) {
            checkedItems[i].checked = false;
        }
        this.selectedCheckboxes = [];
    }
    
    // to alert when max count has been violated
    alertMaxCountViolation() {
      
        let lastSelectedBox = this.selectedCheckboxes[this.selectedCheckboxes.length - 1];
        alert(
            `Only 3 days can be selected.
       You have already selected ${this.selectedCheckboxes.slice(0, -1).join(', ')} 
       and ${lastSelectedBox}`
        );
    }
    
    noneCheckboxTrue() {
      
        this.noneCheckbox.checked = true;
    }
    
    noneCheckboxEventListener() {
      
        let that = this;
        this.noneCheckbox.addEventListener('click', function () {
            if (this.checked) {
                that.uncheckBoxes()
                this.checked = true
            }
        });
    }
    
    checkboxGroupEventListener() {
      
        let that = this;
        this.checkboxGroup.addEventListener('click', function (e) {
            if (e.target.tagName == 'INPUT') {
                that.checkMaxCountViolation(e.target);
            }
        });
    }
    
    init() {
      
        this.noneCheckboxTrue();
        this.noneCheckboxEventListener();
        this.checkboxGroupEventListener();
    }
}

//whenever DOM get loaded this event runs
document.addEventListener('DOMContentLoaded', function () {
  
    let checkboxGroup = document.getElementById('container');
    let noneCheckbox = document.getElementById('noneCheckbox');
    let checkbox = new checkboxManager(checkboxGroup, noneCheckbox, MaxCheckCount);
    checkbox.init();
});
