let costo = 0;
let descuento=0;
let precioFinal=0;

for (let x = 1; x <= cantidad; x++)
{
    costo = prompt("Ingrese el costo del producto "+x);
    descuento += (costo *10)/100;
    precioFinal += (Number(costo));
}
precioFinal = precioFinal -descuento;

console.log("El descuento total es de: $" + descuento);
console.log("El precio total es de: $" + precioFinal);



