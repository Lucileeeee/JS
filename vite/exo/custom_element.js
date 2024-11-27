let chachat = document.querySelector('coucou-chachat');

class Chachat extends HTMLElement{
    constructor(){
        super();
        this.textContent = "Coté Js : Bonjour Jambon!";
        const insert = this.getAttribute('insert') || 'World';
        const p = document.createElement('p');
        p.textContent = `Coté Js : Ici, ${insert}!`;
        this.appendChild(p);
    }
}
customElements.define('coucou-chachat', Chachat);

//! jeff :
class HelloWorld extends HTMLElement {
    constructor() {
        super(); // Appelle le constructeur de la classe parent
        // Ajoute du contenu directement dans l'élément
        // le this représente l'instance de classe sur laquelle on travaille ici notre element HTML custom
        this.textContent = "Coté Js : Hello, World!";
        const mot = this.getAttribute('mot') || 'World';
        const p = document.createElement('p');
        p.textContent = `Coté Js : Bonjour, ${mot}!`;
        this.appendChild(p);
    }
}

customElements.define('hello-world', HelloWorld);

class PhraseBox extends HTMLElement {
    constructor() {
        super();
        this.textContent = `Coté Js : J'aime mon chat`;
        let phrase1 = this.getAttribute('phrase');
        let p = document.createElement('p');
        p.innerText=`${phrase1}`;
        this.appendChild(p);
    }
}
customElements.define('phrase-box', PhraseBox);

class UserBox extends HTMLElement{
    constructor(){
        super();
        let boxNom = this.getAttribute('boxNom');
        let p = document.createElement('p');
        p.innerText=boxNom;
        this.appendChild(p);
        let boxMail = this.getAttribute('boxMail');
        let p2 = document.createElement('p');
        p2.innerText=boxMail;
        this.appendChild(p2);
        let boxAge = this.getAttribute('boxAge');
        let p3 = document.createElement('p');
        p3.innerText=boxAge;
        this.appendChild(p3);
        let srcImg = this.getAttribute('image');
        let img = document.createElement('img');
        img.setAttribute('src', srcImg);
        this.appendChild(img);
    }
}
customElements.define('user-box', UserBox);

class UserBox2 extends HTMLElement{
    constructor(){
        super();
        let imgUser = this.getAttribute('imageUser');
        let imgJeff = document.createElement('img');
        imgJeff.setAttribute('src', imgUser);
        this.appendChild(imgJeff);
        let name = this.getAttribute('nameUser');
        let pJeff = document.createElement('p');
        pJeff.innerText = 'Nom : ' + name;
        this.appendChild(pJeff);
        let pAge = document.createElement('p');
        let ageText = this.getAttribute('ageUser');
        this.appendChild(pAge);
        pAge.innerText=`Age : `+ ageText;
    }
}
customElements.define('user-box2', UserBox2);