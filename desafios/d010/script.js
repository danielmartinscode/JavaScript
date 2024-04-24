function calcular(){
    let a = Number(window.prompt('Qual o valor de a?'))
    let b = Number(window.prompt('Qual o valor de b?'))
    let c = Number(window.prompt('Qual o valor de c?'))
    let delta = Number((b * b) - (4 * a * c))
    let res = document.querySelector('div#res')
    let msg = document.querySelector('p#msg')
    msg.innerHTML = 'Resolvendo Bhaskara'
    msg.style.font = 'Bold 1.5rem Arial'
    if (delta < 0){
        res.innerHTML = 'Sem raízes Reais.'
    } else {
        res.innerHTML = `<p>A equação atual é <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong></p>`
        res.innerHTML += `<p>O cálculo realizado será <strong>&Delta; = ${a}<sup>2</sup> - 4 . ${a} . ${c}</p>`
        res.innerHTML += `<p>O valor calculado foi <mark><strong>&Delta; = ${delta}</strong></mark></p>`
    }
}