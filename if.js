var edad = 18;

if (edad === 18) {
    console.log("Puedes votar, será tu primera votación");
}
else if (edad > 18) {
    console.log("Puedes votar de nuevo");
}
else{
    console.log("Aun no puedes votar");
}

//Operador ternario

condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? "Si soy un uno" : "No, no soy uno";

// RETO: Piedra, papel y tijera.

function juegoCon(elegido){
    var rival = "papel";
    if(elegido === rival){
        console.log("empate");
    }
    else if ((elegido === "piedra" && rival === "papel") || 
             (elegido === "papel" && rival === "tijera") ||
             (elegido === "tijera" && rival === "piedra")){
        console.log("perdiste");
    }
    else{
        console.log("ganaste");
    }
}

var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";
