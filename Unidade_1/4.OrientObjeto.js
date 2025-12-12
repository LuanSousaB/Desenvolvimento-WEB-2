class Livro {
  constructor(titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
  }

  detalhes() {
    console.log(
      `Livro: ${this.titulo} | Autor: ${this.autor} | Ano: ${this.ano}`
    );
  }
}

console.log("--- Instâncias da Classe Livro ---");


const livroA = new Livro("A Batalha do Apocalipse", "Eduardo Spohr", 2007);
const livroB = new Livro("Dom Casmurro", "Machado de Assis", 1899);

console.log("\nPrimeiro Livro:");

livroA.detalhes();

console.log("\nSegundo Livro:");

livroB.detalhes();

