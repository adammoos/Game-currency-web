function test() {
	var pass = document.getElementById('password').value ;
	var username = document.getElementById('username').value ;
	var confirm = document.getElementById('confirm').value ;
	var email = document.getElementById('email').value;
	if (username.length <= 6) {
		alert("username needs to be at least 6 caracters");
		return false ;
	}
	var l = email.length
	if ((l <= 11) || (email.indexOf("@gmail.com") != l-10)|| email.indexOf(" ") != -1 )  
 	{
    alert('The email needs to end with @gmail.com ') ;
    return false ;
	}
	if (pass.length < 8 ) {
		alert("password need at least 8 caracters");
		return false; 
	}
	if (pass != confirm) {
		alert ("password is not the same ")
		return false;
	} 
	else {
		return true;
	}
}