function reajuste(){
    let nome = window.prompt('Qual é o nome do funcionário?')
    let salario = Number(window.prompt(`Qual é o salário de ${nome}?`))
    let taxa = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    let aumento = Number(salario * (taxa / 100))
    let novosalario = Number(salario + aumento)

    let msg = document.querySelector('p#msg')
    msg.innerHTML = `${nome} recebeu um aumento salarial!`
    msg.style.font = 'bolder 1.5rem Arial'

    let res = document.querySelector('div#res')
    res.innerHTML = `<p>O salário atual era ${salario}.</p>`
    res.innerHTML += `<p>Com um aumento de ${taxa}%, o salário vai aumentar R$${aumento} no próximo mês.</p>`
    res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar R$${novosalario}.</p>`
    res.style.font = 'bold 1.2rem Arial'
}