var nota1 = prompt("Digite a primeira nota:")
var nota2 = prompt("Digite a segunda nota:")
var nota3 = prompt("Digite a terceira nota:")

var n1 = parseFloat(nota1)
var n2 = parseFloat(nota2)
var n3 = parseFloat(nota3)

var media = ((n1+n2+n2)/3)

if(media >= 7){
    alert("O aluno foi aprovado");
}else {
    if (media < 4){
        alert("O aluno foi reprovado");
    } else {
        if(isNaN(nota1)|| isNaN(nota2)|| isNaN(nota3)){
            alert ("Escreva algo válido");
        } else{
            alert("O aluno está em recuperação");
        }
    } 
}