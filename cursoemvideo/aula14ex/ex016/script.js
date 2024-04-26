function contar() {
    var inicio = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var resultado = document.getElementById('resultado')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0) {
        // window.alert('[ERRO] Faltam dados!')
        resultado.innerHTML = '<p>Impossível Contar</p>'
    } else {
        resultado.innerHTML = '<p>Contando...</p>'
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)
        if (passo <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }
        //Contagem crescente
        if (inicio < fim) {
            for (var c = inicio; c <= fim; c += passo) {
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //Contagem Decrescente
            if (inicio > fim) {
                for (var c = inicio; c >= fim; c -= passo){
                    resultado.innerHTML += ` ${c} \u{1f449}`
                }
            }
        }
    resultado.innerHTML += `\u{1F3C1}`  
    }
}