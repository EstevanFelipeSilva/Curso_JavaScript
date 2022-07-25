/*
            POR QUE FUNÇÕES ?

    Você pode reutilizar o código: defina o código uma vez e reulize-o
        inumeras vezes;

    Você pode usar o mesmo código muitas vezes com (ARGUMENTOS) diferentes,
        para produzir resultados diferentes;
*/

/*
            O OPERADOR (param) INVOCA A FUNÇÃO;

    Usando o exemplo acima, (toCelsius) refere-se ao objeto de (função) e
        (toCelsius()) refere-se ao resultado da (função);

    Acessar uma (função) sem (param) retornará o objeto da (função) em vez
        do resultado da (função);
*/
function toCelsius() {
    return (5 / 9) * (f - 32);
}

/*
            FUNÇÕES USADAS COMO VALORES VARIÁVEIS

    As funções podem ser usadas da mesma maneira que você usa variáveis, 
        em todos os tipos de fórmulas, atribuições e cálculos.
*/

let text = "A temperatura é " + x + "Graus Celsius."
let x = temperatura(77);

function temperatura(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}