var agora = new Date()
var hora = agora.getSeconds() //peguei os segundos que fica mais divertido de testar o programa ;)
console.log (hora)
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 6) {
    console.log('Boa madrugada!')
}   else if (hora < 12) {
    console.log('Bom dia!')
}   else if (hora <= 18) {
        console.log('Boa tarde!')
    } else {
        console.log('Boa noite!')
    }