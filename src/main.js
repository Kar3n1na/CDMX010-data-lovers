import dataRM from './data/rickandmorty/rickandmorty.js';

import { search, orderData, filterByGender, filterByStatus, filterBySpecies} from './data.js'

document.addEventListener('DOMContentLoaded',function(){
    buildCard(dataRM.results)    
})
let characterCard=document.querySelector('.character')
 //Imprime Card de personajes
 function buildCard(data){
    
    data.forEach(character => {
        let {image,name,id}=character;

        let setCard=document.createElement('div')
            setCard.innerHTML=`
            <div class="characterCard">
                <div class="imageCharacter">
                    <img src = "${image}"/> </div>
                <div class="info">
                    <h1 class="name">${name}</h1>
                    <p class="number"> # ${id} </p>
                    <button id=${id}>ver detalles</button>
                </div>
            </div> 
        ` 
        characterCard.appendChild(setCard) 
    });
}
//Ordenamiento
 const order = document.getElementById('select-order');
    order.addEventListener ('change', (event) => {
    const sortOrder = event.target.value;
    const orderedData = orderData(dataRM.results, 'name', sortOrder)
    characterCard.innerHTML=''
    buildCard(orderedData)
})  
//Search
const searchDos = document.getElementById('search');
    searchDos.addEventListener ('change', (event) => {
        //event.preventDefault();           
        const bar = event.target.value;
        const barSearch = search(dataRM.results, bar);
       
            characterCard.innerHTML=''
            buildCard(barSearch)        
    })
    
//Filter Status
const radioAlive = document.getElementById('alive');
radioAlive.addEventListener('click', (event) => {
    const status = event.target.value;     
    const filteredCharacters = filterByStatus(dataRM.results, status) 
    characterCard.innerHTML=''
    buildCard(filteredCharacters)
})
const radioDead = document.getElementById('dead');
radioDead.addEventListener('click', (event) => {
    const status = event.target.value;     
    const filteredCharacters = filterByStatus(dataRM.results, status) 
    characterCard.innerHTML=''
    buildCard(filteredCharacters)
})
const radioUnknownUno = document.getElementById('unknown');
radioUnknownUno.addEventListener('click', (event) => {
    const status = event.target.value;     
    const filteredCharacters = filterByStatus(dataRM.results, status) 
    characterCard.innerHTML=''
    buildCard(filteredCharacters)
})
//Filter Género
const radioFemale = document.getElementById('female');
radioFemale.addEventListener('click', (event) => {
    const gender = event.target.value;     
    const filteredCharacters = filterByGender(dataRM.results, gender) 
    characterCard.innerHTML=''
    buildCard(filteredCharacters)
})
const radioMale = document.getElementById('male');
radioMale.addEventListener('click', (event) => {
    const gender = event.target.value;     
    const filteredCharacters = filterByGender(dataRM.results, gender) 
    characterCard.innerHTML=''
    buildCard(filteredCharacters)
})
const radioUnknownGender = document.getElementById('unknownGender');
radioUnknownGender.addEventListener('click', (event) => {
    const gender = event.target.value;     
    const filteredCharacters = filterByGender(dataRM.results, gender) 
    characterCard.innerHTML=''
    buildCard(filteredCharacters)
})
//Filter Species
const radioHuman = document.getElementById('human');
radioHuman.addEventListener('click', (event) => {
    const species = event.target.value;     
    const filteredCharacters = filterBySpecies(dataRM.results, species) 
    characterCard.innerHTML=''
    buildCard(filteredCharacters)
})
const radioAlien = document.getElementById('alien');
radioAlien.addEventListener('click', (event) => {
    const species = event.target.value;     
    const filteredCharacters = filterBySpecies(dataRM.results, species) 
    characterCard.innerHTML=''
    buildCard(filteredCharacters)
})
const radioHumanoid = document.getElementById('humanoid');
radioHumanoid.addEventListener('click', (event) => {
    const species = event.target.value;     
    const filteredCharacters = filterBySpecies(dataRM.results, species) 
    characterCard.innerHTML=''
    buildCard(filteredCharacters)
})
const radioAnimal = document.getElementById('animal');
radioAnimal.addEventListener('click', (event) => {
    const species = event.target.value;     
    const filteredCharacters = filterBySpecies(dataRM.results, species) 
    characterCard.innerHTML=''
    buildCard(filteredCharacters)
})
const radioRobot = document.getElementById('robot');
radioRobot.addEventListener('click', (event) => {
    const species = event.target.value;     
    const filteredCharacters = filterBySpecies(dataRM.results, species) 
    characterCard.innerHTML=''
    buildCard(filteredCharacters)
})
/* const selector = document.getElementById('selector')

selector.addEventListener('change', (event) => {
    const gender = event.target.value
    const filteredCharacters = filterByGender(dataRM.results, gender)

    buildCard(filteredCharacters)
})

/*
selector2.addEventListener('change', (event) => {
    const status = event.target.value
    const filteredCharacters = filterByStatus(dataRM.results, status)

    buildCard(filteredCharacters)
})
 */

//  console.log(filterByGender(dataRM.results, 'Female'))
// console.log(filterByStatus(dataRM.results, 'Alive'))
//console.log(orderData(dataRM.results, 'name', 'nameAz' ));
//console.log(orderData(dataRM.results, 'name', 'nameZa' ));
//console.log(search (dataRM.results, 'Morty Smith'));