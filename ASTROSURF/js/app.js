var hamburger = document.getElementById("hamburger");
var nav = document.getElementById("ul");
var titre = document.getElementById("title_nav");

hamburger.addEventListener("click", function changerburger(){
    if(hamburger.className == "open"){
        hamburger.className = ""
        nav.style.animation ="0.6s fermeture_nav"
        setTimeout(animationdiffere, 500)
        titre.className = ""
        
    }else{
        hamburger.className ="open"
        nav.style.display = "block"
        nav.style.animation = "0.5s ouverture_nav"
        titre.className = "open"
    }
});
function animationdiffere(){
    nav.style.display = ""
}
