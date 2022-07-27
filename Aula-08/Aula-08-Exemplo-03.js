/*
            MÉTODOS DE OBJETO

    Objetos também podem ter (métodos).

    (Métodos) são (ações) que podem ser executadas em objetos.

    Os métodos são armazenados em (propriedades) como definições de (função).


            PROPRIEDADES                    VALORES DAS PROPRIEDADES

        > firstName:                        > "John";

        > lastName:                         > "Doe";

        > age:                              > 50;

        > eyeColor:                         > "black";

        > nameComplete:                     > function() {return this.firstName + " " + this.lastName};

    Um (método) é uma (função) armazenada como uma (propriedade).
*/

const person = {
    firstName: "Estevan",
    lastName : "Felipe",
    id       : 1,
    fullName : function() {
        return this.firstName + " " + this.lastName
    }
};

console.log(person);

/*
    No exemplo acima, (this) refere-se ao objeto (person);

    (this.firstName) significa a propriedade firstName de (person);


            O QUE É ISSO ?
    
    Em JavaScript, a palavra-chave (this) se refere a um (OBJETO);

    Qual (objeto) depende de como (this) está sendo invocado (usado ou chamado);

    A palavra-chave (this) se refere a um (objeto) diferente de acordo com o modo
        como é usada;


            > Em um (método) de (objeto), (this) refere-se ao (objeto);

            > Sozinho, (this) se refere ao (objeto) global;

            > Em uma (função), (this) se refere ao (objeto global);

            > Em uma (função), no modo estrito, (this) é (undefined);

            > Em um (evento), (this) se refere ao (elemento) que recebeu o (evento);

            > Métodos como (call()), (apply()) e (bind()) podem se referir a (this)
                qualquer (objeto);

    (this) não é uma variável. É uma palavra-chave. Você não pode alterar o valor de (this).


            A PALAVRA-CHAVE (THIS)

    Em uma definição de (função), (this) refere-se ao "proprietário" da (função);

    No exemplo acima, (this) é o (objeto) pessoa que "possui" a (função) fullName;

    Em outras palavras, (this.firstName) significa a (firstName) propriedade deste (objeto);


            ACESSANDO MÉTODOS DO OBJETO

    Você acessa um método de objeto com a seguinte sintaxe:

            > objectName.methodName();
*/

const person2 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
  }
};

console.log(person2.fullName());

// Se você acessar um (método) sem os parênteses (), ele retornará a definição da (função);

/*
            NÃO DELCARE (STRINGS), (NÚMEROS) E (BOOLEANOS) COMO OBJETOS;
            
    Quando uma variável JavaScript é declarada com a palavra-chave " new", a variável 
        é criada como um objeto:
*/

x = new String();   // x foi declarado como um Objeto String;
y = new Number();   // y foi declarado como um Objeto Number;
z = new Boolean();  // z foi declarado como um Objeto Boolean;

/*
    Evite (String), (Number), e (Boolean) objetos. Eles complicam seu código e diminuem a 
        velocidade de execução.
*/