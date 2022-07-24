/*
            TIPOS DE DADOS

    let a = 16;                         // NUMBER
    let firstName = "Jhon";             // STRING
    let x = {Name: "John", Age: 36};    // OBJECT


            O CONCEITO DE TIPOS DE DADOS

    No estudo da Programação, os Tipos de Dados são um
        conceito muito importante.

    Para podermos operar em variáveis, é importante que saibamos
        o Tipo de variável que ela é.

    Sem tipos de dados, o computador não pode resolver
        os respectivos problemas com segurança.
*/

let a = 02 + " = " + "Fevereiro";

console.log(a); // 2 = Fevereiro;

/*
    Observando a expressão acima faz algum sentido juntar
        um ( Number ) a uma ( String )? Pela Lógica não
        essa expressão ou Produzirá um Error ou Produzirá
        um resultado insatisfatório;

    Ao adicionar essa expressão o JavaScript tratará o Número
        como ele sendo uma String e assim ele imprimirá as
        informações todas empilhadas;
*/

let b = 02 + 17 + "Desenvolvedor";

console.log(b); // 19Desenvolvedor;

/*
    JavaScript avalia expressões sempre dá Esquerda para a Direita.

    Sequências diferentes iram produzir resultados diferentes.

    No Exemplo acima, JavaScript nos trará o seguinte resultado:

            19Desenvolvedor;
    
    Pois o JavaScript entenderá que os 2 primeiros tipos de dados
        são do tipo ( Number ) então ele tratará como uma expressão
        númerica e depois ele entende que o dado do tipo ( String )
        está sendo somada aos números.
*/

let c = 'Desenvolvedor' + 02 + 17;

console.log(c); // Desenvolvedor217;

/*
    Já no exemplo acima o JavaScript entende dos os dados descritos
        dentro da variável, como sendo do tipo de dado ( String );

    E assim quando imprimido o JS empilhará os dados;
*/