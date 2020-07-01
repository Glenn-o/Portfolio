img1 = document.getElementById("img1");
img2 = document.getElementById("img2");
img3 = document.getElementById("img3");
img4 = document.getElementById("img4");
img5 = document.getElementById("img5");
img6 = document.getElementById('img6');

all = document.getElementById("all");
php = document.getElementById("php");
html = document.getElementById("html");
c = document.getElementById("c");
sql = document.getElementById("SQL");
js = document.getElementById("js");
processing = document.getElementById("processing");
all.style.background = "white";
all.style.color = "#7f55fd";

all.addEventListener("click", function(){
    img1.style.display = "flex"
    img2.style.display = "flex";
    img3.style.display = "flex";
    img4.style.display = "flex";
    img5.style.display = "flex";
    img6.style.display = "flex":
    all.style.background = "white";
    all.style.color = "#7f55fd";
   
})

html.addEventListener("click", function(){
    img1.style.display = "flex"
    img2.style.display = "none";
    img3.style.display = "flex";
    img4.style.display = "none";
    img5.style.display = "none";
    img6.style.display = "flex":
    all.style.background = "#7f55fd";
    all.style.color = "white";
})

php.addEventListener("click", function(){
    img1.style.display = "flex"
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    img5.style.display = "none";
    img6.style.display = "none":
    all.style.background = "#7f55fd";
    all.style.color = "white";
})

js.addEventListener("click", function(){
    img1.style.display = "flex"
    img2.style.display = "none";
    img3.style.display = "flex";
    img4.style.display = "none";
    img5.style.display = "none";
    img6.style.display = "flex":
    all.style.background = "#7f55fd";
    all.style.color = "white";
})

sql.addEventListener("click", function(){
    img1.style.display = "flex"
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    img5.style.display = "flex";
    img6.style.display = "none":
    all.style.background = "#7f55fd";
    all.style.color = "white";
})
c.addEventListener("click", function(){
    img1.style.display = "none"
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "flex";
    img5.style.display = "flex";
    img6.style.display = "none":
    all.style.background = "#7f55fd";
    all.style.color = "white";
})

processing.addEventListener("click", function(){
    img1.style.display = "none"
    img2.style.display = "flex";
    img3.style.display = "none";
    img4.style.display = "none";
    img5.style.display = "none";
    img6.style.display = "none":
    all.style.background = "#7f55fd";
    all.style.color = "white";
})

