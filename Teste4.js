var numero = prompt("Digite um número:")

var num = parseInt(numero)

if (isNaN(num)) {
    alert("Digite algo válido");
} else{
    if(num > 0) {
        alert("Esse número é positivo");
    } else {
        if(num === 0) {
            alert("Esse número é zero");
        } else{
            alert("Esse número é negativo");
        }
    }
}