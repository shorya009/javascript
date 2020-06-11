const width = 400;
const height = 450;

class Url {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  isBlank(str) {
    return !str || /^\s*$/.test(str);
  }
  askUrl() {
    let that = this;
    let url = prompt('Please enter URL');

    if (that.isBlank(url)) {
      alert('cannot enter empty values kindly refresh the page to try again');
    } else {
      window.open(
        url,
        'targetWindow',
        'toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=' +
          this.width +
          ',height=' +
          this.height
      );
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  let alert = new Url(width, height);
  alert.askUrl();
})
