import { chuckNoris } from './module_exp.js';




if(location.pathname == '/exo/module/module.html' ) {
    console.log('coucou');
    chuckNoris();
} else if (location.pathname == '/exo/module/blog.html'){
    console.log('au revoir');
}