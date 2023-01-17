let navBar = document.createElement("nav");
document.body.appendChild(navBar);

let section1 = document.createElement("section");
document.body.appendChild(section1);
section1.setAttribute("id","section1");

let section2 = document.createElement("section");
document.body.appendChild(section2);
section2.setAttribute("id","section2");

let boxBtnSec1 = document.createElement("div");
section1.appendChild(boxBtnSec1);
boxBtnSec1.setAttribute("id","contboutsec1");

let exeBtn = document.createElement("button");
boxBtnSec1.appendChild(exeBtn);
exeBtn.textContent='Ecrire';



let container = document.createElement("div");
section1.appendChild(container);
container.setAttribute("id","container");

let formulaire = document.createElement("h3");
container.appendChild(formulaire);
formulaire.textContent = "Formulaire";

let container1 = document.createElement("div");
container.appendChild(container1);
container1.setAttribute("id","container1");

let  intitule = document.createElement("label");
container1.appendChild(intitule);  
intitule.textContent = "Titre";

let title = document.createElement("input");
container1.appendChild(title);
title.setAttribute("id","inputfield1");

let container2 = document.createElement("div");
container.appendChild(container2);
container2.setAttribute("id","container2");

let  intitule2 = document.createElement("label");
container2.appendChild(intitule2);  
intitule2.textContent = "Texte";

let text = document.createElement("textarea");
container2.appendChild(text);
text.setAttribute("rows","10");
text.setAttribute("cols","250");
text.setAttribute("id","inputfield2");

let boxBtn = document.createElement("div");
container.appendChild(boxBtn);
boxBtn.setAttribute("id","containerbtn");

let submit = document.createElement("button");
boxBtn.appendChild(submit);
submit.textContent = "Publier";


container.style.display = "none";

exeBtn.addEventListener("click", function (){
    if(container.style.display === "none" ){
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }
})


function createDom(element_name, text, parent) {
    const markup = document.createElement(element_name);
    markup.textContent = text;
    parent.appendChild(markup);
    return markup;
}


submit.addEventListener('click', function(){
    container.style.display = "none";

    let article = document.createElement("article");
    section2.appendChild(article);
    let ancre = document.createElement("a");
    article.appendChild(ancre); 
    ancre.setAttribute("class","ancre");
    let boxTitle = document.createElement("h1");
    article.appendChild(boxTitle);
    let boxText = document.createElement("p");
    article.appendChild(boxText);
    let boxA = document.createElement("div");
    navBar.appendChild(boxA);
    boxA.setAttribute("class","boxa");
    let link = document.createElement("a");
    boxA.appendChild(link);
    link.setAttribute("class","lien");

    let links = document.getElementsByClassName("lien");
    for (var i = 0; i < links.length; i++) {
        links[i].href = "#link" + i;
    }

    let anchors = document.getElementsByClassName("ancre");
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].id = "link" + i;
    } 

    link.textContent = title.value;
    boxTitle.textContent = title.value;
    boxText.textContent = text.value;
    document.getElementById("inputfield1").value = "";
    document.getElementById("inputfield2").value = "";
    let boxArtBtn = document.createElement("div");
    article.appendChild(boxArtBtn); 
    boxArtBtn.setAttribute("class","delete");
    let artBtn = createDom("button","suppimer",boxArtBtn);

    artBtn.addEventListener("click", function (){
        article.remove();
        boxA.remove();
    })
})


