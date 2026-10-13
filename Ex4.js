var valor = prompt("Digite um valor:");

var num = parseFloat(valor);

if (isNaN(num)) {
    alert("Digite números válidos!!")
} else {
    if ( num > 0) {
        alert("O número digitado é positivo")
    } else if (num < 0) {
        alert("O número digitado é negativo")
    } else {
        alert("O número digitado é 0")
    }
}