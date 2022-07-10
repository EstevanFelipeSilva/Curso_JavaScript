/*
                QUANDO USAR ( CONST ) NO JAVASCRIPT ?

        * Como regra geral, sempre declare uma variável como ( CONST ) a menos
        que você valor saiba que o valor pode vir a ser alterado.

        * Use ( CONST ) quando você for declarar:

                => Uma nova Matriz;

                => Um novo Objeto;

                => Uma nova Função;

                => Um novo RegExp;


                OBJETOS E MATRIZES CONSTANTES

        * A Palavra-Chave ( const ) é um pouco enganosa.

        * Não define um valor constate. A ( CONST ) define uma referência constante
        a um valor.

        * Por isso você NÃO pode:

                => Reatribuir um valor constante.

                => Reatribuir uma Matriz constante.

                => Reatribuir um Objeto constante.

        * Mas você pode:

                => Alterar os elementos da Matriz constante.

                => Alterar as propriedades do objeto constante.

        Matrizes em JavaScript também são chamados de ( Array ).


                METRIZES CONSTANTES OU ARRAYS CONSTANTES.
        
        * Você pode alterar os elementos de uma Matriz constante.
*/

// criando um Array constante.

const carros = ['Ferrari', 'BMW', 'Lamborguini'];

// ao retornar este Array ele irá informar os nomes declarados dentro do
// Array que é construido através de [];

        /* ================================================================= */

// com essa declaração abaixo, você pode alterar o elemento do 
// Array principal na posição ou no indice [0];

carros[3] = 'Toyota';

// e aplicando o método ( .Push ) no Array nos tornamos capazes
// de adicionar um novo elemento ao Array.

carros.push('Audi');

console.log(carros);

/*
                MAS VOCÊ NÃO PODE REATRIBUIR A MATRIZ;
*/

const cars = ['Ferrari', 'Audi', 'BMW'];

cars = ['Toyota', 'Audi', 'BMW'];

console.log(cars); // TypeError: Assignment to constant variable.

/*
                EXECUTANDO O CÓDIGO DESTA FORMA VOCÊ IRÁ SE DEPARAR
                COM UM ERROR DE EXECUÇÃO.
*/