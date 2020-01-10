var choix = 0;
var tab_user = [];
var tab ="tab"
var x;
var positionRandom;
function choixUser(choix_user){
        choix = choix_user;
}

//fonction principale

function play(id){
    if (choix == 0){ //choix obligé
        document.getElementById("choix_null").innerHTML = "Veuillez choisir !";
    }
    if(choix != 0){
        document.getElementById("choix_null").innerHTML = " ";
        if(tab_user[id] == "X" || tab_user[id] == "O")
        {
            console.log(1);
        }else{
            document.getElementById(id).innerHTML = choix;
            tab_user[id] = choix;
        }
    } 
    gagne("tab1","tab2","tab3");
    gagne("tab1","tab4","tab7");
    gagne("tab2","tab5","tab8");
    gagne("tab3","tab6","tab9");
    gagne("tab4","tab5","tab6");
    gagne("tab7","tab8","tab9");
    gagne("tab3","tab5","tab7");
    gagne("tab1","tab5","tab9");
} 

//fonction si l'utilisateur a gagné

function gagne(a,b,c){
    if(tab_user[a] == "X" && tab_user[b] =="X" && tab_user[c]== "X" || tab_user[a] == "O" && tab_user[b] =="O" && tab_user[c]== "O" )
    {
        document.getElementById('choix_null').innerHTML = "Vous avez gagné";
        document.getElementById('choix_null').style.color = "red";
        document.getElementById('choix_null').style.animation = "bounce 2s infinite";
    }  
}
function random(){
    var random = (Math.floor(Math.random() * x) + 1); 
    x -= 2;
    positionRandom = "tab" + random;
    return positionRandom;
}