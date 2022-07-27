/*
            DEFINIÇÃO DO OBJETO

    Você define (e cria) um objeto JavaScript com um literal de objeto:
*/

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

/*
    Espaços e quebras de linha não são importantes. Uma definição de objeto 
        pode abranger várias linhas:
*/

const person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

/*
            PROPRIEDADES DO OBJETO

    Os pares (name:values) ​​em objetos JavaScript são chamados de (PROPRIEDADES):

            PROPRIEDADES            VALORES

        > firstName:                > "John";  

        > lastName:                 > "Doe";

        > age:                      > 50;

        > eyeColor:                 > "blue";


            ACESSANDO PROPRIEDADES DO OBJETO

    Você pode acessar as propriedades do objeto de duas maneiras:
*/

objectName.propertyName;

// OU

objectName["propertyName"];

// VEJA ESSE EXEMPLO ABAIXO:

console.log(person);             // IMPRIMIRAR TODOS OS ELEMENTOS DO OBJETO;
console.log(person.firstName);   // IMPRIMIRA APENAS O ELEMENTO REQUISITADO DO OBJETO;
console.log(person["lastName"]); // IMPRIMIRA APENAS O ELEMENTO REQUISITADO DO OBJETO;

/*
    Objetos JavaScript são contêineres para valores nomeados chamados propriedades.
*/