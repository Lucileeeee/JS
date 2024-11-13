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

document.addEventListener('click',(eventClicke)=>{
/*     console.log(eventClicke);
    console.log(eventClicke.clientX);
    console.log(eventClicke.clientY); */
    let img = document.createElement('img');
    img.setAttribute('src', 'https://picsum.photos/200');
    document.body.append(img);
    img.style.position='absolute';
    img.style.top = eventClicke.clientY - img.height/2 +"px";
    img.style.left = eventClicke.clientX - img.width/2 + "px";    
})


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