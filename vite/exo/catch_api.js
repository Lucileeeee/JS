//? Appel de l'API Random Dog 
let callDog = async ()=>{
    try{
        const data = await fetch ('https://dog.ceo/api/breeds/image/random');
        const dataObject = await data.json();
        let img = document.createElement('img');
        img.setAttribute('src', dataObject.message);
        document.body.append(img);
    } catch(error){
        console.log(error);
    }
}
callDog(); //?-> retourne une random photo de dog


//? Appel de l'API Pokemon 
let callPokemon = async ()=>{
    try{
        const data = await fetch ('https://pokeapi.co/api/v2/pokemon/ditto');
        const dataObject = await data.json();
        console.log(dataObject/* .stats[3].name */);
        let p = document.createElement('p');
        p.innerText =  dataObject.name +' '+  dataObject.order ;
        document.body.append(p);
    } catch(error){
        console.log(error);
    }
}
callPokemon(); //? on affiche le nom et l'index du pokemon

//! correction de jeff:
const pokemonApiContact = async () => {
    const pokemonListe = document.getElementById('pokeList');
    console.log(pokemonListe);
    //Data va récup Toutes les données de l'api
    const pokemonData = await fetch('https://pokeapi.co/api/v2/pokemon');
    console.log('pokemonData',pokemonData);
    //Plutot que de Travailler sur la réponse, on va la transformé pour 
    //qu'elle deviennt un OBJET JS (+ pratique)
    const pokemonDataTransformed = await pokemonData.json();
    console.log('pokemonDataTransformed',pokemonDataTransformed);
    console.log(pokemonDataTransformed.results[0].name);
    // Boucle pour parcourir le tableau results dans la réponse
    pokemonDataTransformed.results.forEach(unPokemon => {
        let listElement = document.createElement('h3');
        listElement.innerText = unPokemon.name;
        pokemonListe.append(listElement);
    });
};
pokemonApiContact();

const contactApiSecurePlus =  async () => {
    try {
        const rawData = await fetch('https://tyradex.vercel.app/api/v1/pokemon/corvaillus');
        console.log(rawData);
        // Vérification du statut de la réponse
        if (!rawData.ok || rawData.status !== 200) { // Vérification du statut 200
            console.error("Erreur lors de la récupération des données : ", rawData.statusText);
            return; // Sortir de la fonction si la réponse n'est pas OK
        }
        const transformedData = await rawData.json();
        console.log(transformedData);
        apiDiv.innerHTML = transformedData.name.fr;
    } catch (error) {
        console.error("Erreur lors de l'appel à l'API : ", error);
    }
}
contactApiSecurePlus();


let divPokemonUI = document.querySelector("#superPokemonList");

const fetchPokemonGen9 = async () => {
    try {
        const response = await fetch("https://tyradex.vercel.app/api/v1/gen/1");
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
        }
        const data = await response.json();
        console.log(data);
        // Générer des cartes pour chaque Pokémon
        data.forEach(pokemon => {
            const cartePokemon = document.createElement('div');
            cartePokemon.classList.add('card','m-3', 'p-3','bg-light');
            cartePokemon.style.width = '18rem';
            cartePokemon.innerHTML = DOMPurify.sanitize(`
              <img src="${pokemon.sprites.regular}" class="card-img-top" alt="${pokemon.name.fr}">
              <div class="card-body">
                <h5 class="card-title">${pokemon.name.fr}</h5>
                <p class="card-text">Type: ${pokemon.types.map(type => type.name).join(', ')}</p>
                <p class="card-text">Poids: ${pokemon.weight}</p>
                <p class="card-text">Taille: ${pokemon.height}</p>
                <a href="#" class="btn btn-primary">Voir plus</a>
            </div>`);
            divPokemonUI.appendChild(cartePokemon);
            // Ajouter la carte au conteneur
        });
    } catch (error) {
        console.error('Erreur:', error);
    }
}

fetchPokemonGen9();