alert("O código está rodando!");
while (true) {
  console.log(
    "Menu de Opções \n [1] Somar dois números\n [2] Subtrair dois números \n [3] Buscar quantidade números pares \n [4] Buscar quantidade números impares \n [5] Buscar quantidade números primos \n [6] Sair."
  );

  let numero = parseInt(prompt("Digite um numero"));

  if (numero === 6) {
    console.log("Saindo...");
    break;
  }

  if (numero === 1 || numero === 2) {
    var num1 = parseInt(prompt("Digite o primeiro número"));
    var num2 = parseInt(prompt("Digite o segundo número"));

  } else {
    var num1 = parseInt(prompt("Digite um número"));
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const soma = (a, b) => a + b;

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const subtracao = (a, b) => a - b;

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function quantidadeNumerosPares(num) {
    //função para saver se o numero é par ou não
    function numerosInteiros(num) {
      if (num % 2 === 0) return true;
      else return false;
    }
    const resultados = numerosInteiros(num);

    //função para retornar o valor
    function numerosP() {
      if (resultados) return `O número ${num} é par`;
      return `O número ${num} é impar`;
    }

    const NumerosInfo = numerosP(resultados);
    console.log(NumerosInfo);

    //função para contar os numeros pares do 1 ao numero digitado

    function ContarNumerosPares(limite) {
      let quantidade = 0;
      let i = 2;

      while (i <= limite) {
        quantidade++;
        i += 2;
      }
      return quantidade;
    }

    return `Quantidade de números pares de 1 até ${num}: ${ContarNumerosPares(num)}`;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function quantidadeNumerosImpares(num) {
    function numerosInteiros(num) {
      if (num % 2 === 0) return true;
      else return false;
    }
    const resultados = numerosInteiros(num);

    //função para retornar o valor
    function numerosP() {
      if (resultados) return `O número ${num} é par`;
      return `O número ${num} é impar`;
    }

    const NumerosInfo = numerosP(resultados);
    console.log(NumerosInfo);

    //função para contar os numeros Impares do 1 ao numero digitado

    function ContarNumerosImpares(limite) {
      let quantidade = 0;
      let i = 1;

      while (i <= limite) {
        quantidade++;
        i += 2;
      }
      return quantidade;
    }

    return `Quantidade de números Impares de 1 até ${num}: ${ContarNumerosImpares(num)}`;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function quantidadeNumerosPrimos(num) {
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

      for (let i = 2; i <= limite; i++) {
        if (numerosPrimos(i)) {
          quantidade++;
        }
      }
      return quantidade;
    }

    return `Quantidade de números primos de 1 até ${num}: ${contarNumerosPrimos(num)}`;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  switch (numero) {
    case 1:
      console.log(`Resultado da soma: ${soma(num1, num2)}`);
      break;

    case 2:
      console.log(`Resultado da subtração: ${subtracao(num1, num2)}`);
      break;

    case 3:
      console.log(quantidadeNumerosPares(num1));
      break;

    case 4:
      console.log(quantidadeNumerosImpares(num1));
      break;

    case 5:
      console.log(quantidadeNumerosPrimos(num1));
      break;

    case 6:
      console.log("Saindo...");
      break;

    default:
      console.log("Opção inválida");
      break;
  }
};
