/*
            TIPOS DINÂMICOS NO JAVASCRIPT

    JavaScript possui ( Tipos Dinâmicos ) de Dados;

    Isso significa que uma variável pode guardar diferentes
        Tipos de informações;
*/

let x;      // No momento ( x ) é ( undefined ) = indefinido;
x = 5;      // No momento ( x ) é ( 5 ) = number;
x = "Dev";  // No momento ( x ) é ( "Dev" ) = string;

/*
            STRINGS EM JAVASCRIPT

    Uma STRING é uma série de caracteres como "Desenvolvedor";

    STRINGS são escritas com aspas, tanto Simples como Duplas;
*/

let carro1 = "Ferrari"; // Aspas Duplas;
let carro2 = "Mustang"; // Aspas Simples;

/*
    Também podemos usar aspas dentro da STRING, desde que elas
        não correspondam às aspas que cercam a STRING;
*/

let palavra1 = 'coisa em Inglês é It`s'; // Frase contendo aspa dentro da STRING;
let palavra2 = "Ele deve ser 'Dev'!";    // Frase contendo aspa Simples dentro da STRING;
let palavra3 = 'Ele deve ser "Dev"!';    // Frase contendo aspa Duplas dentro da STRING;

/*
            NUMBER EM JAVASCRIPT

    Em JavaScript temos apenas um Tipo de Números;

    Podendo eles serem escritos com ou sem decimais;
*/

let number1 = 10;     // valor 10;
let number2 = 10.25;  // valor 10.25;

/*
    Números extra grandes ou extra pequenos podem
        ser escritos com notação cientifica (exponencial);
*/

let y = 123e5;  // 12300000;
let z = 123e-5; // 0.00123;

/*
            BOOLEANOS EM JAVASCRIPT

    Booleanos podem ter apenas dois valores ( TRUE ) e ( FALSE );
*/

let d = 5;
let e = 5;
let f = 6;

(d == e); // return ( TRUE );
(d == f); // return ( FALSE );

/*
    Valores BOOLEANOS EM JAVASCRIPT são frequentemente usados para
        realizarmos testes condicionais;

    Veremos mais sobre isso no decorrer dos nossos estudos em JS;
*/