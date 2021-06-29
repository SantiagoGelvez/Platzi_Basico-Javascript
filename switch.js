var numero = 1;
switch(numero){
    case 1:
        console.log("Soy uno!");
        break;
    case 10:
        console.log("Soy un diez!");
        break;
    case 100:
        console.log("Soy un cien!");
        break;
    default:
        console.log("No soy nada!");
}

// Reto: Piedra, papel y tijera con switch.

function voyAJugarCon(eleccion){
    var compu = "piedra";
    switch(eleccion){
        case compu:
            console.log("empate");
            break;
        case "piedra":
            compu === "tijera" ? console.log("ganaste") : console.log("perdiste");
            break;
        case "papel":
            compu === "piedra" ? console.log("ganaste") : console.log("perdiste");
            break;
        case "tijera":
            compu === "papel" ? console.log("ganaste") : console.log("perdiste");
            break;
        default:
            console.log("falta programar");
    }
} 

var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";
