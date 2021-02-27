let aciertos = sessionStorage.getItem('aciertos') ? Number.parseInt( sessionStorage.getItem('aciertos') ) : 0 || 0;
let numRnd;
let multRnd;
let numPistasInf = 0;
let numPistasSup = 0;
const operacionEl = document.querySelector( '.ejercicio .operacion' );
const resultadoInputEl = document.querySelector( '.ejercicio .resultado input' );
const pistasEl = document.querySelector( '.pistas' );

refrescarAciertos();
generarNuevoEjercicio();


function comprobarResultado(){
    const resultadoVal = Number.parseInt(resultadoInputEl.value);
    if( resultadoVal === numRnd*multRnd ){
        guardarAciertoEnSesion();
        refrescarAciertos();
        generarNuevoEjercicio();
    } else{
        resultadoInputEl.classList.add('incorrecto');
        resultadoInputEl.value = null;
        focusInput();
    }
}

function guardarAciertoEnSesion(){
    aciertos++;
    sessionStorage.setItem( 'aciertos', aciertos );
}

function refrescarAciertos(){
    const aciertosSpanEl = document.querySelector( '.aciertos > span' );
    aciertosSpanEl.innerHTML = aciertos;
}

function generarNuevoEjercicio(){
    numRnd = Math.floor(Math.random()*10) + 1; // Número entre 1 y 10
    multRnd = Math.floor(Math.random()*11); // Número entre 0 y 10
    resultadoInputEl.classList.remove( 'incorrecto' );
    resultadoInputEl.value = null;
    operacionEl.innerText = `${numRnd} x ${multRnd} =`;
    pistasEl.innerHTML = '';
    focusInput();
}

function focusInput(){
    resultadoInputEl.setAttribute('autofocus', 'autofocus');
    resultadoInputEl.focus();
    resultadoInputEl.click();
}

function generarPista(){
    //console.log( `multRnd: ${multRnd}, numPistasInf: ${numPistasInf}, numPistasSup: ${numPistasSup}` );
    if( multRnd - numPistasInf > 0 || multRnd + numPistasSup < 10 ){
        let numSup = Math.floor(Math.random()*2) == 1 ? true : false; // 0 o 1
        if( numSup && multRnd + numPistasSup === 10 ){
            numSup = false;
        }
        if( !numSup && multRnd - numPistasInf === 0 ){
            numSup = true;
        }
        let nuevoMultRnd;
        if( numSup ){
            nuevoMultRnd = multRnd + (++numPistasSup);
        } else{
            nuevoMultRnd = multRnd - (++numPistasInf);
        }
        const nuevaPistaEl = document.createElement( 'div' );
        nuevaPistaEl.classList.add( 'pista' );
        nuevaPistaEl.innerText = `${numRnd} x ${nuevoMultRnd} = ${ numRnd*nuevoMultRnd}`;
        pistasEl.appendChild( nuevaPistaEl );
    }
    
}