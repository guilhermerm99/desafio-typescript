// DESAFIO RESOLVIDO
interface pessoa {
    nome: string;
    idade: number;
    profissao: Profissao;
}

enum Profissao {
    Atriz,
    Padeiro
}

const pessoa1: pessoa = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz
}
const pessoa2: pessoa = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissao.Padeiro
}
const pessoa3: pessoa = {
    nome: 'Laura',
    idade: 32,
    profissao: Profissao.Atriz
}
const pessoa4: pessoa = {
    nome: 'Carlos',
    idade: 19,
    profissao: Profissao.Padeiro
}