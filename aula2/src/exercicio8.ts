class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    distancia(Point: Point): number {
        let xx = Point.x - this.x;
        let yy = Point.y - this.y;
        return Math.sqrt(xx * xx + yy * yy);
    }
}

class Rectangle {
    x: Point;
    y: Point;
    constructor(x: Point, y: Point) {
        this.x = x;
        this.y = y;
    }
    area(): number {
        let largura = Math.abs(this.y.x - this.x.x);
        let altura = Math.abs(this.y.y - this.x.y);
        return largura * altura;
    }
}

const sd = new Point(3, 5);
const ie = new Point(1, 2);
//observe que o construtor da classe Rectangle
//recebe dois objetos do tipo Point como parâmetro
const r = new Rectangle(ie, sd);
console.log("Área:", r.area());