class Parentchildcheckbox {

  constructor(childBox, parentBox) {
    this.childBox = childBox;
    this.parentBox = parentBox;

  }

  showChildBox() {
    this.childBox.style.display = 'block';
  }

  showChildBoxWithinScreen(box) {
    document.getElementById("container").scrollTop = document.getElementById(box + "Container").offsetTop - 10;
  }

  hideChildBox() {
    this.childBox.style.display = 'none';
  }

  checkUncheckBoxes() {
    var nodes = this.childBox.childNodes;
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].checked = this.parentBox.checked;
    }
  }

  toggelDisplay(box) {
    if (this.parentBox.checked) {
      this.showChildBox();
      this.showChildBoxWithinScreen(box);
    } else {
      this.hideChildBox();
    }
    this.checkUncheckBoxes();
  }
}

function hideShowDisplay(box) {
  let childBox = document.getElementById(box + 'ChildBox');
  let parentBox = document.getElementById(box + 'ParentBox');
  let toggelDisplay = new Parentchildcheckbox(childBox, parentBox);
  toggelDisplay.toggelDisplay(box);
}
