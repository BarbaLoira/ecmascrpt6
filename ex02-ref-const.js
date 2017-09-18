const pessoa = {
    nome : "Marcos"
}
pessoa.nome = "Marcos Eduardo";
console.log(pessoa.nome);

// pessoa.nome = {} nao pode mudar a referencia mas sim a propriedade

var a = 2
var b = a

a--;
console.log(a +" " + b);
