var roll;

function getQueryVariable2(variable) { 
	var query = window.location.search.substring(1); 
	var vars = query.split("&"); 

	for (var i=0;i<vars.length;i++) { 
		var pair = vars[i].split("="); 
		if (pair[0] == variable) { 
			return pair[1]; 
		}
	} 
}
roll = getQueryVariable2("roll");
alert(roll);

var stRoll = document.getElementById("forRoll");
var campus = document.getElementById("forCampus");
var building = document.getElementById("forBuilding");
var floor = document.getElementById("forFloor");
var room = document.getElementById("forRoom");
	
var place = new Array();
place[0]="Khulna University Campus";
place[1]="Reverend Paul’s High School, 87, MA Bari Road, CSS, Gollamari, Khulna";
place[2]="Khulna Collegiate Girls School & KCC Women’s College, Khanjahan Ali Road, Khulna";
	
var kuBuilding = new Array();
kuBuilding[0]="Academic Building-1";
kuBuilding[1]="Academic Building-2";
kuBuilding[2]="Academic Building-3";
	
var bFloor = new Array();
bFloor[0]="3rd Floor";
bFloor[1]="2nd Floor";
bFloor[2]="1st Floor";
bFloor[3]="Ground Floor";

stRoll.innerHTML =roll;

//khulna university
	if(roll>=0001 && roll<=3650){
	
		if(roll>=0001 && roll<=0110){
			campus.innerHTML  = place[2];
			building.innerHTML  = kuBuilding[0];
			floor.innerHTML  = bFloor[0];
			room.innerHTML  = "1401";
		}
		else if(roll>=0111 && roll<=0155){
			campus.innerHTML  = place[0];
			building.innerHTML  = kuBuilding[0];
			floor.innerHTML  = bFloor[0];
			room.innerHTML  = "1402";
		}
		else if(roll>=0156 && roll<=0220){
			campus.innerHTML  = place[0];
			building.innerHTML  = kuBuilding[0];
			floor.innerHTML  = bFloor[0];
			room.innerHTML  = "1403";
		}
		else if(roll>=0221 && roll<=0255){
			campus.innerHTML  = place[0];
			building.innerHTML  = kuBuilding[0];
			floor.innerHTML  = bFloor[0];
			room.innerHTML  = "1423";
		}
	}
	
	//Paul’s High School
	else if(roll>=3651 && roll<=5800){}
	
	//KCC Women’s College
	else if(roll>=5801 && roll<=6204){}

window.onload = getQueryVariable2;




			
			