let valor // n�o inicializada
console.log(valor)

valor = null // ausencia de valor
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto)
console.log(produto.preco)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //Evite abribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem pre�o
console.log(!!produto.preco)
console.log(produto)