// Array de objetos contendo produtos e suas quantidades vendidas
const objetos = [
  {
    macas: 3,
    peras: 2,
    carne: 1,
    frango: 5,
    doces: 2,
  },
  {
    macas: 1,
    cafes: 1,
    ovos: 6,
    frango: 1,
    paes: 4,
  },
];

// Criando uma lista vazia que irá armazenar todos os tipos de produtos
const tiposDeprodutos = [];

for (const objeto of objetos) {
  // Obter as chaves (nomes dos produtos) do objeto atual
  const chaves = Object.keys(objeto);

  // Percorrendo as chaves do objeto atual
  for (const chave of chaves) {
    // Verificando se o tipo de produto já está na lista tiposDeProdutos
    if (!tiposDeprodutos.includes(chave)) {
      // Se o produto não estiver na minha lista, adicioná-lo.
      tiposDeprodutos.push(chave);
    }
  }
}

// Mostrar o array com todos os tipos de produtos únicos no console.
console.log(tiposDeprodutos);

// Variável para armazenar o total de vendas.
let totalVendido = 0;

// Iterar sobre cada objeto no array de objetos novamente.
for (const objeto of objetos) {
  // Obter os valores (quantidades vendidas) do objeto atual.
  const valores = Object.values(objeto);

  // Percorrer os valores do objeto atual.
  for (const valor of valores) {
    // Somar o valor atual á variável "totalVendido"
    totalVendido += valor;
  }
}

console.log("Total de vendas é: " + totalVendido);
