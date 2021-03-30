function verificar() {
    var data = new Date()
    var anoatual = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length==0 || Number(fano.value>anoatual)) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoatual - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            var genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', '.\\images\\menino.jpeg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', '.\\images\\garoto.jpeg')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', '.\\images\\pai.jpeg')
            } else {
                // Idoso
                img.setAttribute('src', '.\\images\\avô.jpeg')
            }
        } else if (fsex[1].checked) {
            var genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', '.\\images\\menina.jpeg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', '.\\images\\garota.jpeg')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', '.\\images\\mae.jpeg')
            } else {
                // Idoso
                img.setAttribute('src', '.\\images\\avó.jpeg')
            }
        }

     }
     res.style.textAlign = 'center'
     res.innerHTML = `Detectamos ${genero} com ${idade} ano(s).<\p>`
     res.appendChild(img)

}
    //window.alert(res)
