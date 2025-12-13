const inputId = document.getElementById("productId");
const botaoBusca = document.getElementById("searchButton");
const divResultado = document.getElementById("resultado");

const dbProdutos = {
  101: {
    nome: "Notebook Avançado X1",
    preco: "R$ 4.500,00",
    descricao: "Processador i7, 16GB RAM.",
    disponivel: true,
    imagem: "https://via.placeholder.com/150/0000FF/FFFFFF?text=NB+101",
  },
  102: {
    nome: "Mouse Gamer Óptico Z",
    preco: "R$ 150,00",
    descricao: "7 botões programáveis, 12000 DPI.",
    disponivel: true,
    imagem: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Mouse+102",
  },
  103: {
    nome: "Teclado Mecânico Compacto",
    preco: "R$ 399,00",
    descricao: "Switches Azuis, Padrão ABNT.",
    disponivel: false,
    imagem: "https://via.placeholder.com/150/00FF00/FFFFFF?text=Teclado+103",
  },
};

function buscarProduto() {
  const id = inputId.value.trim();

  divResultado.innerHTML = "Buscando localmente...";

  if (!id) {
    divResultado.innerHTML =
      '<p style="color: red;">Por favor, digite o ID do Produto.</p>';
    return;
  }

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (dbProdutos[id]) {
        resolve(dbProdutos[id]);
      } else {
        reject(
          new Error("Produto não encontrado! IDs válidos: 101, 102, 103.")
        );
      }
    }, 500);
  })
    .then((data) => {
      exibirResultadoNoDOM(data);
    })
    .catch((error) => {
      tratarErroNoDOM(error.message);
    });
}

function exibirResultadoNoDOM(productData) {
  const status = productData.disponivel ? "🟢 Sim" : "🔴 Não";

  const htmlContent = `
        <div class="product-info">
            <h2>${productData.nome}</h2>
            <img src="${productData.imagem}" alt="Imagem do Produto" style="max-width: 150px; display: block; margin: 10px 0;">
            <p><strong>Preço:</strong> ${productData.preco}</p>
            <p><strong>Descrição:</strong> ${productData.descricao}</p>
            <p><strong>Disponível:</strong> ${status}</p>
        </div>
    `;

  divResultado.innerHTML = htmlContent;
}

function tratarErroNoDOM(mensagem) {
  divResultado.innerHTML = `<p style="color: red;">ERRO: ${mensagem}</p>`;
}

botaoBusca.addEventListener("click", buscarProduto);

inputId.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    buscarProduto();
  }
});
