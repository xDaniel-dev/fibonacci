const form = {
    numero : document.getElementById('fibo'),
    btn: document.getElementById('btn'),
    resposta: document.getElementById('resposta')
}

form.btn.addEventListener('click',()=>{
    pertenceFibonacci(form.numero.value)
})

function pertenceFibonacci(num) {
    let a = 0, b = 1;

    if (num == 0 || num == 1) {
        return form.resposta.innerHTML = `${num} pertence à sequência de Fibonacci.`;
    }

    while (b < num) {
        let temp = b;
        b = a + b;
        a = temp;
    }

    if (b == num) {
        return form.resposta.innerHTML = `${num} pertence à sequência de Fibonacci.`;
    } else {
        return form.resposta.innerHTML = `${num} não pertence à sequência de Fibonacci.`;
    }
}