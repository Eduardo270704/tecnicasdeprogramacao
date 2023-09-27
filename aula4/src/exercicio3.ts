class Carro {
    private _marca: string = "";
    private _modelo: string = "";
    public set marca(marca: string) {
        this._marca = marca
    }
    public set modelo(modelo: string) {
        this._modelo = modelo
    }
    public get marca() {
        return this._marca
    }
    public get modelo() {
        return this._modelo
    }
}

const carro = new Carro();
carro.marca = "VW";
carro.modelo = "Gol";
console.log(carro);

export default {}