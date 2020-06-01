function HideshowDisplay(box)
	{	
		var ChildBox = document.getElementById(box+'ChildBox');
		var ParentBox = document.getElementById(box+'ParentBox');
		if(ParentBox.checked)
		{
			ChildBox.style.display = 'block';
			document.getElementById("container").scrollTop = document.getElementById(box+"Container").offsetTop - 10;
		}
		else
		{
			ChildBox.style.display = 'none';
		}
		var nodes = ChildBox.childNodes;
		for(i=0; i<nodes.length; i++) {
			nodes[i].checked = ParentBox.checked;
		}		
	}
