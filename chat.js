//permite que a variável imput capiture dados via console
const input = require("readline-sync");

// console.log("Seja bem vindo! Vamos começar seu cadastro");

// const idade = input.question("Qual sua idade?");
// const sexo = input.question("Qual seu sexo?");
// const cidade = input.question("Qual sua cidade?");
// const celular = input.question("Qual seu número de celular?");
// console.log("____________________________________________");

// if (idade >= 16 && idade < 18) {
//   console.log("Entrada permitida, divirta-se, só não pode beber!!!");
//   console.log("sua idade: " + idade);
//   console.log("sua idade: " + sexo);
//   console.log("sua idade: " + cidade);
//   console.log("sua idade: " + celular);
// } else if (idade >= 18) {
//   console.log("Bebamos e comemoramos!!!");
//   console.log("sua idade: " + idade);
//   console.log("sua idade: " + sexo);
//   console.log("sua idade: " + cidade);
//   console.log("sua idade: " + celular);
// } else {
//   console.log("Entrada não permitida!!!");
// }

// console.log("____________________________________________");
// console.log("Calculadora!!!");
// var valor1 = input.question("informe o primeiro valor ")
// var valor2 = input.question("informe o segundo valor ")
// const operacao = input.question("informe a operação desejada ")

// if (operacao == "soma"){
//     console.log("Resultado: " + (${valor1} + ${valor2}))
// }else if (operacao == "subtracao"){
//     console.log("Resultado: " + (valor1 - valor2)) 

// }else if (operacao == "divisao"){
//     console.log("Resultado: " + (valor1 / valor2)) 
//  }else{
//     console.log("Resultado: " + (valor1 * valor2)) 
//  }

// let index = input.question("Ola!!! Deseja realizar algum calculo (1) sim ou (2) nao? ")
// if (index == 1) {
//   let op = 1
//   for (let cal = index; op != 2; cal++) {

//     var valor1 = input.question("Informe o primeiro valor: ")
//     var valor2 = input.question("Informe o segundo valor: ")
//     let ope = 0
//     for (let cal = index; ope != 1; cal++) {
//       let operacao = input.question("Informe a operacao (1) multiplicacao / (2) divisao / (3) soma / (4) subtracao  : ")
      
//       switch (operacao) {
      
//         case ("1"):
//           console.log("resultado da multiplicacao: ", valor1, " * ", valor2, " = ", (valor1 * valor2))
//           ope = 1
//           break;
//         case ("2"):
//           console.log("resultado da divisao: ", valor1, " / ", valor2, " = ", (valor1 / valor2))
//           ope = 1
//           break;
//         case ("3"):
//           console.log("resultado da soma: ", valor1, " + ", valor2, " = ", (+valor1 * +valor2))
//           ope = 1
//           break;
//         case ("4"):
//           console.log("resultado da subtracao: ", valor1, " - ", valor2, " = ", (valor1 - valor2))
//           ope = 1
//           break;
//         default:
//           console.log("Foi informada uma opcao invalida para operacao!!!")
//           ope = 1
//           break;
//       }
//     }
//     op = input.question("deseja fazer um novo calculo? (1) sim ou (2) nao? ")
//     if (op != 2) {
//       if (op != 1) {
//         for (let cal = op; op != 1; cal++) {
//           op = input.question("Informe um valor valido: (1) sim ou (2) nao! ")
//           if (op == 2) {
//             console.log("OK, calcularemos em outro momento oportuno!!!")
//             return
//           }
//         }
//       }
//     } else {
//       console.log("Fim das operacoes, obrigado por sua proferencia!!!")
//     }
//   }
// } else {
//   console.log("OK, calcularemos em outro momento oportuno!!!")
// }

console.log("Vamos verificar a sua possibilidade de limite?");

const renda = input.question("Informe a sua Renda! R$ :");
console.log(renda)
if (renda < 1200) {
    
  if (renda >= 1200 && renda <= 2500) {
    console.log("O limite do seu cartão será R$:500"); 
    console.log("O limite do seu cartão será R$:1000"); 
  } else if (renda > 4500) {
    console.log("O limite do seu cartão será R$:1500"); 
  } else if (renda != Number) {
    console.log("Digite valores numericos");
  } else {
    console.log("Não poderemos te oferecer limites de crédito");
  }
}