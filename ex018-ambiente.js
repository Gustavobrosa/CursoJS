let num = [4,8,2,5,2,3,9]

let mostrar = num[0]
for (i in num) {
    mostrar += ',' + num[i]
    console.log(`${mostrar}`)
}

let pos = num.indexOf(7)
console.log(pos)
num.sort()
console.log(num)




/* num.push(3)
console.log(`${num[3]}`)
console.log(num)
num.push(4)
//console.log(num.sort())
console.log(`tem ${num.length}`)
console.log(num[0])
num[3] = 55
console.log(num)
*/