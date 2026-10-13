var idade = prompt("Digte sua idade:")

var id = parseInt(idade)

if (isNaN(idade)) {
    alert("Digite um valor válido");
} else {
    if(idade >= 65){
        alert("Você é idoso");
    } else{
        if(idade <= 12){
            alert("Você é uma criança");
        } else {
            alert("Você é jovem");
        }
        
    }
}