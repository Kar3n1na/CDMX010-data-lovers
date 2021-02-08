import { example, anotherExample, filterBySpecies } from '../src/data.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


/* describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
}); */

describe.only ('el filtro funciona para especies',()=> {
  it('El filtro devuelve humanos', () =>{
    expect(filterBySpecies(personajes,"Human")).toEqual()

  } )
  
})
