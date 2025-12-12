const prompt = require("prompt-sync")({ sigint: true });

const palavraOriginal = prompt(
  "Informe uma palavra para verificar (ex: arara): "
);

const palavra = palavraOriginal.toLowerCase().trim();

if (palavra.length === 0) {
  console.log("Por favor, informe uma palavra válida.");
} else {
  // a) Exibir a quantidade de caracteres
  console.log(`\nA palavra informada é: "${palavraOriginal}"`);
  console.log(`Quantidade de caracteres: ${palavra.length}`);

  // b) Verificar palíndromo
  const palavraInvertida = palavra.split("").reverse().join("");

  console.log(`Palavra invertida: ${palavraInvertida}`);

  if (palavra === palavraInvertida) {
    console.log("\nÉ um palíndromo!");
  } else {
    console.log("\nNão é um palíndromo.");
  }
}
