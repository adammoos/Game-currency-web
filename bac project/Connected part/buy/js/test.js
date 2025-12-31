function test () {
    var username = document.getElementById('user').value;
    var password = document.getElementById('pass').value;
    var product = document.getElementById('product').options;
    var x = document.getElementById('product').selectedIndex;
    switch(username <= 6) {
        case true :
            alert("Username is too short");
            break;
    }
    switch(password <= 8) {
        case true :
            alert("Password is too short");
            break;
    }
    switch(product[x].text == "Product"){
        case true :
            alert("Product is not selected");
            break;
    }
}
function price () {
    var product = document.getElementById('product').options;
    var x = document.getElementById('product').selectedIndex;
    switch(product[x].text) {
         case "Product":
                alert ("you need to choose a currency to buy");
                break;
            //fortnite part 
            case "1000 vbucks" :
                document.getElementById('price').innerHTML = "20 DT";
                break;
            case "2800 vbucks" :
                document.getElementById('price').innerHTML = "45 DT";
                break;
            case "5000 vbucks" :
                document.getElementById('price').innerHTML = "73 DT"
                break;
            case "13500 vbucks" :
                document.getElementById('price').innerHTML = "170 DT";
                break;
            case "Fortnite crew" :
                document.getElementById('price').innerHTML = "20 DT";
                break;
            case "6$ bundle" :
                document.getElementById('price').innerHTML = "15 DT";
                break;
            case "10$ bundle" :
                document.getElementById('price').innerHTML = "35 DT";
                break;
            case "midas bundle" :
                document.getElementById('price').innerHTML = "35 DT";
                break;
            
            //valorant part
    
            case "500 vp" :
                document.getElementById('price').innerHTML = "23 DT";
                break;
            case "1150 vp" :
                document.getElementById('price').innerHTML = "49 DT";
                break;
            case "2150 vp" :
                document.getElementById('price').innerHTML = "88 DT";
                break;
            case "4400 vp" :
                document.getElementById('price').innerHTML = "178 DT";
                break;
            case "5500 vp" :
                document.getElementById('price').innerHTML = "220 DT";
                break;
            case "10500 vp" :
                document.getElementById('price').innerHTML = "370 DT";
                break;
        }
        }
        

