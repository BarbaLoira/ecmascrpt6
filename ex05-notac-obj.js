var nome = 'Bia', anoNascimento = 1981;

function idade() {
    return new Date().getFullYear() - this.anoNascimento;
}

var pessoa = {
    nome,
    anoNascimento,
    idade,
    toString() {
        return `${this.nome} tem ${this.idade()} anos`;
    }
}
pessoa.anoNascimento= 1993;
console.log(pessoa.toString());


var nomeAttr = 'nome';
var valorAttr = 'Davi';
var dinamico = {
    [nomeAttr]: valorAttr
}
console.log(dinamico);

// get e set

var sequence = {
    __id: 1,
    get id() { return this.__id++ },
    set id(id) { this.__id = id; }

}
console.log(sequence.id, sequence.id);

sequence.id = 100;
console.log(sequence.id, sequence.id);

// heranca

var avo = { a: `a` }
var pai = { __proto__: avo, b: 'b' }
var filho = { __proto__: pai, c: 'c' }

console.log(filho.a,filho.b,filho.c);

var mae = { corCabelo: 'Castanho'};
var filha = {};
Object.setPrototypeOf(filha,mae);
console.log(filha.corCabelo);

var pai = {
    func() { return 'Pai';}
}
var filho = {
    func () { return `${super.func()} + filho`;}
 }

 Object.setPrototypeOf(filho,pai);
console.log(filho.func());



