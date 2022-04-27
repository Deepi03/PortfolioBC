var clickCount = 0;
var totalClick = 0;


function clickHandler(){
    var list = document.getElementById("lista");
    var showClick = document.getElementById("showClick");
    clickCount ++;
    totalClick ++;

   showClick.innerHTML = totalClick;
    if(clickCount == 1){
        document.getElementById("lista1").style.fontSize ="20px";
    }


    if(clickCount == 2){
        document.getElementById("lista2").style.fontSize = "24px";
    }
    if(clickCount == 3){
        document.getElementById("lista3").style.fontSize = "28px";
    }
    if(clickCount == 4){
        document.getElementById("lista4").style.fontSize = "32px";
    }
    if(clickCount == 5){
        document.getElementById("lista5").style.fontSize = "16px";
        clickCount = 0;
        
    }
  

}