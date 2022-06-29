/*
    O QUE SÃI VARIAVEIS ?

    AS VARIAVEIS SÃO CONTAINERS QUE ARMAZENAM DADOS.
*/

var a = 2; 

/* 
    AQUI, ACABAMOS DE DECLARAR UM VARIÁVEL CHAMADA ( a ),

    E DETERMINAMOS QUE O VALOR OU SEJA A INFORMAÇÃO, OS DADOS QUE ESTA VARIÁVEL VAI

    ARMAZENAR PARA NÓS SERÁ DO TIPO ( number ) NÚMERO E TERÁ O VALOR ( 2 ).

    AO USAR O MÉTODO ( console.log(); ) SOMOS CAPAZES DE TORNAR VIZÍVEL ESTÁ INFORMAÇÃO

    NO CONSOLE TANTO DO NAVEGADOR WEB ( BROWSER ), QUANTO NO CONSOLE DO NOSSO VSCODE

    PRECIONANDO F5 OU ATRAVÉZ DE UMA EXTENÇÃO DE DEPURAÇÃO DE CÓDIGO.

    OBSERVE A BAIXO COMO FAZER A CHAMADA DESTA VARIÁVEL.
*/

console.log(a); // destá forma o código retornará o valor 2.

/*
    A PALAVRA CHAVE ( var ), OCUPA UM ESCOPO GLOBAL DENTRO DO CÓDIGO,

    PODENDO ASSIM SER CHAMADA A QUALQUER INSTANTE, E TAMBÉM PODE TER SEU VARLOR MODIFICADO.
*/

var a = 2; b = 2 + 2; c = 2 + 4; d = 2 * 4; e = 4 + 4 + 2;

console.log(a, b, c, d, e); // aqui ele imprimirá no console os valores 2, 4, 6, 8, 10.