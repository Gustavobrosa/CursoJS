//alert('Script funcionando!!')
let esp = window.document.querySelector('input#espaco')
let temp = window.document.querySelector('input#tempo')
let res = window.document.querySelector('div#res')

function calcula() {
    let vel = esp.value / temp.value
    res.innerHTML = `<br>A velocidade média do percurso foi de <br><b>${vel.toFixed(2)} Km/h</b>`
}

function converterms() {
    let vel = esp.value / temp.value
    let velms = vel*1000/(60*60)
    res.innerHTML = `<br>A velocidade média do percurso foi de <br><b>${velms.toFixed(2)} m/s</b>`
}

function convertermih() {
    let vel = esp.value / temp.value
    let velmih = vel/1.609343
    res.innerHTML = `<br>A velocidade média do percurso foi de <br><b>${velmih.toFixed(2)} mi/h</b>`
}
function convanoluz () {
    let vel = esp.value / temp.value
    let velal = vel / (300000*60*60*24*365)
    res.innerHTML = `<br>A velocidade média do percurso foi de <br><b>${velal} anos-luz</b>`
}
/*

3000000000000000000000000000000000000000000000000000000000000000000000000000000



function calcula() {
    let esp = window.document.querySelector('input#espaco').value
    let temp = window.document.querySelector('input#tempo').value
    let res = window.document.querySelector('div#res')

    // calculo da velocidad media v=s/t
    let vel = esp / temp
    res.innerHTML = `<br>A velocidade média do percurso foi de <b>${vel} Km/h</b>`
}

function converter() {
    let esp = window.document.querySelector('input#espaco').value
    let temp = window.document.querySelector('input#tempo').value
    let res = window.document.querySelector('div#res')
    let vel = esp / temp
    let velms = vel*1000/(60*60)
    res.innerHTML = `<br>A velocidade média do percurso foi de <b>${velms} m/s</b>`

}*/