const valores = [7.7, 8.8, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)//quantidade de elementos do array

valores.push({id: 3}, false, null, 'teste')//insere itens no array
console.log(valores)

console.log(valores.pop())//remove o ultimo elemento do array inserido
delete valores[0]//deleta o elemento na posição indicada
console.log(valores)

console.log(typeof valores)