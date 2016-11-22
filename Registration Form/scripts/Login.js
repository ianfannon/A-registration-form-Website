window.onsubmit = function() {
	if (document.getElementById("signedin").checked == true) {
		alert('You will stay signed in');
		return false;
	} else {
		alert("You will not stay signed in");
		return true;
	}
	var yesChecked = document.getElementById("remember").checked;
	if (yesChecked == true) {
		document.getElementById("userName").attribute.autocomplete = "on";
		return true;
	} else {
		document.getElementById("userName").attribute.autocomplete = "off";
		return false;
	}
};
function usernameEventHandler(){
	document.querySelector('#loginForm').onsubmit = function() {
		if (document.querySelector('#userName').value == "") {
			document.querySelector('#feedbackUser').innerHTML = "Username Required!";
			return false;
		} else if (document.querySelector('#passWord').value == "") {
			document.querySelector('#feedbackPass').innerHTML = "Password Required!";
			return false;
		} else {
			document.querySelector('#feedbackUser').innerHTML = "";
			document.querySelector('#feedbackPass').innerHTML = "";
			return true;
		}
	};
}
window.onload = function() {
	usernameEventHandler();
};