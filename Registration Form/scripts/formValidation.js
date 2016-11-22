function checkForBlank(form){
	//If input fields are blank      firstname, lastname, email, date
	if(form.email.value == ""){
		document.getElementById("errEmail").style.visibility = "visible";
		form.email.focus();
		return false;
	}
	if(form.date.value == ""){
		document.getElementById("errDate").style.visibility = "visible";
	    form.date.focus();
		return false;
	}
}

function phoneValidate(){
	document.getElementById('telephone').onsubmit = function(){
		if((document.getElementById('telephone').value == "") {
			document.getElementById('errTele').innerHTML = "Telephone number Required!";
			return false;
		}else if((isNaN(document.getElementById('telephone').value) || document.getElementById('telephone').length < 10)){
			alert("Invalid phone number!");
			return false;
		}else{
			return true;
		}
	};
}
window.onload = function(){
	phoneValidate();
};
function formEventHandler(){
	document.getElementById('simpleForm').onsubmit = function(){
		if(document.getElementById('firstname').value == "" || document.getElementById('lastname').value == ""){
			document.getElementById('errFn').innerHTML = "First name is required!";
			document.getElementById('errLn').innerHTML = "Last name is required!";
			return false;
		}else{
			document.getElementById('errFn').innerHTML = "";
			document.getElementById('errLn').innerHTML = "";
			return true;
		}
		var re = /^[\w ]+$/;
		if(!re.test(document.getElementById('firstName').value) || (!re.test(document.getElementById('lastName').value)){
			document.getElementById('firstName') = "First Name contains invalid characters!";
			document.getElementById('lastName') = "Last Name contains invalid characters!";
			return false;
		}else{
			document.getElementById('errFn').innerHTML = "";
			document.getElementById('errLn').innerHTML = "";
		}
	};
}
window.onload = function(){
	formEventHandler();
};

function isChecked(){
	var maleChecked = document.getElementById('male').checked;
	var femaleChecked = document.getElementById('female').checked;
	if(maleChecked == false && femaleChecked == false){
		document.getElementById('radio').innerHTML = "Please select a Gender!";
		return false;
	}else{
		return true;
	}
}