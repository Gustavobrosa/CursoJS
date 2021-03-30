var agora = new Date()
var diasem = agora.getDay()
/* Domingo Segunda Terça Quarta Quinta Sexta Sabado
    0       1       2       3   4       5       6 */
console.log(diasem)
switch (diasem) {
    case 0:
        var diasemana = 'Domingo'
        break
    case 1:
        var diasemana = 'Segunda'
        break
    case 2:
        var diasemana = 'Terça'
        break
    case 3:
        var diasemana = 'Quarta'
        break
    case 4:
        var diasemana = 'Quinta'
        break
    case 5:
        var diasemana = 'Sexta'
        break
    case 6:
        var diasemana = 'Sábado'
        break
    default:
        var diasemana = '[ERRO]'
        break
}
console.log(diasemana)
