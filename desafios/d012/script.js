function verificar(){
    let precoant = window.prompt('Qual era o preço anterior do produto?')
    let precoatual = window.prompt('Qual o preço atual do produto?')
    let msg = document.querySelector('p#msg')
    msg.innerHTML = 'Analisando os valores informados'
    msg.style.font = 'bold 1.5rem Arial'
    let res = document.querySelector('div#res')
    precoant = parseFloat(precoant)
    precoatual = parseFloat(precoatual)
    if (precoant < precoatual){
        let variacao = (Number(precoatual - precoant)).toFixed(2)
        let percentual = (((precoatual - precoant) / precoant) * 100).toFixed(2)
        res.innerHTML = `<p>O Produto custava R$${precoant} e agora custa R$${precoatual}.</p>`
        res.innerHTML += '<p>Hoje o produto está mais caro.</p>'
        res.innerHTML += `<p>O preço subiu R$${variacao} em relação ao preco anterior</p>`
        res.innerHTML += `<p>Uma variação de ${percentual}% para cima</p>`
    } else {
        let variacao = (Number(precoant - precoatual))
        let percentual = (Number((precoant - precoatual) / precoant) * 100).toFixed(2)
        res.innerHTML = `<p>O Produto custava R$${precoant} e agora custa R$${precoatual}.</p>`
        res.innerHTML += '<p>Hoje o produto está mais barato.</p>'
        res.innerHTML += `<p>O preço caiu R$${variacao} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${percentual}% para baixo.</p>`
    }
}