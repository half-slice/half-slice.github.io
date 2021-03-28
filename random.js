var xhr = new XMLHttpRequest();
xhr.onreadystatechange = readFile;
xhr.open("GET", "https://raw.githubusercontent.com/half-slice/hangman/master/EngWord.txt", true);
xhr.send();

function readFile()
{
  if (xhr.readyState == 4) {
    var resp = JSON.parse(xhr.responseText);

    // resp now has the text and you can process it.
	alert(resp);
  }
}