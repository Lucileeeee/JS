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