//selezione griglia nell'html

const griglia = document.getElementById("griglia");


//creiamo una funzione per creare un div quadrato dentro la griglia

function creazionequadrato(){
    const div = document.createElement("div");
    div.classList.add("quadrato");
    return div; 
}





let arrayBombe = [];
for( let y=1 ;y<=16; y++ ){
    
    function generatoreNumeroRandom(min, max){
    return Math.floor(Math.random()*100)+1;}
    arrayBombe.push(generatoreNumeroRandom(0,100));
    
}
//64 quadrati

for(let i = 1; i<=100; i++){
    
    let elementoCorrente = creazionequadrato();
    elementoCorrente.innerHTML=`${i}`

    elementoCorrente.addEventListener('click',function(){
        console.log(this.innerText);
        let numero = this.innerText;
        
        if(!arrayBombe.includes(numero)){
            elementoCorrente.classList.toggle("active");
        }else{
            elementoCorrente.classList.toggle("bomb");
        }
    })

    griglia.append(elementoCorrente);

}


console.log(arrayBombe)
