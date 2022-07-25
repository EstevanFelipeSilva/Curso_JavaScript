/*
            INVOCAÇÃO DA FUNÇÃO

    O código dentro da (FUNÇÃO) será executado quando "algo"
        invocar (chamar) a (FUNÇÃO):

        > Quando ocorre um Evento (quando um usúario clica em um botão);

        > Quando é invocado (chamado) do código JAVASCRIPT;

        > Automaticamente (auto-invocado), (chamadas Automaticas);

    Veremos mais sobre Chamada de FUNÇÃO posteriormente no nosso Estudo;


            RETORNO DA FUNÇÃO

    Dentro de cada FUNÇÃO JAVASCRIPT existe um termo chamado (RETURN),
        quando o JAVASCRIPT atinge a instrução (RETURN), a FUNÇÃO para
        de ser executada.

    Se a FUNÇÃO foi invocada a partir de uma instrução, o JAVASCRIPT
        "retornará" para executar o código após a instrução invocada;
    
    As FUNÇÕES geralmente calculam um valor de retorno. O valor de
        retorno é "retornado" de volta a sua "chamada";
*/

let x = minhaFunção(5, 5);

function minhaFunção(a, b) {
    return a * b;
}

console.log(x); // return 25;