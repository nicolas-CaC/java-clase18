console.clear()

class Usuarios {

    static id = 0

    #saldo;

    constructor(nombre) {
        this.id = Usuarios.getId()
        this.nombre = nombre
        this.#saldo = 0
    }

    static getId() {
        Usuarios.id++
        return Usuarios.id
    }

    showDates() {
        console.log('Nombre:', this.nombre)
        console.log('ID del usuario:', this.id)
        console.log('Saldo: $', this.#saldo)
        console.log('========================')
    }

    #printAction(monto) {
        console.log('********************')
        console.log(`Se le ha cargado $${monto} al usuario ${this.nombre}`)
        console.log('********************')
    }

    set saldo(monto) {
        this.#saldo += monto
        this.#printAction(monto)
    }
}

const usuario1 = new Usuarios('Juan')
usuario1.showDates()

const usuario2 = new Usuarios('Susana')
usuario2.showDates()

const usuario3 = new Usuarios('Karen')
usuario3.showDates()

usuario1.saldo = 1000
usuario1.showDates()

