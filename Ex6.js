var valor = prompt("Digite o valor da compra:");
var total = parseFloat(valor);

if (isNaN(total)) {
    alert("Digite um valor total válido");
} else {
    var desconto;
    if (total > 100) {
        desconto = total * 0.10;
    } else {
        desconto = total * 0.05 ;
    }
    var valorFinal = total - desconto;
    alert(
        "Valor da compra: R$" + total +
        "\n Desconto aplicado: R$" +desconto +
        "\n Total a pagar: R$" + valorFinal
    );
}