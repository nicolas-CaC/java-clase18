console.clear();

class Usuarios {

    constructor(primerParametro, segundoParametro, edad) {
        this.nombre = primerParametro
        this.edad = segundoParametro
        this.boletos = 0
    }

    purchaseOneTicket() {
        this.boletos++;
        // console.log(`${this.nombre} ha adquirido un ticket`)
    }

    purchaseMoreTickets(cantidadTickets) {
        this.boletos += cantidadTickets
        // console.log(`${this.nombre} ha adquirido ${cantidadTickets} tickets`)
    }

    printInfo() {
        console.log(this.infoUser)
    }

    get infoUser() {
        return `Nombre del usuario: ${this.nombre}
Edad del usuario: ${this.edad}
Cantidad de boletos adquiridos: ${this.boletos}
=================================`
    }

    set tickets(cantidad) {
        this.boletos = cantidad
    }
}

const usuario1 = new Usuarios('Juan', 32)
const usuario2 = new Usuarios('Susana', 22)

// console.log(usuario1)
// console.log(usuario2)

usuario1.purchaseOneTicket()
// console.log(usuario1)
usuario1.purchaseMoreTickets(4)
// console.log(usuario1)
// usuario2.purchaseOneTicket()
// console.log(usuario2)

usuario1.tickets = 3

usuario1.printInfo()