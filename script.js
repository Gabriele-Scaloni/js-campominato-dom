/*  creo un prompt chiedendo il livello di difficoltà 
richiamo il contenitore per assegnargli una costante
creo un ciclo per creare i quadrati
    scrivo i numero all'interno dandogli display none
adatto il n di quadrati in base alla difficoltà inserita dall'user
creo una funzione mi permetterà di togliere un display con un click
*/

let domandaIniziale = prompt("scegli la difficltà tra 1, 2 o 3");   

let levels = 100; //di default, in base a quante volte divido il contenitore

const numArr=[];



//selezione livelli
if (domandaIniziale == 1) {
    levels = 100;
} else if  (domandaIniziale == 2) {
    levels = 81;
} else if (domandaIniziale == 3) {
    levels = 49;
} else if (domandaIniziale > 3 ||domandaIniziale < 1) {
    alert("riprova, i livelli sono da 1 a 3 ")
    levels = 0;
}

//genero numeri casuali da 1 a 100 * 16 volte e li metti in numArr
for(var i=0;i<16;i++){
var randomNumber = Math.floor(Math.random()*levels)+1;// il n random lo genero in base al numero di quadrati massimi del livello
var nuovo = true;
for(var j=0; j<i; j++){
if(numArr[j]==randomNumber)nuovo=false;
}
if(nuovo){
    numArr[i]=randomNumber;
}else{
i--;
}
} console.log(numArr);
 
const contenitore = document.getElementById("cont");

for (let i = 0; i < levels; i++) {

    let newElement = newSquare ("div", "square");
    newElement.addEventListener("click",

    function(){ 
        newElement.classList.add("clickOnce");
        // numeri all'interno dei quadrati
       newElement.append(i+1);
       //newElement.append. classe per la bomba

    });

    contenitore.appendChild(newElement);
    console.log(contenitore);
    
}

function newSquare (elemento, quadratoNuovo) {
    let node = document.createElement(elemento);
    node.classList.add(quadratoNuovo);
    return node
} 