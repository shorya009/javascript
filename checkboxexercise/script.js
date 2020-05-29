class Checkboxes {

  constructor(checkboxgroup, nonecheckbox, maxcheckcount) {
    this.checkboxgroup = checkboxgroup;
    this.nonecheckbox = nonecheckbox;
    this.selectedcheckboxes = [];
    this.maxcheckcount = maxcheckcount;
  }

  start() {
    this.nonecheckbox.checked = true;
  }

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

  uncheckboxes() {
    var checkedItems = this.checkboxgroup.querySelectorAll(':checked');
    for (var i = checkedItems.length; i--;) {
      checkedItems[i].checked = false;
    }
    this.selectedcheckboxes = [];
  }



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

    //delegating all checks to the enclosing section element
    this.checkboxgroup.addEventListener('click', function(e) {
      if (e.target.tagName == "INPUT") {
        that.checkboxes(e.target);
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var checkboxgroup = document.getElementById('checkbox-group');
  var nonecheckbox = document.getElementById('none');
  var checkboxes = new Checkboxes(checkboxgroup, nonecheckbox, 3);
  checkboxes.start()
  checkboxes.call();
});
