var numero = prompt("Digite um número:")
var num = parseInt(numero)

if (isNaN(num)) {
    alert("Escreva algo válido");
} else {
    if(num % 2 === 0) {
        alert("Esse número é par");
}else{
    alert("Esse número é impar");
}

}
