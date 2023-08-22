class Ponto {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    distancia(ponto: Ponto): number {
        let xx = ponto.x - this.x;
        let yy = ponto.y - this.y;
        return Math.sqrt(xx * xx + yy * yy);
    }
}

const a = new Ponto(3, 5);
const b = new Ponto(1, 2);
console.log("Distancia:", a.distancia(b));
