//Seleziono la select della difficolta
let difficolta = document.getElementById('difficolta');
//seleziono griglia nell'html
const griglia = document.getElementById('griglia');
//array di bombe compilato dalla funzione
let bombe = [];
//bomba equivalente al numero random generato dalla funzione
let bomba;
//seleziono il div dove dentro ci sarà la frase custom
let frase = document.getElementById('punteggio');
//creo un contatore per il punteggio
let contatore = 0;
//Variabile di controllo se il gioco è finito
let isGameOver = false;

//console.log( griglia );

//creiamo una funzione per creare un div quadrato dentro la griglia
function creazioneQuadrato(num) {
    const div = document.createElement('div');
    div.classList.add('quadrato');
     //inseriamo il numero dentro il div
  div.innerHTML = `<span>${num}</span>`;
  return div; //<div class="quadrato">.....</div>
}

//Attivo il gioco quando cambio difficoltà
difficolta.addEventListener('change', function () {
  //Quando cambio difficolta cambia il numero di celle
  let difficoltaValue = difficolta.value;
  creaGioco(difficoltaValue)
})

//creo una funzione che in base alla difficolta cambia il numero di celle
function creaGioco(livelloDiDifficolta) {
  if (livelloDiDifficolta == 'easy') {
    //100celle
    //invocazione funzione per generare le bombe nell'array
    bombe = [];
    generaBombe(1,100)
    console.log(bombe)
    creaCelle(100)
  } else if (livelloDiDifficolta == 'medium') {
    //invocazione funzione per generare le bombe nell'array
    bombe = [];
    generaBombe(1,81)
    console.log(bombe)
    //81 celle
    creaCelle(81)
  } else if (livelloDiDifficolta == 'hard') {
    //invocazione funzione per generare le bombe nell'array
    bombe = [];
    generaBombe(1,49)
    console.log(bombe)
    //49 celle
    creaCelle(49)
  }
}
//funzione crea celle
function creaCelle(numeroCelle) {

    //Pulisco la griglia
    griglia.innerHTML = '';
    frase.innerHTML = '';
    isGameOver = false;
  
    for (let i = 1; i <= numeroCelle; i++) {
  
      let elementoCorrente = creazioneQuadrato(i);
      //console.log(elementoCorrente);
      elementoCorrente.addEventListener('click', function () {
        let numeroNellaCella = parseInt(this.firstChild.innerHTML)
        if ( !isGameOver ) {
            if ( bombe.includes(numeroNellaCella )) {
              //Se becco la bomba
              //al click della cella viene aggiunta la classe "bomba" per lo sfondo rosso che segna la sconfitta
              this.classList.toggle('bomba');
               //ciclo tutte le celle da zero e controllo quali sono le bombe, ogni volta che ne trovo una aggiungo la classe "bomba"
          for (let y = 0; y < numeroCelle; y++) {
            if ( bombe.includes( parseInt(griglia.children[y].firstChild.innerHTML )) ) {
              griglia.children[y].classList.add('bomba');
            }
          }
          //Cambio la variabile di controllo per non per avere più accesso alle funzioni al click e terminare così la partita
          isGameOver = true;
          frase.innerHTML = `<p>La partita è terminata hai perso, il tuo punteggio finale è: ${contatore}</p>`
        } else {
          //Se non becco la bomba
          //al click della cella viene aggiunta la classe "salvo" perchè non era una bomba
          this.classList.toggle('salvo');
          //aumento il punteggio ogni volta che non clicco su una bomba
          contatore++;
        }
      }


    })

    griglia.append(elementoCorrente);

  }
}


//livello 2 campo minato

// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
function generaBombe(bombaMin, bombaMax) {

  //Ciclo for per ottenere un ciclo di 16 giri
  for (let k = 0; k < 16; k++) {
    //ciclo do while per generare un numero random e poi controllare se già presente nell'array nel caso ci sia già il ciclo do while ricomincia e viene generato n altro numero
    do {
      bomba = getRandomInt(bombaMin, bombaMax)
    } while (bombe.includes(bomba));

    //Push del numero dopo il controllo nell'array
    bombe.push(bomba);

  }
}


//Funzione per generare un numero random tra min e max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}