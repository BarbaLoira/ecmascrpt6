var nome = 'marcos';
var nomeCompleto = 'OLa '+ nome + ' !';
console.log(nomeCompleto); // es5

//es6

var novoNome = `
Ola
${nome}!
`;
console.log(novoNome);

function upper(str){ return str.toUpperCase();}

console.log(`1 + 1 = ${ 1 + 1}`);

console.log(`Ei... ${upper("cuidado")}!`);

//tagged template

function tag(string, ...values){

    console.log(string);
    console.log(values);
return 'Outro Valor';
}
var aluno = 'Gui';
var status = 'Aprovado';
console.log(tag `${aluno} esta ${status}`);

function real(strings, ...values){
    console.log(strings);
    console.log(values);
const resultado = [];
values.forEach(function(value,index){

    value = ( typeof value == 'number') ? `R$${value.toFixed(2)}` : value;

    resultado.push(strings[index], value);

});
return resultado.join(''); // transforma array em string

}
var preco = 29.99, parcela = 11;

console.log(real `1x de ${preco} ou 3x de ${parcela}`);

