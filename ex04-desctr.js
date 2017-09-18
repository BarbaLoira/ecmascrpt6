// destructuring usando obj
var pessoa = { nome: 'Ana', idade: 20 };

var { nome, idade } = pessoa;
console.log(nome, idade);

var { nome: n, idade: i } = pessoa;

console.log(n, i);

var { genero, situacao = 'Ativa' } = pessoa;
console.log(genero, situacao);

pessoa.situacao = 'Nao ativa';
var { genero, situacao = 'Ativa' } = pessoa;
console.log(genero, situacao);

pessoa.endereco = { rua: 'rua', nume: 12 };

var { endereco: { rua, nume, cep } } = pessoa;

console.log(rua, nume, cep);

//TypeError: Cannot match against 'undefined' or 'null'.
// -> nao pode fazer uma procura em um obj de um obj que nao exste
//var { conta: { numer, agencia } } = pessoa;
//console.log(numero,agencia);

function rand({ min = 0, max = 10000 }) {
    var value = Math.random() * (max - min);
    return Math.floor(value) + min;
}
console.log(rand({ max: 50, min: 40 }));
console.log(rand({ min: 955 }));
console.log(rand({}));
//passando undefined vai gerar error
//console.log(rand());


// destructuring usando array

var [a] = [10];
console.log(a);

var [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

var [, [, nota]] = [[7, 8, 8], [9, 6, 8]];
console.log(nota);

function randArray([min = 0, max = 1000]) {
    if (min > max)[min, max] = [max, min];
    var value = Math.random() * (max - min);
    return Math.floor(value) + min;
}
console.log(randArray([50, 40]));
console.log(randArray([992]));
console.log(randArray([, 10]));
console.log(rand([]));
// ocorrera erro pois nao existe array
//console.log(rand());


