//selezione griglia nell'html

const griglia = document.getElementById("griglia");
console.log(griglia);

//creiamo una funzione per creare un div quadrato dentro la griglia

function creazionequadrato(){
    const div = document.createElement("div");
    div.classList.add("quadrato");
    return div; 
}

console.log(creazionequadrato());



let arrayBombe = [];

//64 quadrati
console.log(arrayBombe)
for(let i = 1; i<=100; i++){
    
    let elementoCorrente = creazionequadrato();
    elementoCorrente.innerHTML=`${i}`

    elementoCorrente.addEventListener('click',function(){
        console.log(this);
        this.classList.toggle("active");
    })

    griglia.append(elementoCorrente);

}

for( let y=1 ;y<=16; y++ ){
    
    function generatoreNumeroRandom(min, max){
    return Math.floor(Math.random()*100)+1;}
    arrayBombe.push(generatoreNumeroRandom(0,100));
    
}
console.log(arrayBombe)
  