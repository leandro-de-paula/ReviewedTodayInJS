function imparPar(x) {
    let result = x % 2
    //console.log(result)

    if (result == 1) {
        //console.log(result)
        console.log(x, ' É impar')
    } else {
        console.log(x, ' É par')
    }
}

// 1 = impar
// 0 = par

imparPar(8)