function test() {
	var pass = document.getElementById('password').value ;
	var username = document.getElementById('username').value ;
	var confirm = document.getElementById('confirm').value ;
	var tel = document.getElementById('phone').value;
	var email = document.getElementById('email').value;
	if (username.length <= 6) {
		alert("username is too short");
		return false
	}
	switch ((isNaN(tel)) ||(tel<10000000) || ( tel> 99999999))
		{
	case true :
		alert('the number needs to be tunisian');
		return false ;
	}
	var l = email.length
	if ((l <= 11) || (email.indexOf("@gmail.com") != l-10) || email.indexOf(" ") != -1 )  
 	{
    alert('The email needs to end with "@gmail.com"') ;
    return false ;
	}
	if (pass.length < 8 ) {
		alert("password is too short");
		return false;
	}
	if (pass != confirm) {
		alert ("password confirmation  is not the same ")
		return false;
	} 
	else {
		return true;
	}
}