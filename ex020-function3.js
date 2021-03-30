function fatorial(n1=1) {
    let fat = 1
    for (let i=1; i<=n1; i++) {
        fat = fat * i 
    }

    return fat

}

/*
var agora = new Date()
var num1 = agora.getSeconds()
var num2 = num1 / 10
console.log(num1,num2)
console.log (fatorial(5))
*/
let a = 10
let b = 0
while(b <= 7) {
    console.log(fatorial(b))
    b++

}