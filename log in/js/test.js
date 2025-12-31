function test() {
	var pass = document.getElementById('pass').value ;
	var email = document.getElementById('email').value;
	var l = email.length
	if ((l <= 11) || (email.indexOf("@gmail.com") != l-10) || email.indexOf(" ") != -1 )  
 	{
    alert('The email needs to end with "@gmail.com"') ;
    return false ;
	}
	if (pass.length < 8 ) {
		alert("password need at least 8 caracters");
		return false;
	}
	else {
		return true;
	}
}