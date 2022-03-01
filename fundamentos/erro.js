function handleErrorAndThrow(error) {
    // throw new Error('...')
    throw true
}

function printNameShoutOut(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (error) {
        handleErrorAndThrow(error)
    }finally {
        console.log('final')
    }
}
const obj = {nome: 'Leandro' }
printNameShoutOut(obj)