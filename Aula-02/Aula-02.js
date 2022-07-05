/*
                QUANDO USA ( VAR ) NO JAVASCRIPT ?

    A palavra-chave ( VAR ) era usada em todo o código JavaScript de 1995 à 2015;

    Em 2015 foram adicionadas ao JavaScript, as Palavras-Chaves ( LET ) e ( CONST );

    Para navegadores mais antigos ainda é recomendável usar ( VAR ) constantemente no seu código JavaScript;


                QUANDO USARMOS ( CONTS ) NO JAVASCRIPT ?

    Para valores fixos use a Palavra-Chave ( CONST );

    Para valores que podem ser alterados use a Palavra-Chave ( LET );



    OBSERVE O EXEMPLO DO CÓDIGO ABAIXO:
*/

let valorUm = 10;   /* O VALOR DESTA VARIÁVEL PODE SER ALTERADO, MAS NO MOMENTO TEM O VALOR ( 10 ); */
let valorDois = 20; /* O VALOR DESTA VARIÁVEL TAMBÉM PODE SER ALTERADO, MAS NO MOMENTO TEM O VALOR ( 20 ); */

const total = valorUm + valorDois; /* O VALOR DESTA VARIÁVEL NÃO PODE SOFRER ALTERAÇÕES, 
                                        POR ISSO RECEBE O NOME DE ( TOTAL ); */

console.log(valorUm);   /* AQUI ELE NOS RETORNARÁ O VALOR ( 10 ); */
console.log(valorDois); /* AQUI ELE NOS RETORNARÁ O VALOR ( 20 ); */
console.log(total);     /* AQUI ELE NOS RETORNARÁ O VALOR ( 30 ); */


/*
                PARA UM USO MAIS MODERNO DAS DECLARAÇÕES,
            USE AS PALAVRAS-CHAVES DA FORMA DEMONSTRADA ABAIXO NO CÓDIGO;
*/

let a = 2, b = 4, c = 6; /* AQUI ELE NOS RETORNARÁ OS VALORES ( 2, 4, 6 ); */

console.log((b + a) + c); /* AQUI ELE NOS RETORNARÁ O VALOR ( 12 ); */

/* 
                HOJE EM DIA PROGRAMANDO DA SEGUINTE FORMA:

    ( VAR ) PARA VARIÁVEIS GLOBAIS;

    ( LET ) PARA VARIÁVEIS LOCAIS DENTRO DE UM ESCOPO ESPECIFICO;

    ( CONST ) PARA ARMAZENAR VALORES IMUDÁVEIS, TANTO PARA VARIÁVEIS GLOBAIS QUANTO LOCAIS;
*/