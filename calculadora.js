function insert(num) {
    var numero = document.getElementById('calc-tela').innerHTML;
    document.getElementById('calc-tela').innerHTML = numero + num;
}

function clean() {
    document.getElementById('calc-tela').innerHTML = "";
}

function back() {
    var resultado = document.getElementById('calc-tela').innerHTML;
    document.getElementById('calc-tela').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular() {
    var resultado = document.getElementById('calc-tela').innerHTML;
    if (resultado) {
        document.getElementById('calc-tela').innerHTML = eval(resultado);
    }
}