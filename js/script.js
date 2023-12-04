//Griglia Campo Minato

function generaNumero(arrayBombe){
    let controllaNum = false;
    let casuale;

    while(controllaNum == false){
        casuale = Math.floor(Math.random()* 100 + 1)

        if(!arrayBombe.includes(casuale)){
            controllaNum = true;
        }
    }
    return casuale;
}

function generaBombe(NumBombe){
    let bombe = [];

    for(let i=0; i<NumBombe; i++){
         bombe.push(generaNumero(bombe)); 
    }

    return bombe;
}

function creaCella(num, RigaCelle){
    const quadrato = document.createElement('div')
    quadrato.classList.add('quadrato')
    quadrato.style.width = `calc(100% /${RigaCelle})`
    quadrato.innerText = num;
    return quadrato;
}

function CreaGriglia(numeroCelle, RigaCelle, bombe){
    const griglia = document.getElementById('griglia')
    griglia.innerHTML = '';


    let punti = 0

    for(let i=1; i<=numeroCelle; i++){
        let cella = creaCella(i, RigaCelle);

        cella.addEventListener('click', function(){
            if(!bombe.includes(i)){
                console.log('Bomba trovato')
                this.classList.add('evidenziato');
                punti++

                document.getElementById('score').innerHTML = `il tu punteggio è di: ${punti}`;
            }
            else{
                console.log('Hai perso')
                this.classList.add('evidenziato_rosso');
            }
        })

        griglia.appendChild(cella);
    }
}

function creaNuovoGioco(){
    const griglia = document.getElementById('griglia')

    const difficoltà = document.getElementById('difficoltà')
    let livello = parseInt(difficoltà.value);

    let numeroCelle;
    let NumCellePerRiga;

    switch(livello){
        case 1:
            numeroCelle = 100;
            break;
        case 2:
            numeroCelle = 81;
            break;
        case 3:
            numeroCelle = 49;
            break;
        default:
            break;
    }

    NumCellePerRiga = Math.sqrt(numeroCelle);
    //moltiplicare riga per riga

    const bombe = generaBombe(16); 

    CreaGriglia(numeroCelle, NumCellePerRiga, bombe);
}

const bottoneGioco = document.getElementById('gioca')

bottoneGioco.addEventListener('click', function(){
    creaNuovoGioco();
}); 

