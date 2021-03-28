function setLevel(chosenLevel){
	alert(2);
	
	switch(chosenLevel){
		case 1:
			
			document.getElementById("normal").style.display = "none";
			document.getElementById("hard").style.display = "none";
			break;
		case 2:
			
			document.getElementById("easy").style.display = "none";
			document.getElementById("hard").style.display = "none";
			break;
		case 3:
			
			document.getElementById("easy").style.display = "none";
			document.getElementById("normal").style.display = "none";
			break;
	}
	
	readFile();
	
}


