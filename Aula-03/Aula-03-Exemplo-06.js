/*
                DEIXANDO UMA VARIÁVEL IÇADA

        * As variáveis definidas com ( VAR ) são içadas ao topo e podem
        ser inicializadas a qualquer momento.

        * Mais especificamente você pode usar a variável antes dela ser
        declarada.
*/

carName = "Ferrari";

var carName;

console.log(carName);

/*
        * Mais futuramente nós vamos ver mais sobre içamento de variáveis.

        * As veriáveis definidas com ( LET ) são içadas ao topo do Bloco,
        mas não inicializadas.

        * Usar uma variável ( LET ) antes de ser declarada resultará em
        ReferenceError;
*/

nomeCarro = "Mercedez";

let nomeCarro = "Volvo";

console.log(nomeCarro);