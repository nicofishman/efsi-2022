function validarCampo(campo) {
    if (campo.value == "") {
        campo.classList.remove("invalid");
        campo.classList.remove("valid");
        return false;
    }
    if (campo.value > 10 || campo.value < 1) {
        campo.classList.remove("valid");
        campo.classList.add("invalid");
        return false;
    } else {
        campo.classList.remove("invalid");
        campo.classList.add("valid");
        return true;
    }

}

function validarNotas() {
    if (!validarCampo(matematicaInput)) {
        alert("Ingrese una nota valida en matematicas");
        return false;
    } else if (!validarCampo(lenguaInput)) {
        alert("Ingrese una nota valida en lengua");
        return false;
    } else if (!validarCampo(efsiInput)) {
        alert("Ingrese una nota valida en efsi");
        return false;
    }
    return true;
}

function calcularPromedio() {
    if (!validarNotas()) return;
    var promedio = document.querySelector('#promedio');
    var inputs = document.querySelectorAll('input');
    var suma = 0;
    inputs.forEach(function (input) {
        suma += parseInt(input.value);
        console.log(suma)
    });
    var resultado = suma / inputs.length
    promedio.innerHTML = `${resultado.toFixed(2)}`;
    promedio.style.fontWeight = "bold";
    promedio.style.color = resultado >= 6 ? "green" : "red";
    if (resultado >= 6) {
        document.querySelector('#gif').src = './img/masdeseis.gif'
    } else {
        document.querySelector('#gif').src = './img/menosdeseis.gif'
    }
}

function calcularMayorNota() {
    if (!validarNotas()) return false;
    const notas = document.querySelectorAll('input');
    const materias = ["Matemática", "Lengua", "EFSI"];
    let notaMayor = 0;
    let notasArray = [];

    notas.forEach(function (nota) {
        if (parseInt(nota.value) > notaMayor) {
            notaMayor = nota.value;
        }
    });
    notas.forEach(function (nota, idx) {
        if (nota.value == notaMayor) {
            notasArray.push(materias[idx]);
        }
    });
    console.log(notasArray);
    return notasArray;
}

function mayorNota() {
    mayoresNotas = calcularMayorNota();
    if (!mayoresNotas) return;
    mayorNotaDiv = document.querySelector('#notas');
    console.log(mayorNotaDiv);
    mayorNotaDiv.innerHTML = `<ul>${mayoresNotas.map(nota => `<li class="notaAzul">${nota}</li>`).join('')}</ul>`;
}

var lenguaInput = document.querySelector("input[name=lengua]");
var efsiInput = document.querySelector("input[name=efsi]");
var matematicaInput = document.querySelector("input[name=matematica]");

lenguaInput.addEventListener("input", function () {
    validarCampo(lenguaInput);
});
matematicaInput.addEventListener("input", function () {
    validarCampo(matematicaInput);
});
efsiInput.addEventListener("input", function () {
    validarCampo(efsiInput);
});