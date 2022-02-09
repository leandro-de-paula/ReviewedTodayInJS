let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('Os verdadeiros... ')
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!!"texto")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

let title = "Os falsos... "
console.log(`${title}`)
console.log(!!0)
console.log(!!"")
console.log(!!'')
console.log(!!null)
console.log(!!undefined)
console.log(!!(isAtivo = false))


console.log('Para finalizar... ')
console.log(!!(''||null||0||' '))

let nome = "Evellyn"
console.log(nome || 'Desconhecido')


