function addEvent(a,b,c,d){d = !d && false;(a.addEventListener)?a.addEventListener(b,c,d):a.attachEvent('on'+b,c);}

var boy = document.getElementsByTagName("img")[0];
var titre1 = document.getElementsByTagName("h1")[0];
var titre2 = document.getElementsByTagName("h1")[1];
var fleche = document.getElementsByTagName("img")[1];
var menu = document.getElementsByTagName("ul")[0];
var curScroll = document.documentElement.scrollTop || document.body.scrollTop,
		windowHeight = document.documentElement.clientHeight;
        

if (curScroll >= boy.offsetTop - windowHeight + boy.offsetHeight/2.5){
        boy.style.opacity = "1";
        titre1.style.opacity ="1";
        titre2.style.opacity ="1";
        fleche.style.opacity ="1";
        menu.style.opacity = "1";
}

addEvent(window, "scroll", scrolled, false);