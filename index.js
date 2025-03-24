let horasTrabaladas = 230;
let valorDaHora = 11.75;
let nomeDoFuncionario = "Alexander";
let setor = "Desenvolvimento";

let salarioPorHora = horasTrabaladas * valorDaHora;

if (horasTrabaladas > 220) {
let horaExcedente = horasTrabaladas - 220;
let valorExcedente = valorDaHora * 2;
let adicionalExcedente = horaExcedente * valorExcedente;
let salarioTotal = (220 * valorDaHora) + adicionalExcedente;
console.log(`O salário de ${nomeDoFuncionario} no setor ${setor} é de ${salarioTotal} reais por mes`);
}

else {
 console.log(`O salário de ${nomeDoFuncionario} no setor ${setor} é de ${salarioPorHora} reais por mes`);
}

