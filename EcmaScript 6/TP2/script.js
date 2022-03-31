document.querySelector('#tareaInput').addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        if(e.target.value !== ''){
            agregarTarea();
        }
    }
});
let tareas = [];

function refrescarTareas() {
    let lista = document.querySelector("#tareas");
    lista.innerHTML = "";
    let clases = 'tarea';
    tareas.forEach((tarea) => {
        if(tarea.completed){
            clases = 'tarea completada'
        }
        lista.innerHTML += `<div class=${clases} id=${tarea.id}>
        <input type="checkbox" onclick="completarTarea(${tarea.id})">
        <p class="textoTarea">${tarea.titulo}</p>
        </div>`
    });
}


function agregarTarea(){
    let tareaInput = document.querySelector("#tareaInput");
    let tarea = new Tarea(tareaInput.value);
    tareas.push(tarea);
    console.log(tareas);
    refrescarTareas();
    tareaInput.value = '';
}

function completarTarea(id){
    let tarea = tareas.find((tarea) => {
        return tarea.id === id;
    });
    tarea.marcar();
    refrescarTareas();
}


