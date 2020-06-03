class checkbox {

  constructor(checkboxGroup, noneCheckbox, maxCheckCount) {
    this.checkboxGroup = checkboxGroup; 
    this.noneCheckbox = noneCheckbox;
    this.selectedCheckboxes = []; //array to store checked boxes value
    this.maxCheckCount = maxCheckCount; //max check count variable
  }

  start() {
    this.noneCheckbox.checked = true;
  }

  //function to check if max count violation is happening or not for each checkbox click
  checkboxes(currentCheckbox) {
    this.noneCheckbox.checked = false;
    if (currentCheckbox.checked) {
      if (this.selectedCheckboxes.length < this.maxCheckCount) {
        this.selectedCheckboxes.push(currentCheckbox.id);
      } else {
        currentCheckbox.checked = false;
        this.alertMaxCountViolation();
      }
    } else {
      this.selectedCheckboxes.splice(this.selectedCheckboxes.indexOf(currentCheckbox.id), 1);
    }
  }
//function to uncheck boxes when none is clicked
  uncheckBoxes() {
    var checkedItems = this.checkboxGroup.querySelectorAll(':checked');
    for (var i = checkedItems.length; i--;) {
      checkedItems[i].checked = false;
    }
    this.selectedCheckboxes = [];
  }
// to alert when max count has been violated
  alertMaxCountViolation() {
    var lastSelectedBox = this.selectedCheckboxes[this.selectedCheckboxes.length - 1];
    alert('Only 3 days can be selected.' +
      '\nYou have already selected ' + this.selectedCheckboxes.slice(0, -1).join(', ') + ' and ' + lastSelectedBox);
  }

  call() {
    var that = this;

    this.noneCheckbox.addEventListener('click', function() {
      if (this.checked) {
        that.uncheckBoxes();
        this.checked = true;
      }
    });

    //delegating all the checks to checkboxes function
    this.checkboxGroup.addEventListener('click', function(e) {
      if (e.target.tagName == "INPUT") {
        that.checkboxes(e.target);
      }
    });
  }
}

//whenever DOM get loaded this event runs
document.addEventListener('DOMContentLoaded', function() {
  var checkboxGroup = document.getElementById('checkbox-group');
  var noneCheckbox = document.getElementById('none');
  var checkboxes = new checkbox(checkboxGroup, noneCheckbox, 3);
  checkboxes.start() // to check the noneCheckbox when DOM is loaded
  checkboxes.call();// to handle checkbox and none functionality
});
