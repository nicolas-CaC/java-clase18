console.clear()

const arreglo = [1, 2, 3, 'a', 'b', false]
const otroArray = []
const otroArrayMas = []

// FOREACH

arreglo.forEach(valor => {

    if (isNaN(valor)) {
        otroArray.push(valor)
    }

    if (typeof valor === 'number') {
        console.log(valor, 'es un número')
    }

    if (!valor) {
        otroArray.unshift(valor)
        console.log(valor, 'es falso')
    }
})

console.log('otroArray quedó así:', otroArray)

// FIND
console.clear()

const encontrado = arreglo.find(valor => typeof valor === 'string')
console.log('cadenas encontradas:', encontrado)

// FILTER
console.clear()

const encontrados = arreglo.filter(valor => typeof valor === 'string')
console.log('cadenas encontradas:', encontrados)

//MAP
console.clear()

const mapeado = arreglo.map(valor => `Aquí guardé el valor ${valor}`)
console.log('El mapeado:', mapeado)

// SOME
console.clear()

const existe = arreglo.some(valor => valor === 1)
console.log('Existe el valor 2 en el arreglo?', existe)

// EVERY
console.clear()

const todosMenoresAseis = [1, 2, 3, 4, 2, 3, 1, 2, 5].every(nro => nro < 6)
console.log(todosMenoresAseis)

const todosMenoresAtres = [1, 2, 3, 4, 2, 3, 1, 2, 5].every(nro => nro < 3)
console.log(todosMenoresAtres)

// REDUCE
// arreglo.reduce((a,b,c,d) => {},0)
console.clear()

const valor = arreglo.reduce((a, b, c, d) => {
    console.log('valor a - acumulador:', a)
    console.log('valor b - valor actual:', b)
    console.log('valor c - indice:', c)
    console.log('valor d - vector:', d)
    console.log('=================')
    return a
}, 1)

console.log('acumulador de valor:', valor)

console.log('=========================================')

const valor2 = [1, 2, 3, 4, 5].reduce((total, valorActual) => total += valorActual, 100)
console.log('Valor total:', valor2)

console.log('=========================================')

const valor3 = [1, 2, 3, 4, 5].reduce((total, valorActual, indice, array) => {
    total.indice += indice
    total.arrayModif.push(array.map(valor => valor * valorActual))
    return total
}, {
    indice: 0,
    arrayModif: []
})
console.log('valor3 total que retorna un objeto (valor inicial es un objeto  vacío):', valor3)


