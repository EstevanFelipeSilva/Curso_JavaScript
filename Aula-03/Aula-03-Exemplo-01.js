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

let a = true;

let a = false;

console.log(a); /* Não irá imprimir nada no console, E irá gerar um SyntaxError */

/* 
        Se durante a escrita do seu código isso acontecer com alguma variável declarada 
        com a Palavra-Chave ( LET ), isso nos impedirá de prosseguir com o a execução
        do nosso código.
*/