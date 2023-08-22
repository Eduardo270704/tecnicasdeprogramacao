class Carro {
    marca: string = "";
    modelo: string = "";
    setMarca(marca: string): void {
        this.marca = marca;
    }
    setModelo(modelo: string): void {
        this.modelo = modelo;
    }
    print(): void {
        console.log(`${this.marca} ${this.modelo}`);
    }
}

const gol = new Carro();
gol.marca = "Vw";
gol.modelo = "Gol";

const uno = new Carro();
uno.marca = "Fiat";
uno.modelo = "Uno";

gol.print();
uno.print();