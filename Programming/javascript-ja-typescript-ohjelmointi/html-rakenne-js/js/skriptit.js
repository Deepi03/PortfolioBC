
/* var para = document.createElement("p");

var node = document.createTextNode("Tämä on kappaleen teksti");

para.appendChild(node);

const bodyElement = document.getElementsByTagName("body")[0];

bodyElement.appendChild(para); */

var divi = document.createElement("div");

//lisää diviin id "div1"
divi.id = "div1";
document.getElementsByTagName("body")[0].appendChild(divi);


//lisätään para1 with id nd text to div#div1 
var para = document.createElement("p");

var node = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, maxime debitis molestias fugit quisquam porro et quam iure impedit ea, non animi esse expedita eaque harum illum? Quod, libero sit!");
para.appendChild(node);//adding textNode to para1

document.getElementById("div1").appendChild(para);// adding para1 to div#div1

//lisätään para2 with id nd text to div#div1 

var para = document.createElement("p");

para.id = "p2";

var node = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, maxime debitis molestias fugit quisquam porro et quam iure impedit ea.");

para.appendChild(node);
document.getElementById("div1").appendChild(para);

//Lisätään 3.kappale/

var para = document.createElement("p");

para.id = "p3";
var node = document.createTextNode("Lisää tekstiä... ..dscvfdv");

para.appendChild(node);

document.getElementById("div1").appendChild(para);