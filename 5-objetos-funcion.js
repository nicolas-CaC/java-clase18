console.clear()

function Usuario(nombre, edad, saldo) {

    this.nombre = nombre
    this.edad = edad
    this.inscripcion = new Date().toLocaleDateString()
    this.keywords = ['perro', 'raza', 'pure']
    this.saldos = {
        disponibles: saldo,
        gasto: 0
    }

    this.info = function () {
        console.log(`Ha gastado $${this.saldos.gasto}.\nTiene un monto de #${this.saldos.disponibles} disponible.\n====================`)
    }

    this.consumoMil = function () {
        this.saldos.disponibles -= 1000
        this.saldos.gasto += 1000
        this.info()
    }

    this.consumoDosMil = function () {
        this.saldos.disponibles -= 2000
        this.saldos.gasto += 2000
        this.info()
    }

    this.consumoTresMil = function () {

        if (this.saldos.disponibles >= 3000) {
            this.saldos.disponibles -= 3000
            this.saldos.gasto += 3000
            this.info()
        } else {
            console.log('no tiene el saldo disponible para realizar esta operación')
        }
    }
}

let usuario1 = new Usuario('Pepe', 22, 10000)

usuario1.consumoMil()
usuario1.consumoDosMil()
usuario1.consumoTresMil()


