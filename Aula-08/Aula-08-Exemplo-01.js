/*
            OBJECTOS EM JAVASCRIPT

    Objetos, Propriedade e Métodos da vida real.

        > Na vida real, um Carro é um Objeto;

        > Um Carro tem (propriedades) como peso e cor, e (métodos) como
            iniciar e parar;

    Objeto:
        {Carro};

    Propriedade:
        {
            carro.name: Fiat,
            carro.modelo: 500,
            carro.peso: 850Kg,
            carro.cor: Branco,
        }

    Métodos:
        {
            carro.start();
            carro.drive();
            carro.brake();
            carro.stop();
        }

    Todos os carros têm as mesmas propriedades , mas os valores das propriedades
        diferem de carro para carro.

    Todos os carros têm os mesmos métodos , mas os métodos são executados em 
        momentos diferentes .

    Você já aprendeu que as variáveis ​​JavaScript são contêineres para valores de dados.

    Este código atribui um valor simples (Fiat) a uma variável chamada car:
*/

let carro = "Fiat";

/*
    Objetos também são variáveis. Mas os objetos podem conter muitos valores.

    Este código atribui muitos valores (Fiat, 500, branco) a uma variável chamada car:
*/

let carro2 = {type:"Fiat", model:"500", color:"white"};

/*
    Os valores são escritos como pares nome:valor (nome e valor separados por dois pontos).

    É uma prática comum declarar (OBJETOS) com a palavra-chave (CONST).

    Saiba mais sobre como usar (CONST) com objetos no capítulo: JS Const.
*/