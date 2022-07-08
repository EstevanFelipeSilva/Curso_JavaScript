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

/* 
        * Da forma que o código acima foi construido, Ele irá Executar ambas as variaveis,
                com os dois valores informados, um estará executando o valor declarado no
                Escopo Global, e a outra executando o valor declarado no Escopo do Bloco;
*/