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
    console.log(eventClicke);
    console.log(eventClicke.clientX);
    console.log(eventClicke.clientY);
    let img = document.createElement('img');
    img.setAttribute('src', 'https://picsum.photos/200');
    document.body.append(img);
    img.style.position='absolute';
    img.style.top = eventClicke.clientY - img.height/2 +"px";
    img.style.left = eventClicke.clientX - img.width/2 + "px";
    console.log(img.style);
    
})