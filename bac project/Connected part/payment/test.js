function card (card) {
    i = 0
    teste = true
    while (card.indexOf("-" != -1) && teste == true) {
        i++
        card = card.substring(0,card.indexOf("-"))
        teste = card.length == 4
    }
    return i 
}
function test () {
    var card = document.getElementById('cardNumber').value;
    var Name = document.getElementById('cardName').value;
    var x = document.getElementById('cardMonth').selected;
    var month = document.getElementById('cardMonth').option;
    var y = document.getElementById('cardYear').selected;
    var year = document.getElementById('cardYear').option;
    if( card.length <= 20 || card(card) != 4 )
    {
        alert("wrong");
        return false;
    }
}