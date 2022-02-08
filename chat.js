//permite que a variável imput capiture dados via console
const input = require("readline-sync");

console.log("Seja bem vindo! Vamos começar seu cadastro");

const idade = input.question("Qual sua idade?");
const sexo = input.question("Qual seu sexo?");
const cidade = input.question("Qual sua cidade?");
const celular = input.question("Qual seu número de celular?");
console.log("____________________________________________");

if (idade >= 16 && idade < 18) {
  console.log("Entrada permitida, divirta-se, só não pode beber!!!");
  console.log("sua idade: " + idade);
  console.log("sua idade: " + sexo);
  console.log("sua idade: " + cidade);
  console.log("sua idade: " + celular);
} else if (idade >= 18) {
  console.log("Bebamos e comemoramos!!!");
  console.log("sua idade: " + idade);
  console.log("sua idade: " + sexo);
  console.log("sua idade: " + cidade);
  console.log("sua idade: " + celular);
} else {
  console.log("Entrada não permitida!!!");
}
