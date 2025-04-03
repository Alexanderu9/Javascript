console.log(
    "\\\\\\\\\\\\\\\\\\\\\\\\\\. \n Digite un Numero \n Para comprobar se é Impar ou não \n \\\\\\\\\\\\\\\\\\\\\\\\\\."
  );
  let num = parseInt(prompt("Digite um numero"));


  //função para saver se o numero é Impar ou não
  function numerosInteiros(num) {
    if (num % 2 === 0) return true;
    else return false;
  }
  const resultados = numerosInteiros(num);
  
  //função para retornar o valor
 function numerosP() {
if (resultados)
return `O número ${num} é par`;
return `O número ${num} é impar`;
 }

 const NumerosInfo = numerosP(resultados);
 console.log(NumerosInfo);

 //função para contar os numeros Impares do 1 ao numero digitado

 function ContarNumerosImpares(limite) {
let quantidade= 0;
let i= 1;

while (i <= limite) {
    quantidade++;
    i += 2;
}
return quantidade;

 }

 console.log(
    `Quantidade de números Impares de 1 até ${num}: ${ContarNumerosImpares(num)}`)