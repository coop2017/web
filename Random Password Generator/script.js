
   //generate random password
function generate(){
	
var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = '!@#$%^&*=-_(){}[]';

//var charNum = document.getElementById("charNum");
var numBox = document.getElementById("num");
var symBox = document.getElementById("sym");
    var characters = char;
    (numBox.checked) ? characters += num : '';
    (symBox.checked) ? characters += sym : '';
   
    //(numBox.checked) ? let values = characters ;
    //(symBox.checked) ? var values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+" : '';
    //yourPw.value = password(charNum.value, characters);
    //set password length/complexity
    let complexity = document.getElementById("slider").value;

    //possible password values
   //let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    //create for loop to choose password characters
    for(var i = 1; i <= complexity; i++){
		 password = pass(complexity, characters);    
        //password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1 )));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />";

}

//set default length display of 25
document.getElementById("length").innerHTML = "Length: 25";

//function to set length based on slider position
document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }

}

function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard!");
	 

}// JSON Document

function pass(l,characters){
		var pwd = '';
    for(var j = 0; j<l; j++){
    		pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}

