class Operacao {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    somar() {
        return this.x + this.y;
    };
    subtrair() {
        return this.x - this.y;
    };
    dividir() {
        return this.x / this.y;
    };
}

const op = new Operacao(3, 5);
console.log("Soma:", op.somar());
console.log("Diferença:", op.subtrair());
console.log("Divisão:", op.dividir());