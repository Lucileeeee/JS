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

