/*
*  on écoute les touches du clavier
* et on retranscrit dans un p le contenu de l'input
*/
let input = document.getElementById('name');
addEventListener("keyup", (event) => {
    let p = document.createElement('p');
    p.innerText = input.value;
    document.body.append(p);
});

/*
*  on récupère le bouton du html
* on écoute le clavier
* si le mot tapé dans l'input est plus long que 5 caractère
* alors on désactive le bouton
* pour  buton.disabled = true on aurait pu faire: 
* (buton.setAttribute('disabled', 'true');
* et on retranscrit dans un p le contenu de l'input
*/

let buton = document.querySelector('button');
addEventListener("keyup", (event) => {
    if(input.value.length > 5){
        buton.disabled = true;
    }
});