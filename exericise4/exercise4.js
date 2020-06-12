class Exercise4 {

  constructor(box) {
    this.box = box
    this.childBox = document.getElementById(box + 'ChildBox')
    this.parentBox = document.getElementById(box + 'ParentBox')
    this.init(this.box)
  }
  
  init(box) {
    this.toggelDisplay(box)
  }

  hideShowBox(value) {
    this.childBox.style.display = value
  }

  showChildBoxWithinScreen(box) {
    document.getElementById('container').scrollTop =
      document.getElementById(box + 'Container').offsetTop - 10
  }
  
  checkUncheckBoxes() {
    var nodes = this.childBox.childNodes
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].checked = this.parentBox.checked
    }
  }

  toggelDisplay(box) {
    if (this.parentBox.checked) {
      this.hideShowBox('block')
      this.showChildBoxWithinScreen(box)
    } else {
      this.hideShowBox('none')
    }
    this.checkUncheckBoxes()
  }
}

let options = document.querySelectorAll('[data-select]')

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener('click', function (e) {
    new Exercise4(e.target.getAttribute('data-select'))
  })
}
