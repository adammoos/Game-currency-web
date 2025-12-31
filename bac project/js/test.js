
$(document).ready(function() {
    var len = 0;
    var maxchar = 300;
  
    $( '#message' ).keyup(function(){
      len = this.value.length
      if(len > maxchar){
          return false;
      }
      else if (len > 0) {
          $( "#remainingC" ).html( "Remaining characters: " +( maxchar - len ) );
      }
      else {
          $( "#remainingC" ).html( "Remaining characters: " +( maxchar ) );
      }
    })
  });

function test()
{
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var tel = document.getElementById('phone').value;
var msg = document.getElementById('message').value ;
if
(name.length <= 6 )
{
alert('The name needs be at least 6');
return false;
}
var l = email.length
if ((l <= 11) || (email.indexOf("@gmail.com") != l-10) || email.indexOf(" ") != -1 )  
 {
    alert('The email needs be me clear') ;
    return false ;
}
if ((isNaN(tel)) ||(tel<10000000) || ( tel> 99999999))
    {
    alert('the number needs to be tunisian')
    return false ;
}
if (msg.length <= 20) {
    alert('The message needs to be filled at least with 20 characters') ;
    return false ;
}
else{
    return true;
}
}