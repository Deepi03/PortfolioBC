 var clickCount = 0;
//var para = document.getElementById("para");
 function muutaFonttia(){
     clickCount ++;
var showFontti = document.getElementById("showFontti");
     if(clickCount == 1){
         document.getElementById("lista1").style.fontFamily =  'Roboto';
         showFontti.innerHTML = 'Roboto';
         document.getElementById("para").style.fontFamily = "Roboto";
     }
     if(clickCount == 2){
         document.getElementById("lista2").style.fontFamily = "Mansalva";
         showFontti.innerHTML = 'Mansalva';
         document.getElementById("para").style.fontFamily = "Mansalva";
     }
     if(clickCount == 3){
         document.getElementById("lista3").style.fontFamily = "Grenze";
         showFontti.innerHTML = 'Grenze';
         document.getElementById("para").style.fontFamily = "Grenze";
     }
     if(clickCount == 4){
         document.getElementById("lista4").style.fontFamily = "Turret Road";
         showFontti.innerHTML = 'Turret Road';
         document.getElementById("para").style.fontFamily = "Turret Road";
     }
     
     if(clickCount == 5){
         document.getElementById("lista5").style.fontFamily = 'Courier New';
         count = 0;
         showFontti.innerHTML = 'Courier New';
         document.getElementById("para").style.fontFamily = "Courier New";
     }
     
 }