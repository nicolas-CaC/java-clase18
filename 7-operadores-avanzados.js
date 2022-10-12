console.clear()

let a = 3
let b = 2
let c
let d

let z = 0

// OPERADORES UNARIOS
z++
--z
console.log(z)

// OPERADORES BINARIOS
// 4 + 8
// 2 * b

// OPERADORES TERNARIOS y Operador AND (&&)
// if (a === 1 && b === 2) c = 3
// else d = 4
a === 1 && b === 2
    ? c = 3
    : d = 4

a === 1
    ? console.log('a es igual a uno')
    : console.log('a no es igual a uno')

console.log('valor de c:', c)
console.log('valor de d:', d)

// OPERADOR OR

x = c || 5

console.log('valor a:', a)
console.log('valor b:', b)
console.log('valor c:', c)
console.log('valor d:', d)
console.log('valor x:', x)

console.clear()

// BOOLEANOS - TODOS LOS TIPOS

let val1 = 1
let val2 = 0

let val3 = ' '
let val4 = ''

console.log('valor val1 booleano:', Boolean(val1))
console.log('valor val2 booleano:', Boolean(val2))
console.log('valor val3 booleano:', Boolean(val3))
console.log('valor val4 booleano:', Boolean(val4))

console.log('==============================')

let val5 = undefined
let val6 = null
let val7 = NaN
let val8 = []
let val9 = {}

console.log('valor val5 booleano:', Boolean(val5))
console.log('valor val6 booleano:', Boolean(val6))
console.log('valor val7 booleano:', Boolean(val7))
console.log('valor val8 booleano:', Boolean(val8))
console.log('valor val9 booleano:', Boolean(val9))

console.log('==============================')

// NAN = Not A Number

let nro = 2
let letra = 'a'

console.log('valor nro no es un número:', isNaN(nro))
console.log('valor letra no es un número:', isNaN(letra))

console.log('==============================')

// NULLISH COALESCING
console.clear()

const indefinido = undefined
const nulo = null
const nan = NaN
const falso = false
const numerito = 5

console.log(indefinido)
console.log(nulo)
console.log(nan)

console.log(typeof nan)

let operadorOr = indefinido || nulo || nan || falso || numerito
let nullish = indefinido ?? nulo ?? nan ?? falso ?? numerito

console.log('valor operador Or:', operadorOr)
console.log('valor operador nullish:', nullish)