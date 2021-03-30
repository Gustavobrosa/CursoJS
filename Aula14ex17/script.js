//window.alert('Script funcionando!!')
function calcular() {
    var numero = window.document.getElementById('txtnum')
    var tab = window.document.getElementById('seltab')
    var res = window.document.getElementById('res')
    var num = Number(numero.value)
    tab.innerHTML = ''
    for (var i = 0; i <= 9; i += 1) {
        var item = document.createElement('option')
        var r = num * i 
        item.text = `${num} X ${i} = ${r}`
        item.value = `tab${i}`
        tab.appendChild(item)
    } 

    //res.innerHTML = `${resposta}`




}