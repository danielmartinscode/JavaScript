function verificar(){
    let ano = Number(window.prompt('Qual é o ano que você quer verificar?'))
    let res = document.querySelector('div#res')
    let msg = document.querySelector('p#msg')
    msg.innerHTML = `Analisando o ano de ${ano}`
    msg.style.font = 'bold 1.5rem Arial'
    if (ano % 4 ==0 && ano % 100 != 0 || ano % 400 == 0) {
        res.innerHTML = `O ano de ${ano} <mark id='green'>É BISSEXTO</mark><span id='v'>&#x2713;</span>`
    } else {
        res.innerHTML = `O ano de ${ano} <mark id='red'>NÃO É BISSEXTO</mark> <span id='x'>&#x2716;</span>`
    }
}