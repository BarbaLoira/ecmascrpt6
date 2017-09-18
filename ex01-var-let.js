{{{ var sera = "sera??"; }}}
console.log(sera);

var numero = 1;
{
    let numero = 2;
    console.log('Dentro = ', numero);
}
console.log('Fora = ', numero);

for(var i = 0 ; i < 10 ; i++){}
console.log("valor de i com var  = ", i);

//----for(let x = 0 ; x < 10 ; x++){}
//---console.log("(Dar erro pois estou chamando x fora do seu escopo)valor de x com let  = ", x);

var funcsY = [];
var funcsX = [];

for (var y =0;y < 10 ; y ++){
    funcsY.push(function(){
       return y;
    });
 
}
console.log("usando o array laco var - ",funcsY[2]());
console.log("usando o array laco var - ",funcsY[8]());

for (let x =0;x < 10 ; x ++){
     funcsX.push(function(){
        return x;
    });
}

console.log("usando o array laco let - ",funcsX[2]());
console.log("usando o array laco let - ",funcsX[8]());