var valor = prompt("Digite o preço final da compra:")

var total = parseFloat (valor)

if (isNaN(valor)){
    alert("Digite algo válido");
} else {
    if(total >= 100) {
        desconto = total * 0.15
    }else {
        desconto = total * 0.05
    }
}
var valorfinal  = total - desconto ;
 alert (" O valor total da compra foi de "+ total+ " mas como o desconto de "+ desconto + " o valor final é " + valorfinal )
