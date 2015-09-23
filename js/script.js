var i = 0;
var path = new Array();
 
// LIST OF IMAGES
path[0] = "images/image1.jpg";
path[1] = "images/image2.jpg";
path[2] = "images/image3.jpg";

function swapImage()
{
   document.slide.src = path[i];
   if(i < path.length - 1) i++; else i = 0;
   setTimeout("swapImage()",3000);
};
window.onload=swapImage;

var textField = document.getElementById("textInput");

textField.onfocus = function(){
	if(textField.value == "Enter Roll Here, eg. 0001"){
		textField.value = "";
		textField.className ="textboxOnClickStyle";
	}
};
textField.onblur = function(){
	if(textField.value == ""){
		textField.value = "Enter Roll Here, eg. 0001";
		textField.className ="input";
	}
};

function checkRoll(){

	var form_valid = (document.getElementById('textInput').value == 'Enter Roll Here, eg. 0001');
	
	if(form_valid)return false;
	
		var roll = document.getElementById("textInput").value;
		
		if(roll>=0001 && roll<=6204) return true;
		
		else{
			alert("Roll Not Exists");
			return false;
		}
	
};

var btn = document.getElementById("forButton");
btn.onmouseover = function(){
	btn.style.bgColor = 0xFFFF00;
};