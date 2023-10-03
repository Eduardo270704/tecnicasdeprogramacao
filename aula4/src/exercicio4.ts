class Carro {
    private _marca: string;
    private _modelo: string;
    constructor(_marca: string, _modelo: string) {
        this._marca = _marca;
        this._modelo = _modelo;
    }
    public get marca() {
        return this._marca
    }
    public get modelo() {
        return this._modelo
    }
}

//const carro = new Carro("VW", "Gol");
//console.log(carro);

export default Carro;