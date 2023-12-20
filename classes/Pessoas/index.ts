abstract class Pessoa {
    protected nome: string;
    protected idade: number;
    protected sexo: string;

    constructor(nome: string, idade: number, sexo: string) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }

    abstract saudacao(): void;
    public dizerSexo(): void {
        if (this.sexo === "M") {
            console.log("Sou do sexo Masculino");
        } else if (this.sexo === "F") {
            console.log("Sou do sexo Feminino");
        } else {
            console.log("Sou do sexo Outro");
        }
    }
}

class Homem extends Pessoa {
    constructor(nome: string, idade: number) {
        super(nome, idade, "M");
    }

    public saudacao(): void {
        console.log(
            `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou do sexo masculino`
        );
    }
}

class Mulher extends Pessoa {
    constructor(nome: string, idade: number) {
        super(nome, idade, "F");
    }

    public saudacao(): void {
        console.log(
            `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou do sexo feminino`
        );
    }
}

export { Homem, Mulher };
