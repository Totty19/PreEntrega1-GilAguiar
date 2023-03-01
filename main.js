// CALCULAR EL PROMEDIO!

let nombre = prompt("Ingrese su nombre");
let cont = 0;
let J;
let notas = 0;
let promedio;
while (J != "no") {
    let nota = parseInt(prompt("ingrese su nota"));
    cont = cont + 1; 
    notas = notas + nota;
J = prompt("Desea ingresar otra nota?" + " || Escriba -no- para finalizar ");
}
promedio = notas/cont;
alert("el promedio de " + nombre + " es de " + promedio);


 // CALCULAR EL VALOR FINAL DE UN PRODUCTO SELECCIONADO EN FUNCION DE IMPUESTOS Y DESCUENTOS 

function SaludarYproductos() {
    alert("¡Bienvenido al kiosko el pela 25hs!")
    alert ("Nuestros productos:\nmanteca: $280\nleche: $350\npan: $200gr\nfiambres: $1200kl");
}

console.log(SaludarYproductos())

let producto = prompt("¿que producto va a llevar?");

let manteca = 280;
let leche = 350;
let pan = 200;
let fiambres = 1200;

let mantecaDesc = ((10 / 100) * manteca) - manteca;
let lecheDesc = ((10 / 100) * leche) - leche;
let panDesc = ((10 / 100) * pan) - pan;
let fiambresDesc = ((10 / 100) * fiambres) - fiambres;

let mantecaIva =  1.21 * mantecaDesc;
let lecheIva =  1.21 * lecheDesc;
let panIva =  1.21 * panDesc;
let fiambresIva =  1.21 * fiambresDesc;

if (producto == "manteca") {
    alert("su producto de tiene valor de " + manteca + ", pagando en efectivo su producto queda en $" + mantecaDesc + " mas IVA su producto queda en $" + mantecaIva)
}else if (producto == "leche"){
    alert("su producto de tiene valor de " + leche + ", pagando en efectivo su producto queda en $" + lecheDesc + " mas IVA su producto queda en $" + lecheIva)
}else if (producto == "pan"){
    alert("su producto de tiene valor de " + pan + ", pagando en efectivo su producto queda en $" + panDesc + " mas IVA su producto queda en $" + panIva)
}else if (producto == "fiambres"){
    alert("su producto de tiene valor de " + fiambres + ", pagando en efectivo su producto queda en $" + fiambresDesc + " mas IVA su producto queda en $" + fiambresIva)
}else {
    alert("lo sentimos no tenemos ese procuto :(")
};

