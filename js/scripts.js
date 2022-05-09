let pokemonRepository = (function () {
  let pokemonList = [
    { name: 'pikachu', height: 4, types: ['field','fairy'] },
    { name: 'bulbasaur', height: 7, types: ['monster','grass'] },
    { name: 'paras', height: 3, types: ['bug','grass'] },
    { name: 'seel', height: 11, types: ['water','field'] },
    { name: 'squirtle', height: 5, types: ['monster','water'] }
  ];
  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  function getAll() {
    return pokemonList;
  }
  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    addEventListener(button,pokemon); 
  }
  function showDetails(pokemon){
    console.log(pokemon);
  }
  function addEventListener(button, pokemon){
    button.addEventListener('click', function(){
      showDetails(pokemon.name+" button was clicked!!");
    });
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    addEventListener: addEventListener
  };
})();

let pokemonGetList = pokemonRepository.getAll();
  pokemonGetList.forEach(function (pokemon){
    pokemonRepository.addListItem(pokemon);
});