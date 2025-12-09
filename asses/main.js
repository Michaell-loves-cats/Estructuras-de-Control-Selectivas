/**
 *  1 EJERCICIO
 */

//Yuliana

let personas = prompt("Ingrese el número de personas:");

personas = Number(personas);

if (personas < 0) {
    alert("Ingrese un número válido");
} else {
    let costo = 0;

    if (personas <= 200) {
        costo = personas * 25000;
    } else if (personas <= 300) {
        costo = personas * 18500;
    } else {
        costo = personas * 16000;
    }

    alert("El presupuesto es: $" + costo);
}


/**
 * 2 EJERCICIO
 */
let precio1 = Number(prompt("Ingrese el precio del traje:"));

if (precio1 < 0) {
    alert("Ingrese un precio válido");
} else {
    let descuento;
    let porcentaje;

    if (precio1 > 125000) {
        porcentaje = 0.35;
    } else {
        porcentaje = 0.10;
    }

    descuento = precio1 * porcentaje;
    let total = precio1 - descuento;

    alert(
        "Descuento: $" + descuento +
        "\nPorcentaje: " + (porcentaje * 100) + " %" +
        "\nTotal a pagar: $" + total
    );
}

/**
 * 3 EJERCICIO
 */
let cantidad1 = Number(prompt("Ingrese el número de hamburguesas:"));
let tipo1 = prompt("Tipo de hamburguesa (sencilla, doble, triple):");
let pago = prompt("Tipo de pago (tarjeta o efectivo):");

let precioUnit1 = 0;

if (tipo1 === "sencilla") {
    precioUnit1 = 20000;
} else if (tipo1 === "doble") {
    precioUnit1 = 25000;
} else if (tipo1 === "triple") {
    precioUnit1 = 28000;
} else {
    alert("Tipo de hamburguesa inválido");
}

let totalSinCargo = precioUnit1 * cantidad1;

let cargo = 0;
if (pago === "tarjeta") {
    cargo = totalSinCargo * 0.07;
}

let total1 = totalSinCargo + cargo;
alert(
    "Precio Unit.: $" + precioUnit1 +
    "\nCantidad: " + cantidad1 +
    "\nTipo de pago: " + pago +
    "\nTotal sin cargo: $" + totalSinCargo +
    "\nEl cargo es: $" + cargo +
    "\nTotal a pagar es: $" + total1
);

/**
 * 4 EJERCICIO
 */
let peso = Number(prompt("Ingrese el peso del paquete (kg):"));
let zona = Number(prompt("Ingrese la zona (1 a 5):"));

if (peso > 85) {
    alert("El paquete con peso de " + peso + " kg excede el peso permitido");
} else {
    
    let costoGramo = 0;

    if (zona === 1) {
        costoGramo = 210;
    } else if (zona === 2) {
        costoGramo = 180;
    } else if (zona === 3) {
        costoGramo = 220;
    } else if (zona === 4) {
        costoGramo = 340;
    } else if (zona === 5) {
        costoGramo = 370;
    } else {
        alert("¡Zona no válida!");
    }

    let valor = peso * costoGramo;

    alert("Valor: $ " + valor);
}

/**
 * 5 EJERCICIO
 */
let tipo2 = prompt("Tipo de panela (P1 o P2):");
let precio2 = Number(prompt("Precio base por kilo:"));
let kilos = Number(prompt("Kilos de producción:"));

let ajuste = 0;

if (tipo2 === "P1") {
    if (tamaño === 1) {
        ajuste = 1200;
    } else {
        ajuste = 830;
    }
}

else if (tipo2 === "P2") {
    if (tamaño === 1) {
        ajuste = -540;
    } else {
        ajuste = -350;
    }
} else {
    alert("Tipo inválido");
}

let precioFinal = precio2 + ajuste;
let ganancia = precioFinal * kilos;

alert("La ganancia es: $ " + ganancia);



/**
 * 6 EJERCICIO
 */
let cantidad2 = Number(prompt("Cantidad de audífonos:"));

let precioUnit2;

if (cantidad2 >= 1000) {
    precioUnit2 = 49850;
} else {
    precioUnit2 = 71290;
}

let total2 = cantidad2 * precioUnit2;        

alert("Total a pagar es: $ " + total2);

//Michaell

/**
 * 7 EJERCICIO
 */

let horas = Number(prompt("Horas laboradas:"));
let tarifa = Number(prompt("Tarifa por hora:"));

let salario;

