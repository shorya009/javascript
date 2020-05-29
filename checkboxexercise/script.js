//created a class Checkbox

class Checkboxes {

  constructor(checkboxgroup, nonecheckbox, maxcheckcount) {
    this.checkboxgroup = checkboxgroup; 
    this.nonecheckbox = nonecheckbox;
    this.selectedcheckboxes = []; //array to store checked boxes value
    this.maxcheckcount = maxcheckcount; //max check count variable
  }

  start() {
    this.nonecheckbox.checked = true;
  }

  //function to check if max count violation is happening or not for each checkbox click
  checkboxes(currentcheckbox) {
    this.nonecheckbox.checked = false;
    if (currentcheckbox.checked) {
      if (this.selectedcheckboxes.length < this.maxcheckcount) {
        this.selectedcheckboxes.push(currentcheckbox.id);
      } else {
        currentcheckbox.checked = false;
        this.alert_max_count_violation();
      }
    } else {
      this.selectedcheckboxes.splice(this.selectedcheckboxes.indexOf(currentcheckbox.id), 1);
    }
  }
//function to uncheck boxes when none is clicked
  uncheckboxes() {
    var checkedItems = this.checkboxgroup.querySelectorAll(':checked');
    for (var i = checkedItems.length; i--;) {
      checkedItems[i].checked = false;
    }
    this.selectedcheckboxes = [];
  }
// to alert when max count has been violated
  alert_max_count_violation() {
    var lastselectedbox = this.selectedcheckboxes[this.selectedcheckboxes.length - 1];
    alert('Only 3 days can be selected.' +
      '\nYou have already selected ' + this.selectedcheckboxes.slice(0, -1).join(', ') + ' and ' + lastselectedbox);
  }

  call() {
    var that = this;

    this.nonecheckbox.addEventListener('click', function() {
      if (this.checked) {
        that.uncheckboxes();
        this.checked = true;
      }
    });

    //delegating all the checks to checkboxes function
    this.checkboxgroup.addEventListener('click', function(e) {
      if (e.target.tagName == "INPUT") {
        that.checkboxes(e.target);
      }
    });
  }
}

//whenever DOM get loaded this event runs
document.addEventListener('DOMContentLoaded', function() {
  var checkboxgroup = document.getElementById('checkbox-group');
  var nonecheckbox = document.getElementById('none');
  var checkboxes = new Checkboxes(checkboxgroup, nonecheckbox, 3);
  checkboxes.start() // to check the nonecheckbox when DOM is loaded
  checkboxes.call();// to handle checkbox and none functionality
});
