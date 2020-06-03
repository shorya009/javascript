function hideShowDisplay(box)
  { 
    var childBox = document.getElementById(box+'ChildBox');
    var parentBox = document.getElementById(box+'ParentBox');
    if(parentBox.checked)
    {
      childBox.style.display = 'block';
      document.getElementById("container").scrollTop = document.getElementById(box+"Container").offsetTop - 10;
    }
    else
    {
      childBox.style.display = 'none';
    }
    var nodes = childBox.childNodes;
    for(i=0; i<nodes.length; i++) {
      nodes[i].checked = parentBox.checked;
    }   
  }
