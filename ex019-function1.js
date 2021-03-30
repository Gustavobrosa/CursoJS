function parimp(n) {
    if (n%2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

var agora = new Date()
var num = agora.getSeconds()
//let num = 0
let resposta = parimp(num)
console.log(`${num} - ${resposta}`)