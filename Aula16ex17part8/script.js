let txtnum = window.document.querySelector('input#txtnum') //let txtnum = window.document.getElementById('txtnum')
let res = window.document.querySelector('div#res') //let res = window.document.getElementById('res')
let tab = window.document.querySelector('select#seltab')  //let tab = window.document.getElementById('seltab')
let lista = []


function adicionar(){
    if (txtnum.value.length==0 || Number(txtnum.value) < 0 || Number(txtnum.value) > 100 || inLista(Number(txtnum.value), lista)) {
        window.alert('Valor inválido ou já encontrado na lista! Tente novamente.')
    } else {
        if (lista.length == 0) {
            tab.innerHTML = ''
        }
        intnum = Number(txtnum)
        lista.push(Number(txtnum.value))
        var item = document.createElement('option')
        item.text = `Valor ${Number(txtnum.value)} adicionado`
        tab.appendChild(item)
        res.innerHTML = ''
    }
    txtnum.value = ''
    txtnum.focus()
}

function finalizar(){
    let tamanho = Number(lista.length)
    lista.sort(function(a,b){
        return a-b; })
    res.innerHTML = `Temos na lista ${tamanho} itens.<br>`
    res.innerHTML += `O maior valor é ${lista[lista.length - 1]}<br>`
    res.innerHTML += `O menor valor é ${lista[0]}<br>`
    let soma = somalista(lista)
    res.innerHTML += `A soma dos valores da lista da ${soma}<br>`
    let media = soma / (lista.length)
    res.innerHTML += `A média dos valores da lista é ${media}`
}

function inLista(n,l) {
    if (l.indexOf(Number(n)) == -1) {
        return false
    } else {
        return true
    }
}

function somalista(lista) {
    soma = 0
    for (i in lista) {
        soma += lista[i]
    }
    return soma
}

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
//alert('Script funcionando!!')