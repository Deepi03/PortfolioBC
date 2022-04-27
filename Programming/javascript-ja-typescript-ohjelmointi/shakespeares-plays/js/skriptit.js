document.body.style = "margin:1rem 0 0 5rem" ;
 

 //Adding class to the list
 var first = document.getElementById("eka");
var ul = first.getElementsByTagName("ul")[0];
ul.className = "rivit-vierekkain";
//ul.style = "display:inline-flex" , "flex-flow:row" , "flex-wrap:wrap";

//taking all the list-style form child of ul i.e.,comdeies,tragedies,history

var listHeading = first.getElementsByTagName("li")[0];
listHeading.classList.add("noStyle");

var listHeading1 = first.getElementsByTagName("li")[5];
listHeading1.classList.add("noStyle");
var listHeading2 = first.getElementsByTagName("li")[9];
listHeading2.classList.add("noStyle");

var a = document.querySelectorAll(".noStyle");

for(var i = 0; i < a.length ; i++){
   
    a[i].style= "list-style:none;";
    
}

//Background color for ul inside comedie,tragedie nd history  li

var ulInisdeLi = first.getElementsByTagName("ul")[1];
ulInisdeLi.classList.add("greybg");
var ulInisdeLi1 = first.getElementsByTagName("ul")[2];
ulInisdeLi1.classList.add("greybg");
var ulInisdeLi2 = first.getElementsByTagName("ul")[3];
ulInisdeLi2.classList.add("greybg");

var greybg = document.querySelectorAll(".greybg");
for(var i=0 ; i < greybg.length ; i++ ){
    greybg[i].style.backgroundColor = "lightgray";
    greybg[i].style.margin = "1rem 1rem 0 0";
    
}


function linkFunction(){
    var links = document.links;
    for(var i=0 ; i <links.length;i++){
        document.getElementsByTagName("a")[i].className = "dotted";
    }
}
linkFunction();

/* 
var dotted = first.getElementsByTagName("a")[0];

 dotted.style = "text-decoration-style: dotted; color: #7F170E;     font-weight: bold; font-style: italic;"

 var dotted1 = first.getElementsByTagName("a")[1];
 dotted1.style = "text-decoration-style: dotted; color: #7F170E;     font-weight: bold; font-style: italic;"

 var dotted2 = first.getElementsByTagName("a")[2];
 dotted2.style = "text-decoration-style: dotted; color: #7F170E;     font-weight: bold; font-style: italic;"

 var dotted3 = first.getElementsByTagName("a")[3];
 dotted3.style = "text-decoration-style: dotted; color: #7F170E;     font-weight: bold; font-style: italic;" */



// var tr = document.getElementsByTagName('tr');
// for(i=0;i<tr.length;i++){
//     if(i%2!=0) tr[i].style= "background-color: lightgrey; margin: 1rem 1rem 0 0";
// }


//  var td1 = document.getElementsByTagName("td");
// for(i=0;i<td1.length;i++){
//     td1[i].style= "padding-right: 17rem";
    

// }
// var td2 = document.getElementsByTagName("td");
// for(i=0;i < td2.length - 6 ;i++){
//     td2[i].style= "padding-right: 10rem";
// } 


// function pdf() {

//     var links = document.links;

//     for (var i = 0; i < links.length; i++) {

//         var pdf = links[i].href.slice(links[i].href.length -3);

//         console.log(pdf);

//         if(pdf.equals("pdf")){

//             document.getElementsByTagName("a")[i].insertAdjacentHTML("afterend", '<i class="fas fa-file-pdf"></i>');

//         }

//     }

// }
 var section2 = document.getElementById("toka");
section2.getElementsByTagName("tbody")[0].className = "even";


var section3 = document.getElementById("kolmas")
section3.getElementsByTagName("tbody")[0].className = "odds";
 