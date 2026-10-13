document.getElementById("btn").onclick = function () {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = parseFloat(document.getElementById("n3").value);
    var media = (n1+n2+n3)/3; 

    var situacao "";

if (media >= 7) {
    situacao = "Aprovado";
} else if (media >= 5) {
    situacao = "Recuperação";
} else {
    situacao = "Reprovado"; 
}
document.getElementById("resultado").innerHTML="Média:"+media+""+situacao; 
};