/*
* 3 liens cliquables  
* pour 1: ajouter une class
* pour 2: supprimer une class
* pour 3: toggle une class
*/
let liens = document.body.getElementsByTagName('a');
liens[0].addEventListener('click', (e)=>{
    liens[0].setAttribute("id", "ajouterClass");
})
liens[1].addEventListener('click', (e)=>{
    liens[1].removeAttribute('id');
})
liens[2].addEventListener('click', (e)=>{
    liens[2].classList.toggle('toggleClass');
})
/*
* création d'une image au clique dans le document
* placement de l'image sur la souris (clientX et clientY)
* on divise la hauteur et largeur de l'image par deux pour la centrer (sinon ça commence en haut à gauche)
*/
document.addEventListener('click',(eventClicke)=>{
    let img = document.createElement('img');
    img.setAttribute('src', 'https://picsum.photos/200');
    document.body.append(img);
    img.style.position='absolute';
    img.style.top = eventClicke.clientY - img.height/2 +"px";
    img.style.left = eventClicke.clientX - img.width/2 + "px";    
})

/*
*Librairie Vanda pour mettre des animations 
* mettre le lien script dans le html (voir en dessous du link css)
*/
let vanta = document.body.getElementsByClassName('vanta');
VANTA.CLOUDS({
    el: vanta[0],
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00
})

/*
* 'fonction' qui surveille l'avancement du scroll et l'affiche dans une div
*  la variable scrollMax est la taille du body moins celle de la fenetere
* la variable onEstOu rend le pourcentage d'avancement du scroll
* et on donne cette taille à la width bar 
*/ 
let bar = document.getElementsByClassName('bar');
document.addEventListener('scroll', (e)=>{
    console.log(`${document.body.scrollHeight}
        ${window.innerHeight}
        ${window.scrollY}`);
    let scrollMax = document.body.scrollHeight - window.innerHeight;
    console.log('Scroll MAx',scrollMax);
    let onEstOu = (scrollY/scrollMax) * 100;
    console.log(onEstOu);
    bar[0].style.width= onEstOu + '%';
})