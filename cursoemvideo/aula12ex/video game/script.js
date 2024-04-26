function jogar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var idade = 30

    msg.innerHTML = `Você tem ${idade} anos deve jogar...`
    if (idade < 18) {
        img.src = 'snes.png'
        document.body.style.background = '#cdcdce'
    } else if (idade < 25) {
        img.src = 'neo.png'
        document.body.style.background = '#d2c2b2'
    } else {
        img.src = 'mega.png'
        document.body.style.background = '#141414'
    }

}