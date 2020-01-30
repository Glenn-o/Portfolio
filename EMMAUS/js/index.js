var open1 = 0;
var open2 = 0;
var question1 = document.getElementById("faq_p1").addEventListener("click", function description()
{
    if(open1 == 1){
        document.getElementById("description_faq1").innerHTML = "";
        open1 = 0;
    }else{
        document.getElementById("description_faq1").innerHTML ="Vous pouvez donnez directement sur place à l'Emmaüs de Rouen ou aux dépôts de Notre-Dame de Bondeville."
    open1 = 1;
    }
    
})

var question2 = document.getElementById("faq_p2").addEventListener("click", function description2()
{
    if(open2 == 1){
        document.getElementById("description_faq2").innerHTML ="";
        open2 = 0;
    }else{
        document.getElementById("description_faq2").innerHTML = "Tout ces informations sont indiquées sur la page <a href='page/info.html'>Infos Pratiques<a>."
        open2 = 1;
    }
})

// partie hamburger nav

var hamburger = document.getElementById("hamb_nav");
var ouvert = 0;


hamburger.onclick = function ouverture_menu(){
    if (ouvert == 0){
        var menu_ouvert = document.getElementById("menu").style.display = "block";
        hamburger.setAttribute("src", "image/fleche.png");
        hamburger.style.float = "right"
        ouvert = 1;
    }
    else{
        var menu_ferme = document.getElementById("menu").style.display = "";
        hamburger.setAttribute("src", "image/hamburger.png");
        ouvert = 0;
        hamburger.style.float = "none"
        
    }

}




