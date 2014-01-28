


function content(id) {

		var f = document.getElementsByClassName("blah");
    	for (var i = 0; i < f.length; i++) {
    		f[i].style.display = 'none';
    	}
    	
		var e = document.getElementById(id);
    	if(e.style.display == 'none') {
    		e.style.display = 'block';
    	} 
		else {
    		e.style.display = 'block';
    	}
		
		document.body.style.background = '#333333';	
};

function brand(id) {
	var b = document.getElementByID("body");
	if (b.style.display.background == '#333333') {
		document.body.style.background = '#dcdcdc';	
	}

};

// add this under the if statement if you want to help users back to log on button.
// else {
//    		e.style.display = 'none';
//    	}


