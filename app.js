


alert("Bienvenidos a su primer batalla Pokemon")


let jugador1 = prompt ("Ingresa el nombre del primer jugador")

let jugador2 = prompt ("Ingresa el nombre del segundo jugador")


let pokemon1 = prompt (jugador1 + " Selecciona tu Pokemon inicial: Pikachu / Bulbasaur / Charmander / Squirtle").toLowerCase()
let pokemon2 = prompt (jugador2 + " Selecciona tu Pokemon inicial: Pikachu / Bulbasaur / Charmander / Squirtle").toLowerCase()


let puntosVidaply1 = 1000
let puntosVidaply2 = 1000


    let pikachu = 500
    let bulbasaur = 350
    let charmander = 400
    let squirtle = 450


function batalla1() {
    switch(pokemon1) {
        case "pikachu":
            atkPkm1 = (puntosVidaply2 - pikachu)
        alert("Jugador " + jugador1 + " Tus puntos de vida se redujeron a " + atkPkm1)
        break
    
        case "bulbasaur":
            atkPkm1 = (puntosVidaply2 - bulbasaur)
            alert("Jugador " + jugador1 + " Tus puntos de vida se redujeron a " + atkPkm1)
        break

        case "charmander":
            atkPkm1 = (puntosVidaply2 - charmander)
            alert("Jugador " + jugador1 + " Tus puntos de vida se redujeron a " + atkPkm1)
        break

        case "squirtle": 
            atkPkm1 = (puntosVidaply2 - squirtle)
            alert("Jugador " + jugador1 + " Tus puntos de vida se redujeron a " + atkPkm1)
        break

        default:
        alert("Jugador " + jugador1 +" Este no es tu Pokemón, inténtalo de nuevo")
        batalla1()

    }
}

function batalla2() {
    switch(pokemon2) {
        case "pikachu":
        atkPkm2 = (puntosVidaply1 - pikachu)
        alert("Jugador " + jugador2 + " Tus puntos de vida se redujeron a " + atkPkm2)
        break

        case "bulbasaur":
            atkPkm2 = (puntosVidaply1 - bulbasaur)
            alert("Jugador " + jugador2 + " Tus puntos de vida se redujeron a " + atkPkm2)
        break

        case "charmander":
            atkPkm2 = (puntosVidaply1 - charmander)
            alert("Jugador " + jugador2 + " Tus puntos de vida se redujeron a " + atkPkm2)
        break

        case "squirtle": 
            atkPkm2 = (puntosVidaply1 - squirtle)
            alert("Jugador " + jugador2 + " Tus puntos de vida se redujeron a " + atkPkm2)
        break

        default:
        alert("Jugador " + jugador2 +" Este no es tu Pokemón, inténtalo de nuevo")
        batalla2()

    }
}
alert("Escogieron a sus compañeros! Tendrán su primera batalla a continuación!")

batalla1()
batalla2()

 if(atkPkm1 < atkPkm2) {
    alert("El ganador de esta batalla es " + jugador2+ "!")
 }
 if(atkPkm1 > atkPkm2) {
    alert("El ganador de esta batalla es " + jugador1 + "!")
 }

 if(atkPkm2 == atkPkm1) {
 alert("Los pokemon pelearon duro pero están igualados!")
 alert("Es un empate!")
 }

 /*

 function nuevoJuego() {
    jugar = prompt("¿Jugar otra vez? SI - NO").toLowerCase()

    if(jugar = "si")   {
     let pokemon1 = prompt (jugador1 + " Selecciona tu Pokemon inicial: Pikachu / Bulbasaur / Charmander / Squirtle").toLowerCase()
     let pokemon2 = prompt (jugador2 + " Selecciona tu Pokemon inicial: Pikachu / Bulbasaur / Charmander / Squirtle").toLowerCase()

    batalla1()
    batalla2()
        if(atkPkm1 < atkPkm2) {
        alert("El ganador de esta batalla es " + jugador2+ "!")
        }
        if(atkPkm1 > atkPkm2) {
        alert("El ganador de esta batalla es " + jugador1 + "!")
        }

        if(atkPkm2 == atkPkm1) {
        alert("Los pokemon pelearon duro pero están igualados!")
        alert("Es un empate!")
        }
    }

  if (jugar = "no") {
         alert("Adios entrenadores!")
 }
 if (jugar != si || no) {
    alert("Ingrese una opción válida")
 }
}

 
nuevoJuego()*/