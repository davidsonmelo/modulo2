const input = require("readline-sync");

ex = 0
for (let index = 0; ex != 1; index++) {
    const exerc = input.question("Qual exercicio deseja testar (1), (2), (3) ou nenhum (s)? ")
    if (exerc == 1 || exerc == 2 || exerc == 3) {
        switch (exerc) {
            case "1":
                console.log("Ok, vamos testar o 1° exercicio. Calculadora de média, 5 notas");
                op = 0
                for (let index = 0; op != 1; index++) {
                    var n1 = input.question("Informe a primeira nota: ");
                    if (isNaN(n1) || n1 == "" || +n1 < 0 || +n1 > 10) {
                        console.log("'", n1, "'", "nãe é uma nota valida, digite uma nota!")
                    } else {
                        op = 1
                    }
                }
                for (let index = 0; op != 2; index++) {
                    var n2 = input.question("Informe a segunda nota: ");
                    if (isNaN(n2) || n2 == "" || +n2 < 0 || +n2 > 10) {
                        console.log("'", n2, "'", "nãe é uma nota valida, digite uma nota!")
                    } else {
                        op = 2
                    }
                }
                for (let index = 0; op != 3; index++) {
                    var n3 = input.question("Informe a terceira nota: ");
                    if (isNaN(n3) || n3 == "" || +n3 < 0 || +n3 > 10) {
                        console.log("'", n3, "'", "nãe é uma nota valida, digite uma nota!")
                    } else {
                        op = 3
                    }
                }
                for (let index = 0; op != 4; index++) {
                    var n4 = input.question("Informe a quarta nota: ");
                    if (isNaN(n4) || n4 == "" || +n4 < 0 || +n4 > 10) {
                        console.log("'", n4, "'", "nãe é uma nota valida, digite uma nota!")
                    } else {
                        op = 4
                    }
                }
                for (let index = 0; op != 5; index++) {
                    var n5 = input.question("Informe a quinta nota: ");
                    if (isNaN(n5) || n5 == "" || +n5 < 0 || +n5 > 10) {
                        console.log("'", n5, "'", "nãe é uma nota valida, digite uma nota!")
                    } else {
                        console.log("Soma total das notas ", (+n1 + +n2 + +n3 + +n4 + +n5))
                        console.log("A média foi ", (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4) + parseFloat(n5)) / 5)
                        op = 5
                    }
                }
                break;
            case "2":
                console.log("Ok, vamos testar o 2° exercicio. Contador de letras")

                const letras = input.question("Informe as letras a ser contadas: ")
                let letra = 1
                var dad
                var total = 0

                for (let index = 0; index < letras.length; index++) {
                    dad = letras[index]
                    if (!isNaN(dad) || dad == "") {
                        console.log(letras[index], "Não é letra: ")
                    } else {
                        console.log(letras[index], "É letra: ")
                        total = total + 1
                    }
                }
                console.log("Total de caracteres informado: ", letras.length)
                console.log("Total de letras: ", total)
                break;
            default:
                console.log("Ok, vamos testar o 3° exercicio. Inversor de letras")
                const str = input.question("informe a palavra ou frase que deseja inverter: ")
                const strReverse = str.split('').reverse().join('')
                console.log("O resultado: ",strReverse)
                break;
        }
    } else if (exerc == "s") {
        console.log("Ok, obrigado espero ter contribuido e volte para testar quando quiser!!!")
        ex = 1
    } else {
        console.log("Informou uma alternativa invalida!!!")
    }
}