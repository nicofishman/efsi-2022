function validarCampos() {
    //validar que todos los campos estén llenos
    var campos = document.querySelectorAll("input");
    alerta = false;
    campos.forEach(function (campo) {
        if (isNaN(parseInt(campo.value))) alerta = true;
        if (campo.value == "" || campo.value <= 0 || campo.value > 10) {
            alerta = true;
        }
        if (alerta) alert(`Complete correctamente el campo ${campo.name}`)
    });
    return !alerta;
}

function validarInput(input) {
    console.log(input.name);
    var item = document.querySelector(`#${input.name}`);
    if (input.value > 0 && input.value <= 10) {
        item.style.backgroundColor = "green";
    } else if (input.value == "") {
        item.style.backgroundColor = "white";
    } else {
        item.style.backgroundColor = "red";
    }
}

function calcularPromedio() {
    if (!validarCampos()) return;
    var promedio = document.querySelector('#promedio');
    var inputs = document.querySelectorAll('input');
    var suma = 0;
    inputs.forEach(function (input) {
        suma += parseInt(input.value);
        console.log(suma)
    });
    var resultado = suma / inputs.length
    promedio.innerHTML = `Resultado: <br> ${resultado.toFixed(2)}`;
    promedio.style.backgroundColor = resultado >= 6 ? "green" : "red";
}

function mayorNota() {
    if (!validarCampos()) return;
    var inputs = document.querySelectorAll('input');
    var mayorNota = 0;
    var mayorMateria = [""];
    inputs.forEach(function (input, idx) {
        if (input.value > mayorNota) {
            mayorNota = input.value;
            mayorMateria = [input.name];
        } else if (input.value == mayorNota) {
            mayorMateria.push(input.name);
        } else {
            return;
        }
    });
    alert(`La nota mayor es: ${mayor}`);
}

var lenguaInput = document.querySelector("input[name=lengua]");
var efsiInput = document.querySelector("input[name=efsi]");
var matematicaInput = document.querySelector("input[name=matematica]");

lenguaInput.addEventListener("input", function () {
    validarInput(lenguaInput);
});
matematicaInput.addEventListener("input", function () {
    validarInput(matematicaInput);
});
efsiInput.addEventListener("input", function () {
    validarInput(efsiInput);
});