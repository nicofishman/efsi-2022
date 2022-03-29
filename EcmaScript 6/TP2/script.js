let tareas = [];

function refrescarTareas() {
    let lista = document.querySelector("#tareas");
    lista.innerHTML = "";
    tareas.forEach((tarea) => {
        lista.innerHTML += `<div class="tarea" id=${tarea.id}>
        <input type="checkbox" onclick="completarTarea(${tarea.id})">
        <p class="textoTarea">${tarea.titulo}</p>
        </div>`
    });
}


function agregarTarea(){
    let tareaNombre = document.querySelector("#tareaInput").value;
    let tarea = new Tarea(tareaNombre);
    tareas.push(tarea);
    console.log(tareas);
    refrescarTareas();
}

function completarTarea(id){

}