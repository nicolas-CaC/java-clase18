console.clear();

const miObjeto = {
    numero: 1,
    cadena: 'estrinn',
    booleano: true,
    array: [0, 1],
    otroObjeto: { a: 1, b: 2 },
    funcion: function () { console.log('Yo salí de una función') },
    otraFuncion: function () { return 'soy una cadena devuelta' },
    funcionConParametros: function (a, b) { console.log('Suma:', a + b) }
}

// miObjeto.funcion()
const resul = miObjeto.otraFuncion()
// console.log(resul)
miObjeto.funcionConParametros(2, 3)