//Lisätään bodyn lapset
var article = document.createElement("article");
var header = document.createElement("header");
var section = document.createElement("section");
var footer =  document.createElement("footer");

document.body.id = "runko";
article.id="wrapper";
header.id = "osa1";
section.id ="osa2";
footer.id = "alatunniste";

document.getElementById("runko").appendChild(article);
document.getElementById("wrapper").appendChild(header);
document.getElementById("wrapper").appendChild(section);
document.getElementById("wrapper").appendChild(footer);

//header#osa1
//Luodaan header#osa1 lapset(html -elementit)
var otsikko = document.createElement("h1");
var kappale = document.createElement("p");

//Lisätään lapsiin tekstit
var teksti1 = document.createTextNode("Tämä on artikkelin otsikko");
var teksti2 = document.createTextNode("Esinmäinen osan ensimäinen kappale.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed at expedita architecto harum, doloribus ea fugit dolorem, necessitatibus tenetur, dolores eaque qui aspernatur natus voluptatem sapiente repellat quis deleniti consequatur?");

//Lisätään lapset otsikon ja kappalen sisään

otsikko.appendChild(teksti1);
kappale.appendChild(teksti2);
//Lisätään lapset header  sisään

document.getElementById("osa1").appendChild(otsikko);
document.getElementById("osa1").appendChild(kappale);

// section#osa2
// Luodaan section#osa2 lapset(html -elementit)
var para = document.createElement("p");
var figure = document.createElement("figure");
var img = document.createElement("img");
img.src = "images/js_machine.gif";
img.alt = "javaScript machine animatioon gif";

//Lisätään lapsiin tekstit
var teksti3 = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed at expedita architecto harum, doloribus ea fugit dolorem, necessitatibus tenetur, dolores eaque qui aspernatur natus voluptatem sapiente repellat quis deleniti consequatur?");
para.appendChild(teksti3);
figure.appendChild(img);

//lisätään lapset section sisään

document.getElementById("osa2").appendChild(para);
document.getElementById("osa2").appendChild(figure);

//footer#alatunniste
// Luodaan footer#alatunniste lapset(html -elementit)
var para = document.createElement("p");


//Lisätään lapsiin tekstit
var teksti4 = document.createTextNode("© 2021 Deepika Malini Rajasekar");
para.appendChild(teksti4);

//lisätään lapset footer sisään
document.getElementById("alatunniste").appendChild(para);

var styles = ` html{
    font-size: 62.5%;
}

body{
   
    border: dotted 0.2rem #9e9e9e;
}
#osa1{
  border-bottom: dotted 0.2rem grey;
  padding: 1rem;
}

#osa1 h1{
    font-size: 3rem;
    padding-bottom: 1rem;
    font-weight: 700;
    
}

#osa1 p{

    font-size: 1.8rem;
    letter-spacing: 0.002rem;
}
#osa2{
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row; 
    border-bottom: dotted 0.2rem grey;
padding: 1rem 1rem 0 1rem;
}

#osa2 p{
    font-size: 1.8rem;
    padding-bottom: 1rem;
}




#osa2 > *{
    flex-basis: 50%;
    flex-grow: 1;
}

#alatunniste{
font-size: 1.8rem;
 padding: 1rem;
}


figure{
    display: block;
    padding-bottom: 1rem;
}
img{
    max-width: 100%;
}

}`;

var styleSheet = document.createElement("style");
styleSheet.innerText = styles;

document.getElementsByTagName("head")[0].appendChild(styleSheet);
