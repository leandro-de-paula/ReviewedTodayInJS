const result = nota => nota >= 7 ? 'APROVADO': 'REPROVADO'

console.log(result(7.1))
console.log(result(6.1))


function result2(nota) {
    return nota >= 7 ? 'APROVADO' : 'REPROVADO'
}

console.log(result2(3))



const result3 = nota => {
    return nota >= 7 ? 'APROVADO' : 'REPROVADO'
}

console.log(result3(8))
