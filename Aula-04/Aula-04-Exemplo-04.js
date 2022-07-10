/*
            ESOCPO DO BLOCO

    * Declarar variáveis com ( CONST ) é semelhante ao uso de ( LET )
    quando se trata de Block Scope.

    * Exemplo abaixo observe que o ( x ) declarado dentro do Bloco é
    diferente do ( x ) declarado fora do Bloco.
*/
const x = true;

console.log(x); // x = true;

{
    const x = false;

    console.log(x); // x = false;
}

// E AQUI ( x ) VOLTA A VALER ( true );
console.log(x); // x = true;