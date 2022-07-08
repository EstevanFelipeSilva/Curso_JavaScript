/*
                REDECLARANDO

        * Ao redeclarar uma variável com a Palavra-Chave ( VAR ) no JavaScript
        é permitido em qualquer lugar de um programa;
*/

var x = 2; // agora ( x = 2 );

var x = 3; // agora ( x = 3 );

/*
        * Com ( LET ), não é permitido redeclarar uma variável no mesmo bloco.
*/

var a = 1; // isso é permitido.
let a = 2; // isso não é permitido.

{
    let b = 3; // isso é permitido.
    let b = 4; // isso não é permitido.
}

{
    let c = 5; // isso é permitido.
    var c = 6; // isso não é permitido.
}

/*
        * Mas redeclarar uma variável com ( LET ) em outro Bloco, é permitido.
*/

let d = 1; // isso é permitido.

{
    let e = 2; // isso é permitido.
}

{
    let f = 3; // isso é permitido.
}