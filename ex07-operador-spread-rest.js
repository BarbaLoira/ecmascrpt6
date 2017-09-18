

function mediaAluno(p1,p2 , p3){
    return ((p1+p2+p3) / 3).toFixed(2);
}

var notasAluno = [7.7,7.3,6.1,0.0];

console.log(mediaAluno.apply(null,notasAluno));// ecma5
console.log(mediaAluno(...notasAluno)); // ecma6 usando spread

var notasAlunos = [ 6.8, 7.9, 8.2 ];
var turmaES5 = notasAlunos.concat([6.7,8.9,9.1]); // es5
var turmaES6 = [...notasAlunos, 6.7, 8.9, 9.1]; // spread es6

console.log(turmaES5);
console.log(turmaES6);

//----------------------- rest
function media(...notas){
    var total = notas.reduce((soma,nota) => soma + nota);
    return total / notas.length;
}
console.log(media(7.3,7.7,6.0)); // asdasdasd