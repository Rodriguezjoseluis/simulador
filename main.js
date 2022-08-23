



const dolar = 150;
const euro = 136;
const yenes = 1.01;


while (isNaN(divisa) || isNaN(monto)) {

let divisa =  prompt("Seleccione divisa n 1 - DOLARES  n 2 - EUROS - n 3 YENES");
let monto = parseFloat(prompt("ingrese monto deseado"));
}

function calcular_conversion(monto){

if (divisa =="1"){
      let resultado= dolar * monto
        console.log( "su conversion es de $",resultado)
}
if (divisa =="2"){
    resultado= euro * monto
    console.log( "su conversion es de $",resultado)
}
if (divisa =="3"){
    resultado= yenes * monto
    console.log( "su conversion es de $",resultado)
}
    
if (divisa >=4){
   
    alert ("resultado no valido")

}

}

