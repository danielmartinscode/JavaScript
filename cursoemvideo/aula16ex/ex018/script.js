let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

//Verifica se o número digitado está entre 1 e 100
function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

//verifica se o número digitado já está incluso na vetor de valores
function inLista (n,l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){ //Se isNumero e inLista são True, ele adiciona o valor no vetor com o comando push
    if (isNumero(num.value) && !inLista(num.value, valores)) { 
        valores.push(Number(num.value))
        let item = document.createElement('option') //Estamos criando um elemento dentro do select
        item.text = `Valor ${num.value} adicionado.` //informando o padrão a ser escrito dentro do option no select
        lista.appendChild(item) //adicionando o número no select apresentando um resultado visual
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0) { //Verifica se a lista está vazia
        window.alert('Adicione valores antes de finalizar!')
    } else { //senão estiver vazia...
        let tot = valores.length //soma todos os valores do vetor
        let maior = valores[0] //define que o maior valor é o primeiro digitado
        let menor = valores[0] //define que o maior valor é o primeiro digitado
        let soma = 0
        let media = 0
        for (let pos in valores) {  //laco de percurso no vetor
            soma += valores[pos] //fazendo a soma dos valores no vetor
            if (valores[pos] > maior)// verificando o maior valor e atribuindo a variável o maior valor.
                maior = valores[pos]
            if (valores[pos] < menor)// verificando o menor valor e atribuindo a variável o menor valor.
                menor = valores[pos]
        }
        media = (soma / tot).toFixed(2)
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p> Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media}.`
    }
}