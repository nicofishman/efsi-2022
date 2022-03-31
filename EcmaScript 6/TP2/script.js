document.querySelector('#tareaInput').addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        agregarTarea();
    }
});
let tareas = [];

function refrescarTareas() {
    let lista = document.querySelector("#top");
    lista.innerHTML = "";
    tareas.forEach((tarea) => {
        let clases = "tarea";
        if(tarea.completed){
            clases = 'tarea completada'
        }
        lista.innerHTML += `<div class=\"${clases}\" id=${tarea.id}>
        <input type="checkbox" ${tarea.completed && "checked disabled"} onclick="completarTarea(${tarea.id})">
        <p class="textoTarea">${tarea.titulo}</p>
        </div>`
    });
}


function agregarTarea(){
    let tareaInput = document.querySelector("#tareaInput");
    if(tareaInput.value.trim() === '') return;
    let tarea = new Tarea(tareaInput.value);
    tareas.push(tarea);
    refrescarTareas();
    tareaInput.value = '';
}

function completarTarea(id){
    let tarea = tareas.find((tarea) => tarea.id === id);
    tarea.marcar();
    console.log('marca',tarea.spentTime);
    refrescarTareas();
    console.log(tareas);
}

function mostrarMasRapida(){
    const bottomDiv = document.querySelector("#bottom");
    bottomDiv.style.visibility = "visible";
    let hayMasRapida = false;
    tareas.forEach((tarea) => {
        if(tarea.completed) {
            hayMasRapida = true;
            return
        }; 
    });

    const tareaMasRapidaDiv = document.querySelector("#tareaMasRapida"); 
    if(!hayMasRapida){
        tareaMasRapidaDiv.innerHTML = "No hay tareas completadas";
        return;
    }
    const tareaMasRapida = tareas.reduce((a,b) => a.spentTime < b.spentTime ? a : b);
    tareaMasRapidaDiv.innerHTML = "";
    tareaMasRapidaDiv.innerHTML = `<h3>Tarea más rápida:</h3>
    <div class="tarea mas-rapida" id=${tareaMasRapida.id}>
    <p class="textoTarea">${tareaMasRapida.titulo}</p>
    </div>`
}