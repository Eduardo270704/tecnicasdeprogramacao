class Texto extends String {
    primeira(): string {
        return this.charAt(0);
    }
    ultima(): string {
        return this.charAt(this.length - 1);
    }
}

const nome = new Texto("Boa noite")
console.log("Quantidade:", nome.length);
console.log("Primeira:", nome.primeira());
console.log("Primeira:", nome.ultima());
console.log("Primeira:", nome.toLocaleLowerCase());