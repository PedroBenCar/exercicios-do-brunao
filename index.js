let readline = require('readline-sync');
 

let numProdutos = parseInt(readline.question("Digite o numero de produtos:"));

let produtos = [];

for(let i = 0; i < numProdutos; i++){
  let tipoProduto = readline.question("Digite o tipo do produto (normal, importado ou usado):").toLowerCase();

  if(tipoProduto === "normal"){
    let nome = readline.question("Digite o nome do produto:");
    let preco = parseFloat(readline.question("Digite o preço do produto:"));

    produtos.push({
      nome: nome,
      preco: preco
    });
  } else if(tipoProduto === "importado"){
    let nome = readline.question("Digite o nome do produto:");
    let preco = parseFloat(readline.question("Digite o preço do produto:"));
    let taxaAlfandega = parseFloat(readline.question("Digite a taxa de alfândega:"));

    produtos.push({
      nome: nome,
      preco: preco + taxaAlfandega
    });
  } else if(tipoProduto === "usado"){
    let nome = readline.question("Digite o nome do produto:");
    let preco = parseFloat(readline.question("Digite o preço do produto:"));
    let dataFabricacao = readline.question("Digite a data de fabricação do produto:");

    produtos.push({
      nome: nome + " (usado)",
      preco: preco * 0.9
    });
  } else {
    alert("Tipo de produto invalido.");
    i--;
  }
}

for(let i = 0; i < produtos.length; i++){
  console.log(produtos[i].nome + ": R$" + produtos[i].preco.toFixed(2));
}
