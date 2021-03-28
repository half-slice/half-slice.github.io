function loadFile(filePath) {
	var result = null;
 	var xmlhttp = new XMLHttpRequest();
 	xmlhttp.open("GET", filePath, false);
 	xmlhttp.send();
 	if (xmlhttp.status==200) {
		result = xmlhttp.responseText;
	}

	alert(result.length);
	return result.split("\n");  //배열로 리턴
}