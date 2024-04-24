
let dolar = window.prompt('Antes de mais nada. Qual a cotação do dólar hoje? ')

function converter(){
    let reais = window.prompt('Quantos Reais(BRL) você deseja converter?')
    let res = document.querySelector('div#res')
    
    dolar = Number(dolar)
    reais = Number(reais)

    let vlconvertido = (reais / dolar)

    res.innerHTML = `R$${reais} serão convertidos em US$${vlconvertido}.`
}