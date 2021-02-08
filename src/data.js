export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
//van a tomar los valores que se les asigne (parametros)
/* export const filterCharacters = (characters, filter, value) => {
  //Filter recibe una funcion highorderfunction
  const filteredCharacters = characters.filter((character) => {
    return character[filter] === value // true | false
  })
  return filteredCharacters
}
 */
//  export const filterByGender = (results,) => {
//    console.log(results)
//   //Filter recibe una funcion highorderfunction 
//   const filteredByGender = results.filter((result) => {
//     return result["gender"] === "Female" // true | false
  
//   })
//   return filteredByGender
// } 
//Order
export const orderData = (data, sortBy, sortOrder) =>{
if(sortBy === 'name' && sortOrder === 'orderAz'){
    const orderAz = data.sort((a,b) => {
    if (a.name < b.name) return -1;
    if (b.name > b.name) return 1;
    return 0;
  });
  return orderAz;
} else if (sortBy === 'name' && sortOrder === 'orderZa'){
  const orderZa = data.sort((a,b) => {
    if (a.name > b.name) return -1;
    if (b.name < b.name) return 1;
    return 0;
  });
return orderZa;
}
}

//Search
export const search = function(results, name) {
  const searchBar = results.filter(function(result){
    return result.name === name;
  });
  return searchBar;
};
//Filter Status
export const filterByStatus = function(results, status) { 
  const filteredStatus = results.filter(function(result) {
    return result.status === status;  
  });
  return filteredStatus;
};

//Filter Gender
//export const filterByGender = (results, gender) => results.filter(result => result.gender === gender);
export const filterByGender = function(results, gender) { 
  const filteredData = results.filter(function(result) {
    return result.gender === gender;  
  });
  return filteredData;
};

//Filter Species
export const filterBySpecies = function(results, species) { 
  const filteredSpecies = results.filter(function(result) {
    return result.species === species;  
  });
  return filteredSpecies;
};
