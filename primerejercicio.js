let cantidad = Number(prompt('Ingrese la cantidad de números que quiere sumar:'))
let total = 0

function suma(valor) {
    total += valor
}

for (let i = 0; i <= cantidad - 1; i++) {
    let valor = Number(prompt('Ingrese un número'))
    suma(valor)
}

console.log('el total de los nros ingresados es: ', total)
