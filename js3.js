var x = parseInt(prompt("Ingrese un numero para X: "));
var y = prompt("Ingrese un numero para Y: ");

console.log("x: "+x);
document.write("x: "+x+"<br>");
console.log("y: "+y);
document.write("y: "+y+"<br>");

var numerox = parseInt(x);
var numeroy = parseFloat(y);

console.log("x: "+numerox);
document.write("x: "+numerox+"<br>");
console.log("y: "+numeroy);
document.write("y: "+numeroy+"<br>"); 

var edad = parseInt(prompt('ingrese su edad: '));
if (edad>=18) {
	alert('Usted es mayor de edad y tiene: '+edad+'años');
	console.log('Usted es mayor de edad y tiene: '+edad+'años');
	document.write('Usted es mayor de edad y tiene: '+edad+'años');
}else {
	alert('Usted es menor de edad y tiene: '+edad+'años');
	console.log('Usted es menor de edad y tiene: '+edad+' años');
	document.write('Usted es menor de edad y tiene: '+edad+' años');
}

var nombre="";
if (nombre=="") {
	alert('No sabemos tu tombre, ingreselo por favor');
	nombre= prompt('Ingreselo por favor');
}else {
	alert('Sabemos tu tombre: '+nombre);
	}