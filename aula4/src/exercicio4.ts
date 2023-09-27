class Carro {
    constructor(private _marca: string, private _modelo:string){}
    public get marca() {
        return this._marca
    }
    public get modelo() {
        return this._modelo
    }
}

const carro = new Carro("VW", "Gol");
console.log(carro);

export default {}