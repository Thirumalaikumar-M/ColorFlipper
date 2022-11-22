let clrs = document.getElementsByName("colors");
var bgtxt = document.getElementById("bgtxt");

function change(clrs){

    document.body.style.backgroundColor = clrs;
    bgtxt.innerHTML = clrs;
    
}