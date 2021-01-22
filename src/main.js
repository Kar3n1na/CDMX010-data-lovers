/* import { example } from './data.js';
// import data from './data/lol/lol.js';

import data from './data/rickandmorty/rickandmorty.js';


console.log(example, data); */

import dataRM from './data/rickandmorty.js';
// import data from './data/lol/lol.js';
document.addEventListener('DOMContentLoaded',function(){
    elhtml(dataRM.results)
    
})
let nodoPersonaje=document.querySelector('.character')

function elhtml(losdatos){
    
    losdatos.forEach(unPersonaje => {
        let parrafo=document.createElement('p')
        parrafo.textContent=`${unPersonaje.name}` //aqui usar inner html con los personaje
        nodoPersonaje.appendChild(parrafo)
    });

}
