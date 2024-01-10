function viajar (destino) {
    if (destino === "Brasil") {
        console.log ("Gire a la derecha");
    } else if (destino === "Argentina") {
        console.log ("Gire a la izquierda");
    } else {
        console.log ("Nos perdimos...")
    }
}

//viajar("Holanda");

function PermisoDeConducir (edad) {
    if ( edad >= 18) {
        console.log("Puede conducir es mayor de edad.")  //Podia usar datos Boleanos como "True o False".
    } else if ( edad < 18) {
        console.log("No puede conducir es menor de edad.")  //Podia usar datos Boleanos como "True o False".
    }
}

PermisoDeConducir(69);