//? set up div contener
const contener = document.getElementById('contener');
contener.style.backgroundColor ='lightblue';
contener.style.height='600px';
contener.style.width='300px';


//? Création de la cardBleu:
let img = document.createElement("img");
img.style.height="200px";
img.style.width="200px";
contener.append(img);
let div = document.createElement('div');
let h1 = document.createElement("h1");
div.append(h1);
let h2 = document.createElement("h2");
div.append(h2);
let h4 = document.createElement("h4");
div.append(h4);
let p = document.createElement("p");
div.append(p);
let bouton = document.createElement('button');
div.append(bouton);
contener.append(div);
bouton.innerText='Random User';


//? Appel de l'API Random User et affichage d'un user
let RandomUser = async ()=>{
    const data = await fetch ('https://randomuser.me/api/');
    const dataObject = await data.json();
    let num = dataObject.results[0].location.street.number;
    let rue = dataObject.results[0].location.street.name;
    let ville = dataObject.results[0].location.city;
    let etat =  dataObject.results[0].location.state;
    //? modifier l'affichage
    h1.innerText= dataObject.results[0].name.title +" "+ dataObject.results[0].name.first +" "+ dataObject.results[0].name.last
    h2.innerText= num + " - " + rue + " (" + ville+" - "+etat+ ")";
    h4.innerText= dataObject.results[0].email;
    p.innerText='Phone : '+ dataObject.results[0].phone;
    img.setAttribute("src", dataObject.results[0].picture.large);
    bouton.addEventListener("click", ()=>{
        RandomUser();
    })
}
RandomUser(); //?-> retourne un random user

