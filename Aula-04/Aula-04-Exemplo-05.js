/*
            RECLERANDO

    * Redeclarar uma variável usando ( VAR ) é permitido
    em qualquer lugar a qualquer momento no nosso código JavaScript;
*/
var x = 1; // PERMITIDO;

var x = 2; // PERMITIDO;

x = 3; // PERMITIDO;

/*
    * Redeclarar uma variável ( VAR ) existente, no mesmo Escopo
    não é permitido com o uso de ( LET ) e ( CONST );
*/
var x = 4; // PERMITIDO;

const x = 5; // NÃO PERMITIDO;

{
    let x = 6; // PERMITIDO;

    const x = 7; // NÃO PERMITIDO;
}

{
    const x = 8; // PERMITIDO;

    const x = 9; // NÃO PERMITIDO;
}

/*
    * Não é permitido reatribuir uma ( CONST ) existente, no mesmo Escopo;
*/

const x = 10; // PERMITIDO;

x = 11;       // NÃO PERMITIDO;
var x = 12;   // NÃO PERMITIDO;
let x = 13;   // NÃO PERMITIDO;
const x = 14; // NÃO PERMITIDO;

{
    const x = 15; // PERMITIDO;

    x = 16;       // NÃO PERMITIDO;
    var x = 17;   // NÃO PERMITIDO;
    let x = 18;   // NÃO PERMITIDO;
    const x = 19; // NÃO PERMITIDO;
}

/*
    * Redeclarar uma variável ( CONST ), em outro escopo, ou em outro Bloco
    é permitido;
*/

const x = 10; // ESCOPO GLOBAL;

console.log(x); // x = 10; // PERMITIDO;

{
    const x = 11; // ESCOPO BLOCO UM;

    console.log(x); // x = 11; // PERMITIDO;
}

{
    const x = 12; // ESCOPO BLOCO DOIS;

    console.log(x); // x = 12; // PERMITIDO;
}

// AO RETORNAR PARA O ESCOPO GLOBAL ( x ) VOLTA TER O VALOR ( 10 );
console.log(x); // x = 10; // PERMITIDO;