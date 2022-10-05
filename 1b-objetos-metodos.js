console.clear()

const objeto = {
    uno: 1,
    dos: 2,
    tres: 3,
    clave: 'valor'
}

let keys = Object.keys(objeto)
let values = Object.values(objeto)
let entries = Object.entries(objeto)

// console.log(Object.getOwnPropertyNames(objeto))

// console.log(keys)
// console.log(values)
// console.log(entries)

// ITERACIONES ARRAY

const array = [1, 2, 3, 'arreglo']

// FOR
for (let i = 0; i < array.length; i++) {
    // console.log('posicion:', i)
    // console.log('valor:', array[i])
}

// FOR IN
for (let posicion in array) {
    // console.log('posicion:', posicion)
    // console.log('valor:', array[posicion])
}

// FOR OF
for (let valor of array) {
    // console.log('valor:', valor)
}

// ITERACIONES OBJETOS

// FOR IN
for (let key in objeto) {
    // console.log('key:', key)
    // console.log('value:', objeto[key])
}

// FOR OF
for (let key of Object.getOwnPropertyNames(objeto)) {
    // console.log('key:', key)
    // console.log('value:', objeto[key])
}

for (let key of Reflect.ownKeys(objeto)) {
    // console.log('key:', key)
    // console.log('value:', objeto[key])
}

// ITERACION COMPUESTA

// console.log(entries)

// ENTRIES ES UN ARRAY, PRODUCTO DE OBJECT.ENTRIES(OBJETO)
// FOREACH PASA POR CADA POSICION DEL ARRAY ENTRIES
entries.forEach(([clave, valor]) => {
    console.log('clave:', clave)
    console.log('valor:', valor)
    console.log('===============')
})

