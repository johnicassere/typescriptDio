// Como podemos melhorar o esse código usando TS? 
enum Trabalho {
    Atriz,
    Pedreiro,
}
type Humano = {
nome: string,
idade: number,
profissao: Trabalho
}

let pessoa1: Humano = {
nome: 'pessoa1',
idade: 29,
profissao: Trabalho.Atriz
};

let pessoa2: Humano = {
nome:'Pessoa2',
idade: 19,
profissao: Trabalho.Pedreiro
}

let pessoa3: Humano = {
    nome: "Pessoa3",
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4: Humano = {
    nome: "Pessoa4",
    idade: 19,
    profissao: Trabalho.Pedreiro
}
