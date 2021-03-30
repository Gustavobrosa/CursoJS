// Recusividade - quando a funcao chama ela mesma
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}


console.log(fatorial(5))
/*
let b = 0
while(b <= 7) {
    console.log(fatorial(b))
    b++

}*/