class Filme {
    titulo: string;
    duracao: number;

    constructor(titulo: string, duracao: number) {
        this.titulo = titulo;
        this.duracao = duracao;
    }
    print(): void {
        console.log(`O filme ${this.titulo} possui ${this.duracao} min.`);
    }
}

const futuro = new Filme("De volta para o futuro", 116);
const matrix = new Filme("Matrix", 136);

futuro.print();
matrix.print();