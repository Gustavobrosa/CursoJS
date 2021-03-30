let numtent = 0
let tnum = window.document.querySelector('input#txtnum')
let res = window.document.querySelector('div#res')
let lista = window.document.querySelector('div#lista')
let test = window.document.querySelector('div#teste')

let listatentativas = []
let numsecreto = Math.floor(Math.random() *100)

function verificar() {
    if (tnum.value.length==0 || tnum.value<0 || tnum.value>100) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        numtent++
        listatentativas.push(Number(tnum.value))
        res.innerHTML = `${numtent}`
        lista.innerHTML = `${listatentativas}`
        if (Number(tnum.value) < numsecreto) {
            teste.innerHTML = `O numéro secreto é maior` 
        } else if (Number(tnum.value) > numsecreto) {
            teste.innerHTML = 'O numero sercreto é menor'
        } else if (Number(tnum.value) == numsecreto || Number(tnum.value) == 1e0) {
            teste.innerHTML = `Parabés você acertou em ${numtent} tentativas!!!`
            document.querySelectorAll('input')[1].disabled = true   //Desabilita o botao caso acerte o numero


        }
    }
    tnum.value = ''
    tnum.focus()
}


function reiniciar() {
    location.reload()
    return
}
