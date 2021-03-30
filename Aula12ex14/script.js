function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getSeconds() // usei getSeconds e nao getHours por que é mais legal ver as mudanças automaticamente
    var horacompleta = data.getHours() + ':' + data.getMinutes()
    //var hora = 9
    msg.innerHTML = `Agora são ${horacompleta} horas. ##${hora}##`
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = '.\\images\\manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde
        img.src = ".\\images\\tarde.png"
        document.body.style.background = '#b9846f'
    } else {
        // Boa noite
        img.src = ".\\images\\noite.png"
        document.body.style.background = '#515154'
    }

}

