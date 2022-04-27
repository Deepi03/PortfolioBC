function changeUser(){
    var nimi = prompt("Please enter your name","your name");
    if(nimi != null){
        document.getElementById("nimi").innerHTML = "," + nimi;
    }

}


function logoChange(){
    
    var logo = document.getElementById("logo");
     logo.src="images/brave-icon.png";

     var heading = document.getElementById("heading");
     heading.innerText="Is Brave even Cooler";

     document.getElementById("container").style.backgroundColor = "white";
}