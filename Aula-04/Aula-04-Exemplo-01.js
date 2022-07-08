/*
                ( CONST ) NO JAVASCRIPT

        * A Palavra-Chave ( const ) também foi introduzida na Atualização do
        ES6 ( 2015 ).

        * Variáveis declaradas com ( const ) não podem ser redeclaradas.

        * Variáveis declaradas com ( const ) não podem ser reatribuidas.

        * Variáveis declaradas com ( const ) tem seu Escopo no Bloco onde foram
        declaradas.
*/

const a = 10;

a = 15; // Retornará um Error; ( TypeError TypeError: Assignment to constant variable. )

a = a + 10; // Retornará um Error; (TypeError TypeError: Assignment to constant variable. )

console.log(a);

/*
        * Ao declarar uma variável no JavaScript usando ( const ) você deve imediatamente
        declarar seu valor.

        * A variável ( const ) no JavaScript não aceita ter seu valor içado. 
*/

const b = 17; // FORMA CORRETA;

const c;

c = 95; // FORMA INCORRETA;