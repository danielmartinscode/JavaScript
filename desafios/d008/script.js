function desconto(){
    produto = window.prompt('Qual o produto que você está comprando?')
    preco = Number(window.prompt('Qual o valor de etiqueta do produto?'))

    let desconto = preco * 0.1
    let novovalor = preco - desconto
    let msg = document.querySelector('p#msg')
    msg.innerHTML = `Calculando desconto de 10% para ${produto}`
    msg.style.font = 'bold 2rem Arial'
    let res = document.querySelector('div#res')
    res.innerHTML = `O preço original era R$${preco}.<br> 
                    Você acaba de ganhar R$${desconto} de desconto (-10%). <br>
                    No fim, você ai pagar R$${novovalor} no produto ${produto}`
}
    