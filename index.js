let horasTrabaladas = 220;
let valorDaHora = 11.75;
let nomeDoFuncionario = "Alexander";
let setor = "Operacional";

let salarioPorHora = horasTrabaladas * valorDaHora;


if (setor === "Operacional") {
let horaExcedente = horasTrabaladas - 220;
let valorExcedente = valorDaHora * 2;
let adicionalExcedente = horaExcedente * valorExcedente;
let salarioTotal = (220 * valorDaHora) + adicionalExcedente;
console.log(`O salário de ${nomeDoFuncionario} no setor ${setor} é de ${salarioTotal} reais por mes`);
}
else if (setor === "Administrativo") {

let horaExcedente = horasTrabaladas - 220;
let valorExcedente = valorDaHora * 2;
let adicionalExcedente = horaExcedente * valorExcedente;
let salarioComHoras = (220 * valorDaHora) + adicionalExcedente;
let porcentagemAdicional = (salarioComHoras * 10) / 100;
let total = salarioComHoras + porcentagemAdicional;


console.log(`O salário de ${nomeDoFuncionario} no setor ${setor} é de ${ total} reais por mes`);
}

else if (setor === "Gerencia") {

let porcentagemAdicional = (salarioPorHora * 25) / 100;
let total = salarioPorHora + porcentagemAdicional;


console.log(`O salário de ${nomeDoFuncionario} no setor ${setor} é de ${ total} reais por mes`);
}

else {

console.log(`O salário de ${nomeDoFuncionario} no setor ${setor} é de ${salarioPorHora} reais por mes`);
}
