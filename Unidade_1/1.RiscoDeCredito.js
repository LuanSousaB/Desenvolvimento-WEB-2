const prompt = require("prompt-sync")({ sigint: true });

function avaliarRiscoDeCredito(rendaMensal, dividaAtual) {
  const renda = parseFloat(rendaMensal);
  const divida = parseFloat(dividaAtual);

  if (renda <= 0 || isNaN(renda) || isNaN(divida)) {
    return "Dados inválidos. Não foi possível calcular a Taxa de Endividamento.";
  }

  const TE = (divida / renda) * 100;

  let classificacao;
  if (TE < 10) {
    classificacao = "Risco Baixo";
  } else if (TE >= 10 && TE < 30) {
    classificacao = "Risco Moderado";
  } else {
    classificacao = "Risco Alto";
  }

  return `
        --- Avaliação de Risco ---
        Renda Mensal: R$ ${renda.toFixed(2)}
        Dívida Atual: R$ ${divida.toFixed(2)}
        Taxa de Endividamento (TE): ${TE.toFixed(2)}%
        Classificação de Risco: ${classificacao}
    `;
}

const rendaInput = prompt("Informe sua Renda Mensal (ex: 3500): ");
const dividaInput = prompt("Informe sua Dívida Atual (ex: 800): ");

const resultado = avaliarRiscoDeCredito(rendaInput, dividaInput);

console.log(resultado);
