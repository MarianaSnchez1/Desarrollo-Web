/*
//Que pida el nombre
alert(`Bienvenido`);
var nombre = prompt(`Ingrese el nombre`);
alert(`El nombre que puso fue: ${nombre}`)

//Revisar si el numero es impar
var numero = prompt(`Eliga un numero`);
var result;
if(numero%2 ==0){
    result = 'par';
}else{
    result = 'impar';
}
alert(`El numero es: ${result}`);

//calc factorial de un número
var num = prompt(`Eliga un numero (factorial)`);
var result2 = 1;
while(num>=1){
    result2 = result2 * num;
    num = num - 1;
}
alert(`El resultado del numero facotrial es: ${result2}`);
*//*
var num2 = prompt(`Eliga un numero (factorial2)`);
function fac(n){
    let x = n;
        for (let i = (n+1); 1>0; i--) {
        x = x*i
        }
    return x;
}
alert(`El resultado del numero facotrial es: ${fac(num2)}`);
*/
function calcularMayor(){
     let x1 = document.getElementById('num1').value;
     let x2 = document.getElementById('num2').value;
    if (x1>x2){
        alert(`EL numero mayor es: ${x1}`);
    } else if (x1<x2){
        alert(`EL numero mayor es: ${x2}`);
    }else{
        alert(`Los numeros son iguales`);
    }
}
