alert('Bem vindo ao jogo do numero secreto')
let numeroMaximo = 5000;
let numeroSecreto = parseInt (Math.random() * numeroMaximo + 1);
console.log("o número secreto é " + numeroSecreto);
let chute;
let tentativas = 1;

while(chute != numeroSecreto){
    chute = prompt(`Digite um número de 1 a ${numeroMaximo}`);

if (chute == numeroSecreto){
    break;
    alert(`você acertou! o número secreto é ${numeroSecreto} com total de ${tentativas}tentativas`);
} else {
        if (chute > numeroSecreto){
            alert(`O número é menor que ${chute}`);
        } else {
            alert(`O número é maior que ${chute}`);
        }
    }
    tentativas++;
}

let PalavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
alert(`você acertou! o número secreto é ${numeroSecreto} com total de ${tentativas} tentativas`);

//if (tentativas > 1){
  //  alert(`você acertou! o número secreto é ${numeroSecreto} com total de ${tentativas}tentativas`);
//} else {
  //  alert(`você acertou! o número secreto é ${numeroSecreto} com total de ${tentativas}tentativa`);
//}