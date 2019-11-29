var boy = document.getElementsByTagName("img")[0];
var titre1 = document.getElementsByTagName("h1")[0];
var titre2 = document.getElementsByTagName("h1")[1];
var fleche = document.getElementsByTagName("img")[1];
var menu = document.getElementsByTagName("ul")[0];
var curScroll = document.documentElement.scrollTop || document.body.scrollTop,
                windowHeight = document.documentElement.clientHeight;
                      
if (curScroll >= menu.offsetTop - windowHeight + menu.offsetHeight/2.5){
        boy.style.opacity = "1";
        titre1.style.opacity ="1";
        titre2.style.opacity ="1";
        fleche.style.opacity ="1";
        menu.style.opacity = "1";
}