function alteracaoDoValor(numero) {
    let salarioBase = numero;
    return console.log(`O valor é ${salarioBase} reais`);
}

alteracaoDoValor(2250);

////////////////////////////////////////////////////////////////////////////////

const alteracaoDoSalarioBase = (salarioBase) => {
    return console.log(`O valor é ${salarioBase} reais`);
}

alteracaoDoSalarioBase(3252);

////////////////////////////////////////////////////////////////////////////////

function salarioPorHora (horasTrabalhadas, valorDaHora) {
let total = horasTrabalhadas * valorDaHora;
return console.log(`O valor é ${total} reais`);
}

salarioPorHora(220, 11.75);

////////////////////////////////////////////////////////////////////////////////

const totalDoSalarioPorHora = (horasTrabalhadas, valorDaHora) => {
let total = horasTrabalhadas * valorDaHora;
return console.log(`O valor é ${total} reais`);
}

totalDoSalarioPorHora(250, 12.24);