/*
            IÇANDO CONSTANTES

    * As variáveis definidas com ( VAR ) são içadas ao topo e podem
    ser inicializadas a qualquer momento.

    * Você pode usar a variável antes mesmo dela ser declarada;
*/
carro = 'Corsa';

var carro;

console.log(carro); // carro = 'Corsa';

/*
    * As variáveis definidas com ( CONST ) até podem ser içadas ao topo
    porém não podem ser inicializadas;

    * Usar uma variável ( CONST ) antes dela ser declarada resultará em
    ReferenceError;
*/
nameCar = 'BMW';

const nameCar;

console.log(nameCar); 
// ReferenceError;
// SyntaxError: Inicializador ausente na declaração const;