interface Animal {
    emitirSom(): void;
    getNome(): string;
    setNome(nome: string): void;
    getIdade(): number;
    setIdade(idade: number): void;
}

class Pato implements Animal {
    private nome;
    private idade;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    public emitirSom(): void {
        console.log(`Quack Quack 🦆`);
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public setIdade(idade: number): void {
        this.idade = idade;
    }
}

class Cachorro implements Animal {
    private nome;
    private idade;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    emitirSom() {
        console.log(`Au Au 🐶`);
    }

    getNome(): string {
        return this.nome;
    }
    setNome(nome: string): void {
        this.nome = nome;
    }
    getIdade(): number {
        return this.idade;
    }
    setIdade(idade: number): void {
        this.idade = idade;
    }
}

export { Pato, Cachorro };
