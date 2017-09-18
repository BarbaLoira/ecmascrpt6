function soma(a, b) {
    a = a || 1;
    b = b || 1;
    return a + b;
}

console.log(soma(), soma(2, 3), soma(0));


function somaTernario(a, b) {
    a = a !== undefined ? a : 1
    b = b !== undefined ? b : 1;
    return a + b;
}
console.log(somaTernario(), somaTernario(2, 3), somaTernario(0));

function somaArg(a, b) {
    a = (0 in arguments) ? a : 1;
    b = (1 in arguments) ? b : 1;
    return a + b;
}

console.log(somaArg(), somaArg(2, 3), somaArg(0));

function somaRecomendado(a = 1, b = 1) {
    return a + b;
}

console.log(somaRecomendado(), somaRecomendado(2, 3), somaRecomendado(0));

function defVal(){
    return 2;
}

function somaDefVal(a = defVal() + 1, b = defVal())
{ return a + b; }

console.log(somaDefVal(), somaDefVal(2, 3), somaDefVal(0));

function click(callback = function(){}){
    callback();
}

click();
click(undefined); // callback = function
//click(null);   callback is not a function