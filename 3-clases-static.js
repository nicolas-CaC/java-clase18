console.clear();

class Usuarios {

    static id = 0

    constructor(nombre) {
        this.id = Usuarios.getId()
        this.nombre = nombre
    }

    static getId() {
        Usuarios.id++
        return Usuarios.id
    }

    showDates() {
        console.log('Nombre:', this.nombre)
        console.log('ID del usuario:', this.id)
        console.log('========================')
    }
}

const usuario1 = new Usuarios('Juan')
// console.log(usuario1)
usuario1.showDates()
const usuario2 = new Usuarios('Susana')
// console.log(usuario2)
usuario2.showDates()
const sujeto = new Usuarios('florencio')
// console.log(sujeto)
sujeto.showDates()