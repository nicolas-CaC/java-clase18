console.clear()

class Madera {

    constructor() {
        this.material = 'madera'
        this.uniones = 'clavos'
    }

    getMaterial() {
        return `Este mueble está hecho de ${this.material}`
    }

    getUniones() {
        console.log('método getUniones (de Madera):', this.uniones)
    }
}

class Mesa extends Madera {

    constructor() {
        super()
        this.patas = 4
        this.superficies = 1
    }

    getDetails() {
        console.log(this.getMaterial())
        console.log(`Este mueble de ${this.material} tiene ${this.patas} patas,
unidas con ${this.uniones} a ${this.superficies} superficie/s`)
    }

    getSuperficie() {
        super.getUniones()
    }



}

// class Silla extends Madera {
//     constructor() {
//         super()
//         this.respaldo = true
//         this.patas = 4
//         this.superficies = 1
//     }
// }

const compra1 = new Mesa()
compra1.getDetails()
compra1.getSuperficie()

// const compra2 = new Silla()
// compra2.getMaterial