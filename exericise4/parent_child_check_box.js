class ParentChildCheckBox {
    
    constructor(box) {
        this.box = box;
        this.childBox = document.getElementById(box + 'ChildBox');
        this.parentBox = document.getElementById(box + 'ParentBox');
        this.nodes = this.childBox.childNodes;
        this.container = document.getElementById('container');
        this.containerBox = document.getElementById(box + 'Container');
        this.init(this.box);
    }
    
    init(box) {
        this.toggelDisplay(box);
    }
    
    hideShowBox(value) {
        this.childBox.style.display = value;
    }
    
    showChildBoxWithinScreen(box) {
        this.container.scrollTop =
            this.containerBox.offsetTop - 10;
    }
    
    checkUncheckBoxes() {
        for (let i = 0; i < this.nodes.length; i++) {
            this.nodes[i].checked = this.parentBox.checked;
        }
    }
    
    toggelDisplay(box) {
        if (this.parentBox.checked) {
            this.hideShowBox('block');
            this.showChildBoxWithinScreen(box);
        } else {
            this.hideShowBox('none');
        }
        this.checkUncheckBoxes();
    }
}

let options = document.querySelectorAll('[data-choices]');

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', function (e) {
        new ParentChildCheckBox(e.target.getAttribute('data-choices'));
    });
}
