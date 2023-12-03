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

function creaCella(num){
    const quadrato = document.createElement('div');
    quadrato.classList.add('quadrato')

    quadrato.innerText = num;

    return quadrato 
}

function CreaNuovoGioco(){
    const griglia = document.getElementById('griglia');
    
    const NumBombe = 16 ;
    
    griglia.innerHTML = ''
    const bombe = generaBombe(NumBombe);
    
    let punti = 0
    
    
    for(let i=1; i<=100; i++){
        let cella = creaCella(i);

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

   
    
    console.log(bombe);
}

const button = document.getElementById('gioca');
button.addEventListener('click', function(){
    CreaNuovoGioco();
}) 