let myStyle ="background:#4FA03E;color:#8FFBEC;font-family:sans-serif;padding:5px;border:2px solid #fff;border-radius:5px;"
let myHeaderStyle="background:#99FF;color:#551EEE;font-family:sans-serif;padding:5px;border:2px solid #7EEE7E;font-size:30px"
let num = prompt("Ingrese un número del 1 al 10");

if (num < 1 && num > 10)
alert("Error. Ingresó un número inválido");
else{
    for (let x = 1; x <= num; x++)
    {
        console.log(`%c Tabla del ${x}`,myHeaderStyle);

        for (let multiplo = 1; multiplo <= 10; multiplo++)
        {
            console.log(`%c${x} * ${multiplo} =${x*multiplo}`,myStyle);
        }
        console.log("");
    }
}

