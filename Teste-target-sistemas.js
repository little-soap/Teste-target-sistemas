// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar 
// onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.


function verificarSequencia(num) {
  let a = 0;
  let b = 1;
  let c;

  while (b < num) {
    c = a + b;
    a = b;
    b = c;
  }

  if (b === num) {
    console.log(num + " pertence à sequência de Fibonacci.");
  } else {
    console.log(num + " não pertence à sequência de Fibonacci.");
  }
}

// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

//OBS: não encontrei o JSON/XML no email, então populei um vetor e fiz o cálculo a partir dele. Sei que a lógica pode ficar limitada por conta da falta do tratamento dos dados
// devido a não saber como está estruturado o relatório.

function calculaFaturamentos{
  const faturamentoDiario = [1500, 3000, 2500, 0, 10000, 8000, 0, 5000, 6000, 4000, 7000, 9000, 12000, 0, 3000, 6000, 2000, 4500, 5500, 3500, 0, 8000, 7000, 6000, 1000, 4000, 5000];

  // Filtra os dias com faturamento não nulo (0)
  const diasComFaturamento = faturamentoDiario.filter(valor => valor > 0);

  // Calcula o menor valor de faturamento diário
  const menorValor = Math.min(...faturamentoDiario);

  // Calcula o maior valor de faturamento diário
  const maiorValor = Math.max(...faturamentoDiario);

  // Calcula a média de faturamento diário, considerando apenas os dias com faturamento
  const mediaMensal = diasComFaturamento.reduce((acc, curr) => acc + curr, 0) / diasComFaturamento.length;

  // Filtra os dias em que o faturamento diário foi superior à média mensal
  const diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > mediaMensal);

  console.log(`Menor valor: R$ ${menorValor}`);
  console.log(`Maior valor: R$ ${maiorValor}`);
  console.log(`Número de dias acima da média: ${diasAcimaDaMedia.length}`);

}


// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

function faturamentoMensal(){
  const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };
  
  const total = Object.values(faturamento).reduce((acc, curr) => acc + curr, 0);
  
  for (let estado in faturamento) {
    const percentual = ((faturamento[estado] / total) * 100).toFixed(2);
    console.log(`${estado} - ${percentual}%`);
  }
}

// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;


function inverteString(str) {
  let novaString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    novaString += str[i];
  }
  return novaString;
}
