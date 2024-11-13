/*
* fonction qui fait la moyenne des notes  
* prend en entré un tableau de number
* retourne la mention qui correspond à la note
*/
function calculMoyenne(note){
    let moyenne = 0;
    for (let i = 0; i < note.length; i ++){
        moyenne += note[i]/note.length;
    }
    if(moyenne < 10){
        console.log(`t'es une grosse merde`);
    } else if (moyenne >= 10 && moyenne < 12){
        console.log(`Encouragements`);
    }else if (moyenne >= 12 && moyenne < 14){
        console.log(`Assez Bien`);
    }else if (moyenne >= 14 && moyenne < 16){
        console.log(`Très Bien`);
    }else if (moyenne >= 16 ){
        console.log(`Félicitation`);
    }
}
let note = [20,17,18];
calculMoyenne(note);

function calculMoyenneOf(note){
    let moyenne = 0;
    for (const uneNote of note){
        moyenne += uneNote/note.length;
    }
    if(moyenne < 10){
        console.log(`t'es une grosse merde`);
    } else if (moyenne >= 10 && moyenne < 12){
        console.log(`Encouragements`);
    }else if (moyenne >= 12 && moyenne < 14){
        console.log(`Assez Bien`);
    }else if (moyenne >= 14 && moyenne < 16){
        console.log(`Très Bien`);
    }else if (moyenne >= 16 ){
        console.log(`Félicitation`);
    } 
}
let note2 = [10,12,14];
calculMoyenneOf(note2);

let maCarte = "Ronflex";
let taCarte = "Magmar";

function echangerCarte(carte1, carte2){
    return [carte1 , carte2] = [carte2 , carte1];
}
console.log(echangerCarte(maCarte, taCarte));


let p = document.getElementsByTagName('p');
let tabP = Array.from(p);
console.log(tabP);
tabP.map((p)=> p.style.color="red");


/*
* changer le titre au clique
* avec un if en condition ternaire 69
*/ 
let bool = false;
let h1 = document.getElementsByTagName('h1');

h1[0].addEventListener("click", (e) => {
    h1[0].innerText= bool? '-----': 'Bonjour';
    bool = !bool;
})

