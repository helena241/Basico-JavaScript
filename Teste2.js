var nome = prompt("Digite seu nome:")
var idade = prompt("Digite sua idade:")

var id = parseInt(idade)

if(isNaN(id)) {
    alert("Digite algo válido");
} else {
    if(id < 18 ) {
        alert(nome + " você tem  " + id + "  anos, é menor de idade");
    } else{
        alert(nome + "  você é maior de idade");
    }
}