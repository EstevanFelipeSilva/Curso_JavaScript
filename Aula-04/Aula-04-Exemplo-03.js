/*
            OBJETOS CONSTANTES

    * Você pode alterar as propriedades de um Objeto Constante.
*/

// Criando um Objeto Constante
const meuCarro = { type:'Lamborguini', model:'Exotic', color:'black' };

console.log(meuCarro); // { type:'Lamborguini', model:'Exotic', color:'black' };

// Alterando uma propriedade
meuCarro.color = 'white';

console.log(meuCarro); // { type:'Lamborguini', model:'Exotic', color:'white' };

// Você pode Adicionar uma nova propriedade também
meuCarro.owner = 'Estevan Felipe';

console.log(meuCarro); // { type:'Lamborguini', model:'Exotic', color:'white', owner:'Estevan felipe' };

/*
    * Mas de forma alguma você deve reatribuir o Objeto Criado.

    * Isso resultará em um Error;
*/
const developer = { type:'Front-End', nivel:'Junior', age:'20' };

developer = { type:'Full-Stack', nivel:'Junior', age:'20' };

console.log(developer); // TypeError;