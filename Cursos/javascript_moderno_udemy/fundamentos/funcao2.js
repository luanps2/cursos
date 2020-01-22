// Armazenando uma função em uma variavel
const imprimirSoma = function(a, b){
     console.log(a + b)
}
imprimirSoma(2,3)

// Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2,3))

// retorno  implícito

const subtracao = (a, b) => a - b // Função arrow com return após "=>"
console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)
imprimir2('TESTE')//Chama o console.log pela função