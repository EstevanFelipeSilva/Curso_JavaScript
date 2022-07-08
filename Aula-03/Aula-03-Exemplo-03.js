/*
                    ESCOPO DO BLOCO, OU EM BLOCO, COMO PREFERIR.

        * Antes da Atualização ES6 (2015), JavaScript só tinha o Escopo Global e o Escopo de Função.

        * O ES6 introduziu duas novas Palavras-Chaves ao JavaScript: ( LET ) e ( CONST ).

        * Essas duas novas Palavras-Chaves ao JavaScript fornecem Block Scope.

        * Variáveis declaradas dentro de um Bloco {} não podem ser acessadas de fora do Bloco.


                    VEJA O TESTE QUE IREMOS FAZER ABAIXO COM UM CÓDIGO
                    PARA TESTE:
*/

{
    let x = 10;
}

console.log(x); // INFORMARÁ QUE ( X ) AINDA NÃO POSSUI VALOR DEFINIDO.

/*
        * Ao Executar o comando ( console.log(x) ) na Linha 21 do nosso código JavaScript,
        o código nos informará que o valor de ( x ), ainda não foi declarado.

        * Veja que declaramos a Variável usando ( LET ) dentro de um Bloco indicando que o valor de 
        ( x ) é igual a ( 10 ).

        * Porém observe também que fizemos a chamada com o ( console.log(x); ) fora do Escopo do Bloco,
        ao executar esse ( console.log(x); ), irá aparecer em nosso console do terminal que  ( x ) ainda
        não fora declarado.

        * Esse ( console.log(x); ) só será capaz de retornar o valor de ( x ) depois que nós o
        inserir-mos dentro do Escopo do Bloco, da seguinte forma, confira abaixo.
*/

{
    let z = 10;
    console.log(z); // AGORA ELE INFORMARÁ O VALOR DE Z = 10;
}    