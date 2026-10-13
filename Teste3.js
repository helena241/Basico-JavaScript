var numero1 = prompt("Digite um número:")
var numero2 = prompt("Digite um segundo número:")

var num1 = parseInt(numero1)
var num2 = parseInt(numero2)

if(isNaN(num1)|| isNaN(num2)) {
    alert("Escreva algo válido!!");
}else{
    if(num1 > num2) {
        alert("O primeiro número digitado, "+ num1 + ", é maior que o segundo numero digitado, "+ num2);
    } else {
        alert("O segundo número digitado, "+ num2 + ", é maior que o primeiro numero digitado, "+ num1)
    }
}