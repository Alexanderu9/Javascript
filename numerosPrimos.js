console.log(
  "\\\\\\\\\\\\\\\\\\\\\\\\\\. \n Digite un Numero \n Para comprobar se é primo ou não \n \\\\\\\\\\\\\\\\\\\\\\\\\\."
);
let num = parseInt(prompt("Digite um numero"));

// função para saver se o numero é primo ou não
function numerosPrimos(num) {
  if (num < 2) return false;
  if (num === 2 || num === 3) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

const resultadoNumerosPrimos = numerosPrimos(num);

//função para retornar o resultado
const primos = (resultado) =>
  resultado ? `O número ${num} é primo` : `O número ${num} não é primo`;

const resultados = primos(resultadoNumerosPrimos);

console.log(primos(resultadoNumerosPrimos));

// Função para contar quantos números primos existem de 1 até um dado número

function contarNumerosPrimos(limite) {
  let quantidade = 0;

  for (i = 2; i <= limite; i++) {
    if (numerosPrimos(i)) {
      quantidade++;
    }
  }
  return quantidade;
}

console.log(
  `Quantidade de números primos de 1 até ${num}: ${contarNumerosPrimos(num)}`
);
