// Calculadora de média 5 notas
// Crie uma calculadora de média que determine se uma aluna foi aprovada,
// Você deverá usar variavéis, operadores matemáticos, lógicos econdicio.
// Dica: Use o método .parseFloat() para converter. Deverá pesquisar.

const cadastro = require('readline-sync')

const estudante = cadastro.question("Informe o nome do estudante: ")
const primeiraNota = parseFloat(cadastro.question("Insira nota 1: ")) 
const segundaNota = parseFloat(cadastro.question("Insira nota 2: "))
const terceiraNota = parseFloat(cadastro.question("Insira nota 3: ")) 
const quartaNota = parseFloat(cadastro.question("Insira nota 4: ")) 
const quintaNota = parseFloat(cadastro.question("Insira nota 5: "))
const media = (primeiraNota + segundaNota + terceiraNota + quartaNota + quintaNota)/5

if (media >= 7) {
    console.log("A média de " + estudante + ": " + media + " foi aprovado, parabéns!!!") 
}else if(media >= 4 && media <7){
    console.log("A média de " + estudante + ": " + media + " foi recuperação, aproveita!!!")
}else {
    console.log("A média de " + estudante + ": " + media + " foi reprovado, infelizmente!!!")
}
   
const frase = "A turma do backend do SENAC é massa!"

console.log("A quantidade de caracteres: " + frase.length)
