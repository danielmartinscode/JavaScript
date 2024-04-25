function entrar(){
    let nome = window.prompt('Qual é o nome do aluno?')
    let n1 = window.prompt(`Primeira nota de ${nome}:`)
    let n2 = window.prompt(`Segunda nota de ${nome}:`)
    let msg = document.querySelector('p#msg')
    let res = document.querySelector('div#res')
    n1 = parseFloat(n1).toFixed(1)
    n2 = parseFloat(n2).toFixed(1)
    let media = (parseFloat(n1) + parseFloat(n2))/2
    media = Number(media).toFixed(1)
    msg.innerHTML = `Analisando a situação de ${nome}`
    msg.style.font = 'Bold 1.3rem Arial'
    res.innerHTML = `<p>Com as notas ${n1} e ${n2}, a <strong> média é ${media}</strong></p>`

    if (media > 6){
        res.innerHTML += '<p>Com média acima de 6,0, o aluno está <span id="verde">APROVADO</span></p>'
    } else if (media >= 3 && media <=6) {
        res.innerHTML += '<p>Com média entre 3,0 e 6,0, o aluno está em <span id="laranja" >RECUPERAÇÃO</span></p>'
    } else {
        res.innerHTML += '<p>com média abaixo de 3,0, o aluno está <span id="vermelho">REPROVADO</span>'
    }
}