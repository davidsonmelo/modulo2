const input = require("readline-sync");

nota1 = input.question("Primeira nota: ")
nota2 = input.question("segunda nota: ")
nota3 = input.question("terceira nota: ")
nomeInfor = input.question("Informe seu nome: ")
valorA = input.question("Informa um valor")
valorB = input.question("Informa um valor")

calcularMedia(nota1, nota2, nota3)
primeiraFuncao()

dizerNome(nomeInfor)
dizerNome("Davidson")
dizerNome("Riviane")
dizerNome("Deborah")
soma(valorA,valorB)
function calcularMedia(not1, not2, not3){
    console.log("Sua média: " +(not1 + not2 + not3)/3)
}

function primeiraFuncao(){
    console.log("Hello word")
}

function dizerNome(nome){
    console.log("Bem vindo(a): " + nome)
}

const bancoDeDados = "teste"
dizerNome(bancoDeDados)

function soma(a,b){
    const soma = +a + +b;
    return soma
}

const chamaSoma = soma(valorA,valorB)
console.log("Valor da soma: " + chamaSoma)
