// Exercício 1
let diadasemana = prompt("Qual o dia da semana?")
if (diadasemana == "Sábado"){
    alert("Bom final de semana!");
} else if (diadasemana == "Domingo"){
    alert("Bom final de semana!");
} else {
    alert("Boa semana!");
}

// Exercício 2
let Numero = prompt("Digite um número: ");
if (Numero > 0){
    alert(`O número ${Numero} é positivo`);
} else if (Numero < 0){
alert (`O número ${Numero} é negativo`);
} else {
    alert (`O número ${Numero} é zero`);
}

// Exercício 3
let Pontuacao = prompt ("Digite a pontuação do jogador: ");
if (Pontuacao >= 100){
    alert ("Parabéns, você venceu!");
} else {
    alert ("Tente outra vez.");
}