if (horas <= 40) {
    salario = horas * tarifa;
} else {
    let horasExtra = horas - 40;
    let tarifaExtra = tarifa * 1.5;
    salario = (40 * tarifa) + (horasExtra * tarifaExtra);
}

alert("Salario del trabajador es: $ " + salario);

/**
 * 8 EJERCICIO
 */

let num1 = Number(prompt("Ingrese un número: "));
let num2 = Number(prompt("Ingrese otro número: "));
let num3 = Number(prompt("Ingrese un tercer número: "));
let mayor;

if (num1 >= num2 && num1 >= num3) {
    mayor = num1;
} else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;
} else {
    mayor = num3;
}
alert("El número mayor es: " + mayor);

/**
 * 9 EJERCICIO
 */

let tipo = prompt("Ingrese el tipo de la llanta (Doble propósito, Sport o nieve):");
let grosor = Number(prompt("Ingrese el grosor de la llanta:"));
let diametro = Number(prompt("Ingrese el diámetro de la llanta:"));
let marca = prompt("Ingrese la marca de la llanta:");

if (diametro > 1.4 ) {
    alert("La rueda es para un vehículo grande");
} else if (diametro <= 1.4 && diametro > 0.8) {
    alert("La rueda es para un vehículo mediano");
} else {
    alert("La rueda es para un vehículo pequeño");
}

if (diametro > 1.4 && grosor < 0.4) {
    alert("El grosor para esta rueda es inferior al recomendado");
} else if (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25) {
    alert("El grosor para esta rueda es inferior al recomendado");
} else {
    alert("La rueda cumple con las especificaciones");
}

/**
 * 10 EJERCICIO
 */

let num0 = Number(prompt("Ingrese un número: "));

if (numero % 2 == 0) {
    System.out.println("El número " + numero + " es par.");
} else {
    System.out.println("El número " + numero + " es impar.");
}

/**
 * 11 EJERCICIO
 */

let edad = Number(prompt("Ingrese la edad del deportista:"));
let pesoD = Number(prompt("Ingrese el peso corporal del deportista (kg):"));
let altura = Number(prompt("Ingrese la altura del deportista (m):"));
let imc = pesoD / (altura * altura);

if (imc < 16) {
    alert("Criterio de ingreso al hospital");
} else if (imc >= 16 && imc < 18) {
    alert("Infra peso");
} else if (imc >= 18 && imc < 25) {
    alert("Peso normal");
} else if (imc >= 25 && imc < 30) {
    alert("Sobrepeso (grado I)");
} else if (imc >= 30 && imc < 35) {
    alert ("Sobrepeso crónico (grado II)");
} else if (imc >= 35 && imc < 40) {
    alert("Sobrepso crónico (grado III)");
} else {
    alert("Obesidad mórbida (grado IV)");
}

/**
 * 12 EJERCICIO
 */

let temperatura = Number(prompt("Ingrese la temperatura en °C:"));

if (temperatura < 0) {
    alert("Clima helado");
} else if (temperatura >= 0 && temperatura < 10) {
    alert("Clima muy frío");
} else if (temperatura >= 10 && temperatura < 20) {
    alert("Clima frío");
} else if (temperatura >= 20 && temperatura < 30) {
    alert("Clima normal");
} else if (temperatura >= 30 && temperatura < 40) {
    alert("Hace calor");
} else {
    alert("Hace mucho calor");
}

/**
 * 13 EJERCICIO
 */

let lado1 = Number(prompt("Ingrese el lado 1 del triángulo:"));
let lado2 = Number(prompt("Ingrese el lado 2 del triángulo:"));
let lado3 = Number(prompt("Ingrese el lado 3 del triángulo:"));

if (lado1 === lado2 && lado2 === lado3) {
    alert("El triángulo es equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    alert("El triángulo es isósceles");
} else if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    alert("Los lados del triángulo deben ser mayores a cero");
} else {
    alert("El triángulo es escaleno");
}

/**
 * 14 EJERCICIO
 */


let nivelDeRiesgo = prompt("Ingrese el nivel de riesgo (del 1 al 5):");

if (nivelDeRiesgo === "1") {
    alert("Riesgo biologico");
} else if (nivelDeRiesgo === "2") {
    alert("Riesgo químico");
} else if (nivelDeRiesgo === "3") {
    alert("Riesgo físico");
} else if (nivelDeRiesgo === "4") {
    alert("Riesgo ergonomico");
} else if (nivelDeRiesgo === "5") {
    alert("Riesgo psicosocial");
} else {
    alert("Nivel de riesgo no válido");
}

//Fin del archivo
