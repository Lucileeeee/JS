let h1 = document.querySelector('h1');

export function nomFonction(name) {
    console.log('Bonjour depuis module_exp.js '+ name);
}

export async function chuckNoris(){
    try{
        const data = await fetch ('https://api.chucknorris.io/jokes/random');
        const dataObject = await data.json();
        let blague = dataObject.value;
        h1.innerText= blague;
    } catch(error){
        console.log(error);
    }
}


