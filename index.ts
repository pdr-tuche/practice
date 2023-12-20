import { Pato, Cachorro } from "./classes/Animais";
import { Homem, Mulher } from "./classes/Pessoas";

const printPurple = (text: string) =>
    console.log("\x1b[35m" + text + "\x1b[0m");

printPurple("Animais 🐱");
const pato = new Pato("Donald", 2);
const cachorro = new Cachorro("Rex", 3);
pato.emitirSom();
cachorro.emitirSom();

printPurple("Pessoas 👨");
const homem = new Homem("Samuel", 19);
const mulher = new Mulher("Vitoria", 18);
homem.saudacao();
mulher.dizerSexo();
