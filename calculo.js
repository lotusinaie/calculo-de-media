let estudante1 = prompt("Por favor, informe o nome da primeira estudante:", "Digite aqui");
let notasEstudante1 = prompt("Agora, informe as três notas dessa estudante:", "Separe cada nota somente com uma vírgula, ok?");
const notas1 = notasEstudante1.split(",");
let nota1Estudante1 = parseFloat(notas1[0]);
let nota2Estudante1 = parseFloat(notas1[1]);
let nota3Estudante1 = parseFloat(notas1[2]);
let media1 = (nota1Estudante1 + nota2Estudante1 + nota3Estudante1) / 3;
if (media1 >= 5) {
    var situacao1 = "Aprovada";
} else {
    var situacao1 = "Reprovada";
}

let estudante2 = prompt("Por favor, informe o nome da segunda estudante:", "Digite aqui");
let notasEstudante2 = prompt("Agora, informe as três notas dessa estudante:", "Separe cada nota somente com uma vírgula, ok?");
const notas2 = notasEstudante2.split(",");
let nota1Estudante2 = parseFloat(notas2[0]);
let nota2Estudante2 = parseFloat(notas2[1]);
let nota3Estudante2 = parseFloat(notas2[2]);
let media2 = (nota1Estudante2 + nota2Estudante2 + nota3Estudante2) / 3;
if (media2 >= 5) {
    var situacao2 = "Aprovada";
} else {
    var situacao2 = "Reprovada";
}

let estudante3 = prompt("Por favor, informe o nome da terceira estudante:", "Digite aqui");
let notasEstudante3 = prompt("Agora, informe as três notas dessa estudante:", "Separe cada nota somente com uma vírgula, ok?");
const notas3 = notasEstudante3.split(",");
let nota1Estudante3 = parseFloat(notas3[0]);
let nota2Estudante3 = parseFloat(notas3[1]);
let nota3Estudante3 = parseFloat(notas3[2]);
let media3 = (nota1Estudante3 + nota2Estudante3 + nota3Estudante3) / 3;
if (media3 >= 5) {
    var situacao3 = "Aprovada";
} else {
    var situacao3 = "Reprovada";
}

let estudante4 = prompt("Por favor, informe o nome da quarta estudante:", "Digite aqui");
let notasEstudante4 = prompt("Agora, informe as três notas dessa estudante:", "Separe cada nota somente com uma vírgula, ok?");
const notas4 = notasEstudante4.split(",");
let nota1Estudante4 = parseFloat(notas4[0]);
let nota2Estudante4 = parseFloat(notas4[1]);
let nota3Estudante4 = parseFloat(notas4[2]);
let media4 = (nota1Estudante4 + nota2Estudante4 + nota3Estudante4) / 3;
if (media4 >= 5) {
    var situacao4 = "Aprovada";
} else {
    var situacao4 = "Reprovada";
}

let estudante5 = prompt("Por favor, informe o nome da quinta estudante:", "Digite aqui");
let notasEstudante5 = prompt("Agora, informe as três notas dessa estudante:", "Separe cada nota somente com uma vírgula, ok?");
const notas5 = notasEstudante5.split(",");
let nota1Estudante5 = parseFloat(notas5[0]);
let nota2Estudante5 = parseFloat(notas5[1]);
let nota3Estudante5 = parseFloat(notas5[2]);
let media5 = (nota1Estudante5 + nota2Estudante5 + nota3Estudante5) / 3;
if (media5 >= 5) {
    var situacao5 = "Aprovada";
} else {
    var situacao5 = "Reprovada";
}

document.write(`${estudante1} está ${situacao1}
${estudante2} está ${situacao2}
${estudante3} está ${situacao3}
${estudante4} está ${situacao4}
${estudante5} está ${situacao5}`);