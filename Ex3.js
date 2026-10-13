var num1 = prompt("Digite o primeiro número:");
var num2 = prompt("Digite o segundo número:");
var n1 = parseFloat(num1);
var n2 = parseFloat(num2);

if (isNaN(n1) || isNaN(n2)) {
    alert("Digite números válidos!");
} else {
    if (n1 > n2) {
        alert("O maior número é: " + n1);
    } else if (n2 > n1) {
        alert("O maior número é: " + n2);
    } else {
        alert("Os números são iguais");
    }
}