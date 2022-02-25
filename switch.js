const input = require("readline-sync");

 
let op = new Boolean(false);
while (op != true) {
    const produto = input.question(
    "Informe o produto FRUTA (1) / LEGUMES (2) / VERDURA (3) / SAIR (QUALQUER TECLA): "
  );
  switch (produto) {
    case "1":
      console.log("O valor da fruta é R$ 2,00");
      break;
    case "2":
      console.log("O valor da legomes é R$ 5,00");
      break;
    case "3":
      console.log("O valor da verdura é R$ 3,50");
      break;
    default:
      console.log("FIM DA PESQUISA");
      op = true;
      break;
  }
}
