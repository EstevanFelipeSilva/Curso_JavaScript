/*
                    JAVASCRIPT ( LET );

    * A Palavra-Chave ( LET ) foi introduzida ao ES6 (2015);

    * Variáveis declaradas com a Palavra-Chave ( LET ) não podem ser redeclaradas;

    * As variáveis definidas com ( LET ) deve ser declaradas antes do seu uso;

    * As variáveis definidas com ( LET ) têm seu Escopo limitado ao Bloco {} onde foi escrito;



                    NO CÓDIGO ABAIXO VAMOS BUSCAR ENTENDER ALGUMAS
                REGRAS QUE FORAM CRIADAS PARA O USO DA VARIÁVEL ( LET );

    * Variáveis declaradas com a Palavra-Chave ( LET ) não podem ser redeclaradas,
            pois se isso ocorrer intencionalmente ou por acidente, irá nos gerar um
            erro de SyntaxError;
*/

// let a = true;

// let a = false;

// console.log(a); /* Não irá imprimir nada no console, E irá gerar um SyntaxError */

/* 
        Se durante a escrita do seu código isso acontecer com alguma variável declarada 
        com a Palavra-Chave ( LET ), isso nos impedirá de prosseguir com o a execução
        do nosso código.
        
        Porém se nós declararmos uma variável com a Palavra-Chave ( VAR ) esse erro de SyntaxError,
        não irá surgir em nosso código JavaScript.
*/

// var x = 2;

// var x = 1;

// console.log(x); /* IMPRIMIRÁ O ÚLTIMO VALORES INFORMADO 1 */

/*
        A única coisa que irá ocorrer é que com a declaração da ( VAR ) ( x ),
        é que quando nós dermos um console.log(x); ( x ) irá surgir em nosso console
        com o último valor declarado para ( x ), pois ( VAR ) tem um escopo Global e permite
        que seu valor seja modificado infinitas vezes.
*/

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
console.log(x); /* AQUI ELE NÃO SERÁ CAPAZ DE RETORNAR O VALOR DECLARADO NA VARIÁVEL */

/*
        * Observando o código JavaScript acima, veja que declaramos a Variável dentro de um Bloco
        indicando que o valor de ( x ) é igual a ( 10 ).

        * Porém observe também que fizemos a chamada com o ( console.log(x); ) fora do Escopo do Bloco,
        ao executar esse ( console.log() ), não irá aparecer nada em nosso console do terminal.

        * Esse ( console.log(); ) só será capaz de retornar o valor de ( x ) depois que nós o
        inserir dentro do Escopo do Bloco, da seguinte forma, confira abaixo.
*/

{
    let z = 10;
    console.log(z); /* AQUI ELE RETORNARÁ O VALOR ( 10 ) */
}

/* 
                                REDECLARANDO A VARIÁVEL

        * Redeclarando uma variável usando a Palavra-Chave ( VAR ) pode nos causar Problemas.

        * Pois devemos lembrar que ( VAR ) tem escopo Global, isso significa que ao Redeclarar
                a variável de dentro do Bloco, a variável fora do Bloco também será modificada.

        OBSERVE O CÓDIGO ABAIXO, E SEUS COMENTÁRIOS;
*/

var e = 95; // AQUI A VARIÁVEL ESTARÁ RETORNANDO O VALOR ( 95 );

{
        var e = 17; // AQUI A VARIÁVEL FOI ALTERADA E PASSARÁ A RETORNAR O VALOR ( 17 );
}

console.log(e); // AQUI A VARIÁVEL MANTERÁ O VALOR ( 17 );

/*
        * Esse comportamento Global da Palavra-Chave ( VAR ), se torna um problema diante do
                Desenvolvimento de uma Aplicação Real;

        * Porém esse problema pode facilmente ser corrigido fazendo uso da Palavra-Chave ( LET );

        OBERVE O CÓDIGO ABAIXO, E SEUS COMENTÁRIOS;        
*/

let f = 17; // AQUI NO ESCOPO GLOBAL A VARIÁVEL ( f ) TERÁ O VALOR ( 17 );

{
        let f = 95; // AQUI NESTE ESCOPO DENTRO DO BLOCO, ( f ) PASSARÁ A TER O VALOR ( 95 );
        console.log(f); // ENQUANTO ( f ) FOR IMPRESSO DENTRO DESTE BLOCO ELE TERÁ SEU VALOR COMO ( 95 );
}

console.log(f); // AO RETORNAR AO ESCOPO GLOBAL ( f ), VOLTA A IMPRIMIR O VALOR ( 17 );