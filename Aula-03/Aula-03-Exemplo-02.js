/*
        Se nós declararmos uma variável com a Palavra-Chave ( VAR ) esse erro de SyntaxError,
        não irá surgir em nosso código JavaScript.
*/

var x = 2;

var x = 1;

console.log(x); // RESULTADO FINAL ( 1 );

/*
        A única coisa que irá ocorrer é que com a declaração da ( VAR ) ( x ),
        é que quando nós dermos um console.log(x); ( x ) irá surgir em nosso console
        com o último valor declarado para ( x ), pois ( VAR ) tem um escopo Global e permite
        que seu valor seja modificado infinitas vezes.
*/