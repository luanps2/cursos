const escola = "Cod3r"

// console.log(escola.charAt(0))
// console.log(escola.charAt(1))
// console.log(escola.charAt(2))
// console.log(escola.charAt(3))
// console.log(escola.charAt(4))

console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))//posição da letra

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('Escola'.concat(escola).concat("!"))

console.log(escola.replace(3, 'e')) //substituir Cod3r por Coder (3 por e)
console.log(escola.replace(/\w/g, 'e')) //Rejex

console.log('Ana,Maria,Pedro'.split(','))



