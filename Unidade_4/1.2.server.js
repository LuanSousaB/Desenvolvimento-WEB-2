const express = require("express");
const app = express();
const port = 3000;

// Exercício 1 )

app.get("/saudacao/:nome", (req, res) => {
  const nomeRecebido = req.params.nome;
  res.send(`Olá, ${nomeRecebido}!`);
});

app.get("/soma", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  const resultado = a + b;

  res.json({
    numeroA: a,
    numeroB: b,
    soma: resultado,
  });
});

// Exercício 2

app.get("/produto", (req, res) => {
  const idProduto = req.query.id;

  if (idProduto === "1") {
    res.json({
      nome: "Mouse",
      preco: 100,
    });
  } else if (idProduto === "2") {
    res.json({
      nome: "Teclado",
      preco: 200,
    });
  } else {
    res.status(404).send("Produto não encontrado");
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
