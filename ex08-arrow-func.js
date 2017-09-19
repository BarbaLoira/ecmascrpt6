var estoque = [
    { preco: 19.90, quantidade: 12, fragil: false },
    { preco: 109.90, quantidade: 112, fragil: true },
    { preco: 90.90, quantidade: 22, fragil: false },
    { preco: 50.90, quantidade: 32, fragil: true },
    { preco: 129.90, quantidade: 42, fragil: true },
    { preco: 89.90, quantidade: 123, fragil: true },
    { preco: 69.90, quantidade: 42, fragil: true },
    { preco: 119.90, quantidade: 23, fragil: false },
    { preco: 79.90, quantidade: 6, fragil: false },
]

console.log(estoque.filter(item => item.preco >= 50).filter(item => item.fragil == true)
    .map(item => item.quantidade).reduce((total, quantidade) => {
        console.log("mais te uma sentenca dentro de chaves");
        return total + quantidade
    }));