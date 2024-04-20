function tabuada(){
    var num = document.getElementById('txtnum')
    var tabuada = document.getElementById('resultado')

    if (num.value.length == 0 ) {
        alert('Por favor, digite um número.')
        tabuada.innerHTML = 'Digite um número para começar!'
    } else {
         num = Number(num.value)
         tabuada.innerHTML = ''

    for (var i = 0; i <= 10; i++) {
        var resultado = num * i
        tabuada.innerHTML += `${num} x ${i} = ${resultado}<br>`
        }
    }
}