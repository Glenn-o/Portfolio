// partie hamburger nav

var hamburger = document.getElementById("hamb_nav");
var ouvert = 0;


hamburger.onclick = function ouverture_menu(){
    if (ouvert == 0){
        var menu_ouvert = document.getElementById("menu").style.display = "block";
        hamburger.setAttribute("src", "../image/fleche.png");
        hamburger.style.float = "right"
        ouvert = 1;
    }
    else{
        var menu_ferme = document.getElementById("menu").style.display = "";
        hamburger.setAttribute("src", "../image/hamburger.png");
        ouvert = 0;
        hamburger.style.float = "none"
        
    }

}
