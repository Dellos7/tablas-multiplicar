const youtubeVideos = {
    1: 'https://www.youtube.com/embed/kMwizihC7XA',
    2: 'https://www.youtube.com/embed/BbyrJcFmRb8',
    3: 'https://www.youtube.com/embed/bfwxxuc0vO8',
    4: 'https://www.youtube.com/embed/I2CwWoUFYzg',
    5: 'https://www.youtube.com/embed/Dhf4wMoaTEw',
    6: 'https://www.youtube.com/embed/hJtcaYtRLFs',
    7: 'https://www.youtube.com/embed/M98xPH--Zio',
    8: 'https://www.youtube.com/embed/uNtgx2-c7Gc',
    9: 'https://www.youtube.com/embed/ukRY3E7_pIA',
    10: 'https://www.youtube.com/embed/bIL0eMn220E'
};

const urlSearchParams = new URLSearchParams( window.location.search );
const num = Number.parseInt( urlSearchParams.get('num') );
const h2SpanEl = document.querySelector( 'h2 > span' );
h2SpanEl.innerHTML = num;

const tablaEl = document.getElementById('tabla');

for( let i = 0; i <= 10; i++ ){
    const operacionEl = document.createElement( 'div' );
    operacionEl.classList.add( 'tabla-linea' );
    operacionEl.classList.add( 'operacion' );
    operacionEl.innerText = `${num} x ${i} =`;
    tablaEl.appendChild( operacionEl );
    const resultadoEl = document.createElement( 'div' );
    resultadoEl.classList.add( 'tabla-linea' );
    resultadoEl.classList.add( 'resultado' );
    resultadoEl.innerText = `${ num*i }`;
    tablaEl.appendChild( resultadoEl );
}

const operacionEl = document.createElement( 'div' );
operacionEl.classList.add( 'tabla-linea' );
const resultadoEl = document.createElement( 'div' );
resultadoEl.classList.add( 'tabla-linea' );
tablaEl.appendChild( operacionEl );
tablaEl.appendChild( resultadoEl );

const videoResponsiveEl = document.querySelector('.video-responsive > iframe');
const ytVideo = Object.keys( youtubeVideos )
                .map( (n) => {
                    return Number.parseInt(n);
                })
                .filter( (n) => n === num )
                .map( (n) => {
                    return youtubeVideos[n];
                })[0];
videoResponsiveEl.src = ytVideo;

function irALaSiguienteTabla(){
    window.location.href = `tabla.html?num=${ (num+1)%11 == 0 ? 1 : (num+1)%11 }`;
}